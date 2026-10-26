import { useState } from 'react';

const tones = [
  'linear-gradient(135deg, #f3ece2, #e6d6c3)',
  'linear-gradient(135deg, #f7f1e8, #ead9c6)',
  'linear-gradient(135deg, #efe4d6, #dcc7ad)',
];

export default function Media({ src, alt = '', className = '', tone = 0 }) {
    const [failed, setFailed] = useState(false);
    return (
        <div className={`media ${className}`} style={{
            position: 'relative',
            overflow: 'hidden',
            background: tones[tone % tones.length]
        }}>
            {!failed && (
                <img
                    src= {src}
                    alt={alt}
                    loading="lazy"
                    onError={() => setFailed(true)}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
            )}
        </div>
    );
}