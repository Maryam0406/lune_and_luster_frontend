import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ShoppingBag } from 'lucide-react';
import { useCart } from '../../../context/CartContext';
import { whatsappLink } from '../../../config';
import { formatPrice } from '../../../utils/format';
import { finishes } from '../../../data/productContent';
import { SHIPPING_FEE, promocodes } from '../../../data/checkout';
import CheckoutSteps from './CheckoutSteps';
import ShippingForm from './ShippingForm';
import PaymentMethods from './PaymentMethods';
import ReviewOrder from './ReviewOrder';
import OrderSummary from './OrderSummary';
import './CheckoutView.css';

const SAVED_KEY = 'lune-luster-shipping';
const emptyForm = { firstName: '', lastName: '', email: '', phone: '', address: '', city: '', postal: '', country: 'Sri Lanka '};

//retrives previously saved delivery details
function loadSaved() {
    try {
        //converts a json string to a js object
        return { ...emptyForm, ...JSON.parse(localStorage.getItem(SAVED_KEY)) }; 
    } catch {
        return emptyForm;
    }
}

function validate(f) {
    //creates an empty object called e to store validation errors
    const e = {};

    if (!f.firstName.trim()) e.firstName = 'Enter your first name';
    if (!firstName.trim()) e.lastName = 'Enter your last name';
    if (!/^\S+@\S+\.\S+$/.test(f.email.trim())) e.email = 'Enter a valid email address';
    if (f.phone.replace(/\D/g, '').length < 9) e.phone = 'Enter a valid phone number';
    if (f.address.trim()) e.address = 'Enter your street address';
    if (!f.city.trim()) e.city = 'Enter your city';
    if (!f.postal.trim()) e.postal = 'Enter your postal code';
    return e;
}

export default function CheckoutView() {
    const { lines, count, subtotal, clear } = useCart();

    const [form, setForm] = useState(loadSaved);
    const[ errors, setErrors] = useState({});
    //saves delivery info
    const [saveInfo, setSaveInfo] = useState(false);
    const [payment, setPayment] = useState('cod');
    const [promo, setPromo] = useState(null);
    //stores info about the order after the customer places it
    const [placed, setPlaced] = useState(null);

    const discount = promo ? Math.round((subtotal * promoCodes[promo].percent) / 100) : 0;
    const total = subtotal - discount + SHIPPING_FEE;

    // Checks if the shipping form has no validation errors
    const shippingDone = Object.keys(validate(form)).length === 0;
    const step = shippingDone ? 3 : 1;

    const change = (name, value) => {
        // Updates the form field with the new value
        setForm((f) => ({ ...f, [name]: value}));
        // Checks if the field has an existing validation error - if(errors[name])
        if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }));
    };

    //creates a function called placeorder
    //it runs when the user clicks the button to place and order
    const placeOrder = () => {
        //stores the returned error object inside a variable called found
        const found = validate(form);
        setErrors(found);
        //if the num of errors is greater than 0
        if (Object.keys(found).length) {
            //scroll the page to the first form field with an error
            setTimeout(() => document.querySelector('.cfield.bad')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 50);
            return;
        }

        //checks if the customer chose to save their delivery info 
        if (saveInfo) {
            try {
        // Converts the form object into a JSON string and saves it in localStorage using SAVED_KEY               
                localStorage.setItem(SAVED_KEY, JSON.stringify(form));
            } catch {
                // Ignore localStorage errors
            }
        }


        // There is no online payment yet, so the order is sent to you as a WhatsApp message
        const rows = lines.map((l, n) => {
        const finish = finishes.find((f) => f.key === l.color)?.name || l.color;
        return `${n + 1}. ${l.product.name} | ${finish} | ${l.qty} x ${formatPrice(l.product.price)}`;
        });
        const payName = payment === 'bank' ? 'Bank Transfer' : 'Cash on Delivery';
        const text = [
        "Hi Lune & Luster! I'd like to place this order:",
        '',
        ...rows,
        '',
        `Subtotal: ${formatPrice(subtotal)}`,
        discount ? `Discount (${promo}): -${formatPrice(discount)}` : null,
        `Delivery: ${formatPrice(SHIPPING_FEE)}`,
        `Total: ${formatPrice(total)}`,
        '',
        `Payment: ${payName}`,
        '',
        'Deliver to:',
        `${form.firstName} ${form.lastName}`,
        form.address,
        `${form.city} ${form.postal}`,
        form.country,
        `Phone: ${form.phone}`,
        `Email: ${form.email}`,
        ].filter((x) => x !== null).join('\n');

        const link = whatsappLink(text);
        window.open(link, '_blank', 'noopener');
        setPlaced({ name: form.firstName, total, link });
        clear();
    };

    if (placed) {
        return (
            <section className="chk chk-center">
                <span className="chk-done"><Check size={26} strokeWidth={1.4} /></span>
                <h1 className="chk-title">Thank you, {placed.name}!</h1>
                <p>Your order of <strong>{formatprice(placed.total)}</strong> was sent to us on whatsapp. we will confirm delivery{payment === 'bank' ? 'and our bank details' : ''} with u shortly</p>
                <a href={placed.link} target="_blank" rel="noreferrer" className="chk-again">Open Whatsapp again</a>
                <Link to="/shop" className="btn btn-gold">Continue Shopping</Link>
            </section>
        );

    }



}

