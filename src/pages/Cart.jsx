import usePageTitle from '../hooks/usePageTitle';

export default function Cart() {
    usePageTitle('Your Cart');
    return <CartView />;
}