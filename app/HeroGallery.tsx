import Image from "next/image";

const slides = [
  {
    src: "/ada-tir-hero.jpeg",
    alt: "Ada Nakliyat açık kasa tırı",
    title: "Gerçek araçlarımız",
    text: "Konya'dan Türkiye'nin dört bir yanına",
  },
  {
    src: "/ada-kamyon-on.jpeg",
    alt: "Ada Nakliyat şehir içi yük taşıma kamyonu",
    title: "Şehir içi taşıma",
    text: "Konya içinde hızlı ve güvenli sevkiyat",
  },
  {
    src: "/ada-daf-cekici.jpeg",
    alt: "Ada Nakliyat DAF çekici aracı",
    title: "Şehirler arası nakliyat",
    text: "Gidiş-dönüş yük taşımacılığı",
  },
  {
    src: "/ada-yuklu-sevkiyat.jpeg",
    alt: "Yüklenmiş nakliye aracı ve güvenli sevkiyat",
    title: "Parsiyel ve komple yük",
    text: "Yükünüze uygun planlı taşıma",
  },
];

export default function HeroGallery() {
  return (
    <div className="hero-carousel" aria-roledescription="carousel" aria-label="Ada Nakliyat araç fotoğrafları">
      {slides.map((slide, index) => (
        <input className="hero-carousel-radio" type="radio" name="hero-gallery" id={`hero-radio-${index + 1}`} defaultChecked={index === 0} key={`radio-${slide.src}`} />
      ))}
      <div className="hero-carousel-track">
        {slides.map((slide, index) => {
          const previous = (index - 1 + slides.length) % slides.length;
          const next = (index + 1) % slides.length;
          return (
            <figure className="hero-photo-frame" key={slide.src}>
              <Image src={slide.src} fill sizes="(max-width: 760px) 100vw, 46vw" priority={index === 0} unoptimized alt={slide.alt} />
              <figcaption className="hero-photo-label"><b>{slide.title}</b><small>{slide.text}</small></figcaption>
              <nav className="hero-carousel-arrows" aria-label={`${index + 1}. fotoğraf kontrolleri`}>
                <label htmlFor={`hero-radio-${previous + 1}`} role="button" tabIndex={0} aria-label="Önceki fotoğraf">‹</label>
                <span>{index + 1} / {slides.length}</span>
                <label htmlFor={`hero-radio-${next + 1}`} role="button" tabIndex={0} aria-label="Sonraki fotoğraf">›</label>
              </nav>
            </figure>
          );
        })}
      </div>
      <nav className="hero-carousel-dots" aria-label="Fotoğraf seç">
        {slides.map((slide, index) => <label key={slide.src} htmlFor={`hero-radio-${index + 1}`} role="button" tabIndex={0} aria-label={`${index + 1}. fotoğrafı göster`} />)}
      </nav>
      <small className="hero-swipe-hint">Oklarla diğer araçları görün</small>
    </div>
  );
}
