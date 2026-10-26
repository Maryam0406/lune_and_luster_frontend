// src/hooks/usePageTitle.js
import { useEffect } from 'react';
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Lune & Luster` : 'Lune & Luster | Personalised Jewellery';
  }, [title]);
}

// src/utils/format.js
export const formatPrice = (n) => `Rs. ${n.toLocaleString('en-LK')}`;