import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import products from '../data/products';
import categories from '../data/categories';
import ShopHeader from '../components/ui/shop/ShopHeader';
import ProductGrid from '../components/ui/shop/ProductGrid';
import Navbar from '../components/layouts/Navbar';


export default function Shop() {
  const [params] = useSearchParams();
  const categoryId = Number(params.get('category')) || 0;
  const category = categories.find((c) => c.id === categoryId);

  usePageTitle(category ? category.name : 'Shop Now');

  // newest pieces first
  const list = useMemo(() => {
    const items = categoryId ? products.filter((p) => p.categoryId === categoryId) : [...products];
    return items.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
  }, [categoryId]);

  return (
    <>
      <ShopHeader title={category ? category.name : 'All Jewellery'} />
      <ProductGrid products={list} />
    </>
  );
}