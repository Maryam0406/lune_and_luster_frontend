import './Banner.css';

// Put your picture at public/images/banner.jpg  (or change the name here)
const BANNER_IMAGE = './images/hero-1.png';

export default function Banner() {
  return (
    <section className="banner" id="about" aria-label="Lune & Luster">
      {/* The picture is fixed to the screen. The section is just a window that
          shows whichever part of the picture is behind it as you scroll. */}
      <div
        className="banner-img"
        style={{ backgroundImage: `url(${BANNER_IMAGE}), linear-gradient(135deg, #efe4d6, #dcc7ad)` }}
      />
    </section>
  );
}