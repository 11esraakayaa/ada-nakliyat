const CONTACT = {
  phoneLabel: "05XX XXX XX XX",
  phoneHref: "#iletisim",
  whatsappHref: "#iletisim",
  mapsHref: "#iletisim",
  address: "Konya / Hizmet Bölgesi",
};

type IconName = "phone" | "whatsapp" | "pin" | "truck" | "route" | "clock" | "shield" | "arrow";

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
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

const services = [
  { icon: "truck" as IconName, number: "01", title: "Şehir içi taşıma", text: "Konya içinde yükünüz için hızlı ve doğrudan taşıma desteği." },
  { icon: "route" as IconName, number: "02", title: "Şehirler arası nakliyat", text: "Konya çıkışlı veya Konya varışlı şehirler arası taşıma çözümleri." },
  { icon: "shield" as IconName, number: "03", title: "Parça yük taşıma", text: "Tek parça veya az miktardaki yükleriniz için uygun araç ve rota planı." },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#anasayfa" aria-label="Ada Nakliyat ana sayfa">
            <span className="brand-mark"><Icon name="truck" size={25} /></span>
            <span><strong>ADA</strong><small>NAKLİYAT</small></span>
          </a>
          <nav className="main-nav" aria-label="Ana menü">
            <a href="#hizmetler">Hizmetler</a><a href="#hakkimizda">Hakkımızda</a><a href="#iletisim">İletişim</a>
          </nav>
          <div className="header-contact">
            <a className="address-link" href={CONTACT.mapsHref}><Icon name="pin" size={18} /><span>{CONTACT.address}</span></a>
            <a className="phone-link" href={CONTACT.phoneHref}><Icon name="phone" size={18} /><span>{CONTACT.phoneLabel}</span></a>
            <a className="whatsapp-button" href={CONTACT.whatsappHref}><Icon name="whatsapp" size={19} /> WhatsApp</a>
          </div>
        </div>
      </header>

      <section className="hero" id="anasayfa">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="container hero-content">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Konya&apos;dan yola çıkar, güvenle ulaştırır</p>
            <h1>Yükünüzü<br /><em>güvenle</em> taşıyalım.</h1>
            <p className="hero-lead">Konya şehir içi ve şehirler arası nakliyat ihtiyaçlarınız için doğrudan iletişim, hızlı planlama ve güvenilir taşıma.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={CONTACT.phoneHref}><Icon name="phone" /> Hemen ara</a>
              <a className="button button-ghost" href={CONTACT.whatsappHref}><Icon name="whatsapp" /> WhatsApp&apos;tan yaz</a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
            <div className="truck-card">
              <div className="truck-card-top"><span>ADA</span><small>NAKLİYAT</small></div>
              <Icon name="truck" size={116} />
              <div className="route-line"><span /><i /><span /></div>
            </div>
            <div className="hero-badge"><Icon name="clock" /><span><b>Doğrudan iletişim</b><small>Arayın, yükünüzü konuşalım</small></span></div>
          </div>
        </div>
        <div className="hero-bottom"><div className="container trust-row"><span><b>Konya</b> merkezli hizmet</span><span><b>Şehir içi</b> taşıma</span><span><b>Şehirler arası</b> nakliyat</span></div></div>
      </section>

      <section className="section services" id="hizmetler">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow dark"><span /> Hizmetlerimiz</p><h2>Yükünüz nereye gidecek?</h2></div>
            <p>Bizi arayın veya WhatsApp&apos;tan yazın; yükün türünü ve rotayı birlikte değerlendirelim.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => <article className="service-card" key={service.title}>
              <div className="service-card-head"><span className="service-icon"><Icon name={service.icon} size={30} /></span><small>{service.number}</small></div>
              <h3>{service.title}</h3><p>{service.text}</p><a href={CONTACT.whatsappHref}>Bilgi al <Icon name="arrow" size={18} /></a>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section about" id="hakkimizda">
        <div className="container about-grid">
          <div className="about-visual"><span className="road-label">KONYA</span><div className="road"><i /><i /></div><div className="location-pulse"><Icon name="pin" size={26} /></div></div>
          <div className="about-copy">
            <p className="eyebrow dark"><span /> Ada Nakliyat</p>
            <h2>Aracı yok, beklemesi yok. Doğrudan nakliyecinizle konuşun.</h2>
            <p>Taşınacak yükünüzü, çıkış ve varış noktasını bize iletin. Uygun araç, tarih ve fiyat için doğrudan görüşelim.</p>
            <ul><li><Icon name="clock" /> Hızlı dönüş ve net planlama</li><li><Icon name="route" /> Konya merkezli esnek rota</li><li><Icon name="phone" /> Tek telefonla doğrudan iletişim</li></ul>
          </div>
        </div>
      </section>

      <section className="contact" id="iletisim">
        <div className="container contact-inner">
          <div><p className="eyebrow"><span /> Yükünüz hazırsa</p><h2>Rotayı konuşalım.</h2><p>Çıkış noktası, varış noktası ve yükünüz hakkında bilgi verin; size en kısa sürede dönüş yapalım.</p></div>
          <div className="contact-card">
            <a href={CONTACT.phoneHref}><span><Icon name="phone" /><small>Telefon</small></span><b>{CONTACT.phoneLabel}</b></a>
            <a href={CONTACT.whatsappHref}><span><Icon name="whatsapp" /><small>WhatsApp</small></span><b>Mesaj gönder</b></a>
            <a href={CONTACT.mapsHref}><span><Icon name="pin" /><small>Konum</small></span><b>{CONTACT.address}</b></a>
          </div>
        </div>
      </section>

      <footer><div className="container footer-inner"><a className="brand footer-brand" href="#anasayfa"><span className="brand-mark"><Icon name="truck" size={25} /></span><span><strong>ADA</strong><small>NAKLİYAT</small></span></a><p>Konya şehir içi ve şehirler arası nakliyat.</p><small>© 2026 Ada Nakliyat</small></div></footer>

      <nav className="mobile-contact-bar" aria-label="Hızlı iletişim">
        <a href={CONTACT.phoneHref}><Icon name="phone" /><span>Ara</span></a>
        <a className="mobile-whatsapp" href={CONTACT.whatsappHref}><Icon name="whatsapp" /><span>WhatsApp</span></a>
        <a href={CONTACT.mapsHref}><Icon name="pin" /><span>Yol tarifi</span></a>
      </nav>
    </main>
  );
}
