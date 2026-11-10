import './ShippingForm.css';

// One box: the input and (if something is wrong) a small red message under it
function Field({ name, placeholder, type = 'text', form, errors, onChange, autoComplete }) {
  return (
    <label className={`cfield ${errors[name] ? 'bad' : ''}`}>
      <input
        type={type}
        value={form[name]}
        placeholder={placeholder}
        aria-label={placeholder}
        autoComplete={autoComplete}
        onChange={(e) => onChange(name, e.target.value)}
      />
      {errors[name] && <span className="cfield-error">{errors[name]}</span>}
    </label>
  );
}

// Section 1: where should we send your order?
export default function ShippingForm({ form, errors, onChange, saveInfo, onSave }) {
  const p = { form, errors, onChange };
  return (
    <div className="csec">
      <div className="csec-head">
        <span className="csec-num">1</span>
        <div>
          <h2 className="csec-title">Shipping Information</h2>
          <p className="csec-sub">Where should we send your order?</p>
        </div>
      </div>

      <div className="shipgrid">
        <Field name="firstName" placeholder="First Name" autoComplete="given-name" {...p} />
        <Field name="lastName" placeholder="Last Name" autoComplete="family-name" {...p} />
        <div className="span2"><Field name="email" type="email" placeholder="Email Address" autoComplete="email" {...p} /></div>
        <div className="span2"><Field name="phone" type="tel" placeholder="Phone Number" autoComplete="tel" {...p} /></div>
        <div className="span2"><Field name="address" placeholder="Address (Street)" autoComplete="street-address" {...p} /></div>
        <Field name="city" placeholder="City" autoComplete="address-level2" {...p} />
        <Field name="postal" placeholder="Postal Code" autoComplete="postal-code" {...p} />

        <div className="span2">
          <label className="cfield">
            <select value={form.country} onChange={(e) => onChange('country', e.target.value)} aria-label="Country">
              <option>Sri Lanka</option>
            </select>
          </label>
        </div>
      </div>

      <label className="ccheck">
        <input type="checkbox" checked={saveInfo} onChange={(e) => onSave(e.target.checked)} />
        <span>Save this information for next time</span>
      </label>
    </div>
  );
}