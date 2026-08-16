import Image from "next/image";
import HeroGallery from "./HeroGallery";

const CONTACT = {
  phoneLabel: "0507 467 32 45",
  phoneHref: "tel:+905074673245",
  whatsappHref: "https://wa.me/905074673245?text=Merhaba%2C%20Ada%20Nakliyat%20web%20sitesinden%20ula%C5%9F%C4%B1yorum.%20Ta%C5%9F%C4%B1nacak%20y%C3%BCk%C3%BCm%20i%C3%A7in%20fiyat%20bilgisi%20alabilir%20miyim%3F",
  mapsHref: "https://www.google.com/maps/search/?api=1&query=Horozluhan%20Mahallesi%20%C4%B0stikamet%20Caddesi%20Yeni%20Kamyon%20Garaj%C4%B1%20No%2053%20Sel%C3%A7uklu%20Konya",
  addressShort: "Yeni Kamyon Garajı / Selçuklu",
  address: "Horozluhan Mahallesi, İstikamet Caddesi, Yeni Kamyon Garajı No: 53, Selçuklu/Konya",
  email: "adanakliyat6@gmail.com",
  emailHref: "mailto:adanakliyat6@gmail.com",
  hours: "Pazartesi–Cumartesi 08.00–18.00",
};

type IconName = "phone" | "whatsapp" | "pin" | "truck" | "route" | "clock" | "shield" | "arrow" | "mail";

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92Z" />,
    whatsapp: <><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8A8.5 8.5 0 0 1 12.5 20a8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5 8.5 8.5 0 0 1 8.7 3.9 8.38 8.38 0 0 1 12.5 3h.5a8.48 8.48 0 0 1 8 8v.5Z" /><path d="M9 8.5c.4 2.8 2.2 4.6 5 5" /></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    truck: <><path d="M3 6h11v10H3z" /><path d="M14 10h4l3 3v3h-7z" /><circle cx="7" cy="18" r="2" /><circle cx="18" cy="18" r="2" /></>,
    route: <><circle cx="6" cy="19" r="3" /><circle cx="18" cy="5" r="3" /><path d="M8.5 17.5c4-1.5 2-6 6-8.5" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    shield: <><path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
    arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

const services = [
  { icon: "pin" as IconName, number: "01", title: "Şehir içi yük taşıma", text: "Konya içinde yüklerinizi planlanan noktadan alıp güvenle adresine ulaştırıyoruz." },
  { icon: "route" as IconName, number: "02", title: "Şehirler arası gidiş-dönüş", text: "Konya çıkışlı veya Konya varışlı şehirler arası gidiş ve dönüş yüklerinizi taşıyoruz." },
  { icon: "shield" as IconName, number: "03", title: "Parsiyel yük taşıma", text: "Aracın tamamını doldurmayan parça yüklerinizi uygun rota planıyla güvenle taşıyoruz." },
  { icon: "truck" as IconName, number: "04", title: "Komple yük taşıma", text: "Aracın tamamının tek müşteriye ayrıldığı komple yüklerinizi sigortalı şekilde ulaştırıyoruz." },
];

const fleetPhotos = [
  { src: "/ada-daf-cekici.jpeg", alt: "Ada Nakliyat DAF çekici aracı", className: "gallery-tall" },
  { src: "/ada-kamyon-on.jpeg", alt: "Ada Nakliyat şehir içi yük taşıma kamyonu", className: "gallery-wide" },
  { src: "/ada-kamyon-yan.jpeg", alt: "Ada Nakliyat açık kasa yük kamyonu", className: "" },
  { src: "/ada-cekici-gunbatimi.jpeg", alt: "Ada Nakliyat çekicisi", className: "" },
  { src: "/ada-yuklu-sevkiyat.jpeg", alt: "Yüklenmiş nakliye aracı ve güvenli sevkiyat", className: "gallery-wide" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#anasayfa" aria-label="Ada Nakliyat ana sayfa">
            <Image className="brand-logo" src="/ada-logo-light.svg" width={180} height={48} alt="Ada Nakliyat" priority />
          </a>
          <nav className="main-nav" aria-label="Ana menü">
            <a href="#hizmetler">Hizmetler</a><a href="#araclarimiz">Araçlarımız</a><a href="#hakkimizda">Hakkımızda</a><a href="#iletisim">İletişim</a>
          </nav>
          <div className="header-contact">
            <a className="address-link" href={CONTACT.mapsHref} target="_blank" rel="noreferrer"><Icon name="pin" size={18} /><span>{CONTACT.addressShort}</span></a>
            <a className="phone-link" href={CONTACT.phoneHref}><Icon name="phone" size={18} /><span>{CONTACT.phoneLabel}</span></a>
            <a className="whatsapp-button" href={CONTACT.whatsappHref} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={19} /> WhatsApp</a>
          </div>
        </div>
      </header>

      <section className="hero" id="anasayfa">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="container hero-content">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Konya&apos;dan yola çıkar, güvenle ulaştırır</p>
            <h1>Yükünüzü<br /><em>güvenle</em> taşıyalım.</h1>
            <p className="hero-lead">Şehir içi ve şehirler arası gidiş-dönüş; parsiyel veya komple yüklerinizi sigortalı ve güvenli şekilde taşıyoruz.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={CONTACT.phoneHref}><Icon name="phone" /> Hemen ara</a>
              <a className="button button-ghost" href={CONTACT.whatsappHref} target="_blank" rel="noreferrer"><Icon name="whatsapp" /> WhatsApp&apos;tan yaz</a>
            </div>
          </div>
          <div className="hero-visual">
            <HeroGallery />
          </div>
        </div>
        <div className="hero-bottom"><div className="container trust-row"><span><b>Sigortalı</b> taşıma</span><span><b>Parsiyel &amp; komple</b> yük</span><span><b>Gidiş &amp; dönüş</b> nakliyat</span></div></div>
      </section>

      <section className="section services" id="hizmetler">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow dark"><span /> Hizmetlerimiz</p><h2>Yükünüz nereye gidecek?</h2></div>
            <p>Bizi arayın veya WhatsApp&apos;tan yazın; yükün parsiyel ya da komple oluşuna göre uygun taşıma planını birlikte oluşturalım.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => <article className="service-card" key={service.title}>
              <div className="service-card-head"><span className="service-icon"><Icon name={service.icon} size={30} /></span><small>{service.number}</small></div>
              <h3>{service.title}</h3><p>{service.text}</p><a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">Bilgi al <Icon name="arrow" size={18} /></a>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section fleet" id="araclarimiz">
        <div className="container">
          <div className="section-heading fleet-heading">
            <div><p className="eyebrow dark"><span /> Araçlarımız ve taşımalarımız</p><h2>Yükünüz yola hazır.</h2></div>
            <p>Farklı yük tipleri için uygun araçlarla şehir içi ve şehirler arası taşımacılık yapıyoruz. Parsiyel veya komple yükünüz için bizi aramanız yeterli.</p>
          </div>
          <div className="fleet-gallery">
            {fleetPhotos.map((photo) => (
              <figure className={photo.className} key={photo.src}>
                <Image src={photo.src} fill sizes="(max-width: 760px) 100vw, 50vw" unoptimized alt={photo.alt} />
              </figure>
            ))}
          </div>
          <div className="fleet-callout">
            <span><Icon name="shield" size={27} /></span>
            <div><b>Sigortalı ve güvenli taşıma</b><small>Yükün çıkış ve varış noktasını paylaşın, size uygun taşıma planını birlikte oluşturalım.</small></div>
            <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">WhatsApp&apos;tan bilgi al <Icon name="arrow" size={18} /></a>
          </div>
        </div>
      </section>

      <section className="section about" id="hakkimizda">
        <div className="container about-grid">
          <div className="about-visual"><span className="road-label">KONYA</span><div className="road"><i /><i /></div><div className="location-pulse"><Icon name="pin" size={26} /></div></div>
          <div className="about-copy">
            <p className="eyebrow dark"><span /> Ada Nakliyat</p>
            <h2>Aracı yok, beklemesi yok. Doğrudan nakliyecinizle konuşun.</h2>
            <p>Taşınacak yükünüzü, çıkış ve varış noktasını bize iletin. Şehir içi veya şehirler arası, parsiyel ya da komple yükünüz için uygun araç, tarih ve fiyatı doğrudan konuşalım.</p>
            <ul><li><Icon name="clock" /> Hızlı dönüş ve net planlama</li><li><Icon name="route" /> Şehir içi ve şehirler arası gidiş-dönüş</li><li><Icon name="shield" /> Belgeli, sigortalı ve güvenli taşıma</li><li><Icon name="truck" /> Parsiyel ve komple yük seçenekleri</li><li><Icon name="phone" /> Tek telefonla doğrudan iletişim</li></ul>
          </div>
        </div>
      </section>

      <section className="contact" id="iletisim">
        <div className="container contact-inner">
          <div><p className="eyebrow"><span /> Yükünüz hazırsa</p><h2>Rotayı konuşalım.</h2><p>Çıkış noktası, varış noktası ve yükünüz hakkında bilgi verin; size en kısa sürede dönüş yapalım.</p></div>
          <div className="contact-card">
            <a href={CONTACT.phoneHref}><span><Icon name="phone" /><small>Telefon</small></span><b>{CONTACT.phoneLabel}</b></a>
            <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer"><span><Icon name="whatsapp" /><small>WhatsApp</small></span><b>Mesaj gönder</b></a>
            <a href={CONTACT.emailHref}><span><Icon name="mail" /><small>E-posta</small></span><b>{CONTACT.email}</b></a>
            <a href={CONTACT.mapsHref} target="_blank" rel="noreferrer"><span><Icon name="pin" /><small>Adres</small></span><b>{CONTACT.address}</b></a>
            <div className="contact-detail"><span><Icon name="clock" /><small>Çalışma saatleri</small></span><b>{CONTACT.hours}</b></div>
          </div>
        </div>
      </section>

      <footer><div className="container footer-inner"><a className="brand footer-brand" href="#anasayfa"><Image className="brand-logo" src="/ada-logo-light.svg" width={180} height={48} alt="Ada Nakliyat" /></a><p>Konya şehir içi ve şehirler arası nakliyat.</p><small>© 2026 Ada Nakliyat</small></div></footer>

      <nav className="mobile-contact-bar" aria-label="Hızlı iletişim">
        <a href={CONTACT.phoneHref}><Icon name="phone" /><span>Ara</span></a>
        <a className="mobile-whatsapp" href={CONTACT.whatsappHref} target="_blank" rel="noreferrer"><Icon name="whatsapp" /><span>WhatsApp</span></a>
        <a href={CONTACT.mapsHref} target="_blank" rel="noreferrer"><Icon name="pin" /><span>Yol tarifi</span></a>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MovingCompany",
            name: "Ada Nakliyat",
            telephone: "+90 507 467 32 45",
            email: CONTACT.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Horozluhan Mahallesi, İstikamet Caddesi, Yeni Kamyon Garajı No: 53",
              addressLocality: "Selçuklu",
              addressRegion: "Konya",
              addressCountry: "TR",
            },
            openingHours: "Mo-Sa 08:00-18:00",
            areaServed: "Konya",
            description: "Şehir içi ve şehirler arası gidiş-dönüş parsiyel veya komple yük taşımacılığı. Yükler sigortalı ve güvenli şekilde taşınır.",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Nakliyat hizmetleri",
              itemListElement: services.map((service) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: service.title },
              })),
            },
          }),
        }}
      />
    </main>
  );
}
