import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './Accordion.css';

// A heading that opens and closes its text:  PRODUCT DETAILS  —
export default function Accordion({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`acc ${open ? 'open' : ''}`}>
      <button className="acc-head" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{title}</span>
        {open ? <Minus size={15} strokeWidth={1.4} /> : <Plus size={15} strokeWidth={1.4} />}
      </button>
      <div className="acc-body"><div className="acc-inner">{children}</div></div>
    </div>
  );
}