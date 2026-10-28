import { MessageCircle, Mail, AtSign } from 'lucide-react';
import { SITE, whatsappLink } from '../../../config';
import './ContactInfo.css';

// The three ways to reach you, side by side, separated by thin lines
export default function ContactInfo() {
  return (
    <div className="cinfo-cards">
      <a href={whatsappLink()} target="_blank" rel="noreferrer" className="c-card">
        <span className="c-ico"><MessageCircle size={20} strokeWidth={1.4} /></span>
        <h3>WhatsApp</h3>
        <p>The fastest way to reach us</p>
      </a>
      <a href={SITE.instagram} target="_blank" rel="noreferrer" className="c-card">
        <span className="c-ico"><AtSign size={20} strokeWidth={1.4} /></span>
        <h3>Instagram</h3>
        <p>See our latest pieces</p>
      </a>
      <a href={`mailto:${SITE.email}`} className="c-card">
        <span className="c-ico"><Mail size={20} strokeWidth={1.4} /></span>
        <h3>Email</h3>
        <p className="keep-case">{SITE.email}</p>
      </a>
    </div>
  );
}