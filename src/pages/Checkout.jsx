import usePageTitle from '../hooks/usePageTitle';
import CheckoutView from '../components/CheckoutView';

export default function Checkout() {
    usePageTitle('Checkout');
    return <CheckoutView />;
}
