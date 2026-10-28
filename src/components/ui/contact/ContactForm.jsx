import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '../../../config';
import './ContactForm.css';

// One line, one button. The message opens in WhatsApp, ready to send.
// (Later we can send it to your backend and save it in PostgreSQL instead.)
export default function ContactForm() {
  const [note, setNote] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const text = note.trim()
      ? `Hi Lune & Luster! ${note.trim()}`
      : "Hi Lune & Luster! I'd love to know more.";
    window.open(whatsappLink(text), '_blank', 'noopener');
  };

  return (
    <div className="cform">
      <div className="cform-inner">
        <span className="cform-eyebrow">Say hello</span>

        <h2 className="cform-title">
          <span className="script">It&rsquo;s</span> <span className="always">Always</span>{' '}
          <span className="script gold">Lune &amp; Luster</span>
        </h2>

        {/* thin gold line with a little diamond in the middle */}
        <div className="cform-orn" aria-hidden="true"><i /></div>

        <p className="cform-lead">
          Tell us who it&rsquo;s for, and we&rsquo;ll help you design the perfect personalised piece.
        </p>

        <form className="cform-row" onSubmit={submit}>
          <label className="cform-field">
            <span>Your message</span>
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="What are you looking for?"
            />
          </label>
          <button type="submit" className="cform-btn">
            <MessageCircle size={15} strokeWidth={1.6} /> WhatsApp Us
          </button>
        </form>

        <p className="cform-note">Your message opens in WhatsApp. We only use it to reply to your enquiry.</p>
      </div>
    </div>
  );
}