import usePageTitle from '../hooks/usePageTitle';
import CartView from '../components/ui/cart/CartView';

export default function Cart() {
    usePageTitle('Your Cart');
    return <CartView />;
}