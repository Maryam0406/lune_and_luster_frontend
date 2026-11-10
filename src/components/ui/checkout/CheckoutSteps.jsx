import { Check } from 'lucide-react';
import './CheckoutSteps.css';

const steps = ['Shipping', 'Payment', 'Review'];

// The small progress bar at the top:  (1) Shipping — (2) Payment — (3) Review
export default function CheckoutSteps({ step }) {
  return (
    <ol className="csteps">
      {steps.map((label, i) => {
        const n = i + 1;
        const state = n < step ? 'done' : n === step ? 'now' : '';
        return (
          <li key={label} className={`cstep ${state}`}>
            <span className="cstep-dot">{n < step ? <Check size={13} strokeWidth={2} /> : n}</span>
            <span className="cstep-label">{label}</span>
          </li>
        );
      })}
    </ol>
  );
}