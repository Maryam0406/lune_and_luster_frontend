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

