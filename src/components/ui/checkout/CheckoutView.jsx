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
    if (f.phone.trim()) e.address = 'Enter your street address';
    if (!f.city.trim()) e.city = 'Enter your city';
    if (!f.postal.trim()) e.postal = 'Enter your postal code';
    return e;
}

