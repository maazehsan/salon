import { useEffect, useRef, useState } from 'react'
import './App.css'

/* ─── Icons ─────────────────────────────────────────────── */
const ScissorsIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="14" cy="14" r="6" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="14" cy="34" r="6" stroke="currentColor" strokeWidth="1.8" />
    <path d="M19 18l22 22M19 30L41 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M28 24h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)
const RazorIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M10 12h22l6 8-17 18-14-14V12Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M16 12V7h14v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M17 19h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)
const BeardIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="24" cy="16" r="9" stroke="currentColor" strokeWidth="1.8" />
    <path d="M9 42c0-8.28 6.72-15 15-15s15 6.72 15 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M18 36c0 3 3 5 6 5s6-2 6-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)
const TreatmentIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="8" y="20" width="32" height="20" rx="4" stroke="currentColor" strokeWidth="1.8" />
    <path d="M14 20V12h20v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M18 16h12M24 10v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M16 30h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)
const ColorIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M24 8c-5 0-14 8-14 16a14 14 0 0028 0C38 16 29 8 24 8Z" stroke="currentColor" strokeWidth="1.8" />
    <path d="M24 38v-6M17 35l3-5M31 35l-3-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)
const KidsIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="24" cy="18" r="10" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 44c0-6.63 5.37-12 12-12s12 5.37 12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M20 15c0 2 1.8 4 4 4s4-2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M14 16c1-3 5-6 10-6s9 3 10 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)
const StarIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="16" height="16">
    <path d="M10 1l2.39 5.26L18 7.27l-4 3.9.94 5.5L10 14.1l-4.94 2.57L6 11.17 2 7.27l5.61-.01L10 1z" />
  </svg>
)
const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="16" height="16">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="22" height="22">
    <path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)
const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="22" height="22">
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
)
const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
    <path d="M3 21l1.65-5.88A9 9 0 1121 12a9 9 0 01-7.12 8.83L3 21z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M9 10c.26.74.74 2.6 2.6 3.86 1.86 1.27 3.4.87 4.4.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

/* ─── Data ───────────────────────────────────────────────── */
const services = [
  { icon: <ScissorsIcon />, name: 'Signature Cut', desc: 'Precision cut tailored to your bone structure, growth pattern, and lifestyle.', price: 'From 80 SAR', duration: '45 min' },
  { icon: <RazorIcon />, name: 'Royal Shave', desc: 'Hot-towel prep, straight-razor technique, calming aftercare finish.', price: 'From 60 SAR', duration: '35 min' },
  { icon: <BeardIcon />, name: 'Beard Sculpt', desc: 'Geometric line work, edge refinement, and curated beard oil treatment.', price: 'From 50 SAR', duration: '30 min' },
  { icon: <TreatmentIcon />, name: 'Scalp Ritual', desc: 'Deep cleanse, scalp massage, and nourishing treatment for optimal hair health.', price: 'From 100 SAR', duration: '60 min' },
  { icon: <ColorIcon />, name: 'Color & Toning', desc: 'Expert hair color, highlights, and toning using premium professional products.', price: 'From 150 SAR', duration: '75 min' },
  { icon: <KidsIcon />, name: 'Junior Cut', desc: 'A calm, welcoming experience crafted specially for young gentlemen.', price: 'From 40 SAR', duration: '30 min' },
]

const differentiators = [
  { num: '01', title: 'Master Barbers', body: 'Every barber holds international certification with a minimum of 8 years of professional experience in luxury grooming.' },
  { num: '02', title: 'Style Consultation', body: 'Every visit opens with a personal style consult — facial analysis, lifestyle fit, and a grooming blueprint built for you.' },
  { num: '03', title: 'Clinical Hygiene', body: 'Hospital-grade sterilization between each client. Fresh linens, sealed tools, zero compromise.' },
  { num: '04', title: 'Luxury Products', body: 'We use only premium European brands — Reuzel, Uppercut Deluxe, Proraso, and exclusive in-house formulations.' },
]

const testimonials = [
  { name: 'Ahmad K.', role: 'Business Executive', quote: 'Nothing compares. The attention to detail is extraordinary — I leave looking better than I thought possible. It\'s the only place I trust.', rating: 5 },
  { name: 'Faris M.', role: 'Creative Director', quote: 'Elie Salon completely changed how I think about grooming. The beard sculpt alone is worth every riyal. My clients notice the difference.', rating: 5 },
  { name: 'Khalid A.', role: 'Entrepreneur', quote: 'The atmosphere is something else — quiet, premium, focused. It\'s not a haircut, it\'s a ritual. I\'ve been coming for three years.', rating: 5 },
]

/* ─── Intersection Observer hook for reveal animations ───── */
function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

/* ─── Gallery placeholder images (CSS-generated) ─────────── */
const galleryItems = [
  { label: 'Classic Taper', aspect: 'tall' },
  { label: 'Beard Sculpt', aspect: 'wide' },
  { label: 'Royal Shave', aspect: 'square' },
  { label: 'Modern Fade', aspect: 'tall' },
  { label: 'The Studio', aspect: 'wide' },
]

/* ─── Component ──────────────────────────────────────────── */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const [servRef, servVis] = useReveal()
  const [whyRef, whyVis] = useReveal()
  const [galRef, galVis] = useReveal()
  const [testRef, testVis] = useReveal()

  return (
    <div className="page">
      {/* ── Atmosphere ── */}
      <div className="atmosphere" aria-hidden="true">
        <div className="atmo-grain" />
        <div className="atmo-vignette" />
      </div>

      {/* ════════════════════════════════════════
          NAVBAR
      ════════════════════════════════════════ */}
      <header className={`navbar ${scrolled ? 'navbar--solid' : ''}`} role="banner">
        <a className="navbar__brand" href="#home" aria-label="Elie Salon — Home">
          <img src="/images/logo.png" alt="Elie Barbershop logo" className="navbar__logo" />
          <span className="navbar__brand-text">
            <strong>ELIE</strong>
            <small>BARBERSHOP</small>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="navbar__nav" aria-label="Main navigation">
          {['services', 'about', 'gallery', 'testimonials', 'contact'].map(id => (
            <button key={id} className="navbar__link" onClick={() => scrollTo(id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
          <button className="btn btn--gold" onClick={() => scrollTo('contact')}>
            Book Appointment
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </header>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${menuOpen ? 'mobile-drawer--open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="mobile-drawer__nav">
          {['services', 'about', 'gallery', 'testimonials', 'contact'].map(id => (
            <button key={id} className="mobile-drawer__link" onClick={() => scrollTo(id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
          <button className="btn btn--gold mobile-drawer__cta" onClick={() => scrollTo('contact')}>
            Book Appointment
          </button>
        </nav>
      </div>

      <main>
        {/* ════════════════════════════════════════
            HERO
        ════════════════════════════════════════ */}
        <section id="home" className="hero" aria-label="Hero">
          {/* decorative vertical rule */}
          <div className="hero__rule" aria-hidden="true" />

          <div className="hero__inner">
            <p className="eyebrow hero__eyebrow reveal-hero delay-0">Since 2013 · Khobar, Saudi Arabia</p>

            <h1 className="hero__headline reveal-hero delay-1">
              Where<br />
              <em>Craft</em> Meets<br />
              Character.
            </h1>

            <p className="hero__sub reveal-hero delay-2">
              A premium grooming atelier for the modern gentleman —<br className="br-desk" />
              precision cuts, refined shaves, and a signature experience unlike any other.
            </p>

            <div className="hero__actions reveal-hero delay-3">
              <button className="btn btn--gold btn--lg" onClick={() => scrollTo('contact')}>
                Book Now <ArrowRight />
              </button>
              <button className="btn btn--ghost btn--lg" onClick={() => scrollTo('services')}>
                View Services
              </button>
            </div>

            {/* Trust badges */}
            <div className="hero__badges reveal-hero delay-4">
              <div className="hero__badge">
                <span className="hero__badge-num">10+</span>
                <span className="hero__badge-label">Years of Excellence</span>
              </div>
              <div className="hero__badge-divider" aria-hidden="true" />
              <div className="hero__badge">
                <span className="hero__badge-num">5,000+</span>
                <span className="hero__badge-label">Satisfied Clients</span>
              </div>
              <div className="hero__badge-divider" aria-hidden="true" />
              <div className="hero__badge">
                <span className="hero__badge-num">4.9★</span>
                <span className="hero__badge-label">Average Rating</span>
              </div>
            </div>
          </div>

          {/* Decorative corner mark */}
          <div className="hero__emblem" aria-hidden="true">
            <img src="/images/logo.png" alt="" />
          </div>
        </section>

        {/* ════════════════════════════════════════
            SERVICES
        ════════════════════════════════════════ */}
        <section id="services" className="section services" ref={servRef} aria-label="Services">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Service Menu</p>
              <h2>Crafted for the<br /><em>Discerning</em> Gentleman.</h2>
              <p className="section-sub">Every service is a deliberate ritual — designed to refine, restore, and elevate.</p>
            </div>

            <div className={`service-grid ${servVis ? 'is-visible' : ''}`}>
              {services.map((s, i) => (
                <article
                  key={s.name}
                  className="service-card"
                  style={{ '--i': i }}
                  aria-label={s.name}
                >
                  <div className="service-card__icon">{s.icon}</div>
                  <h3 className="service-card__name">{s.name}</h3>
                  <p className="service-card__desc">{s.desc}</p>
                  <footer className="service-card__footer">
                    <span className="service-card__duration">{s.duration}</span>
                    <span className="service-card__price">{s.price}</span>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            WHY ELIE
        ════════════════════════════════════════ */}
        <section id="about" className="section why" ref={whyRef} aria-label="About Elie Salon">
          <div className="container why__container">
            <div className="why__left">
              <p className="eyebrow">The Elie Standard</p>
              <h2>Not Just a Haircut.<br /><em>An Experience.</em></h2>
              <p className="why__body">
                At Elie Barbershop, we believe every man deserves a grooming experience
                that is as exceptional as his ambitions. Our studio was built on four
                uncompromising pillars that define everything we do.
              </p>
              <button className="btn btn--outline" onClick={() => scrollTo('contact')}>
                Reserve Your Chair <ArrowRight />
              </button>
            </div>

            <div className={`why__pillars ${whyVis ? 'is-visible' : ''}`}>
              {differentiators.map((d, i) => (
                <div key={d.num} className="pillar" style={{ '--i': i }}>
                  <span className="pillar__num" aria-hidden="true">{d.num}</span>
                  <div className="pillar__body">
                    <h3 className="pillar__title">{d.title}</h3>
                    <p className="pillar__text">{d.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            GALLERY
        ════════════════════════════════════════ */}
        <section id="gallery" className="section gallery" ref={galRef} aria-label="Gallery">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">The Craft</p>
              <h2>Work That Speaks<br /><em>For Itself.</em></h2>
            </div>

            <div className={`gallery-grid ${galVis ? 'is-visible' : ''}`}>
              {galleryItems.map((item, i) => (
                <div key={item.label} className={`gallery-item gallery-item--${item.aspect}`} style={{ '--i': i }} aria-label={item.label}>
                  <div className="gallery-item__placeholder" aria-hidden="true">
                    <span className="gallery-item__index">0{i + 1}</span>
                  </div>
                  <div className="gallery-item__overlay">
                    <span className="gallery-item__label">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            TESTIMONIALS
        ════════════════════════════════════════ */}
        <section id="testimonials" className="section testimonials" ref={testRef} aria-label="Testimonials">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Member Voices</p>
              <h2>Trusted by Those Who<br /><em>Demand</em> the Best.</h2>
            </div>

            <div className={`testimonial-grid ${testVis ? 'is-visible' : ''}`}>
              {testimonials.map((t, i) => (
                <article key={t.name} className="testimonial-card" style={{ '--i': i }} aria-label={`Testimonial from ${t.name}`}>
                  <div className="testimonial-card__stars" aria-label={`${t.rating} stars`}>
                    {Array.from({ length: t.rating }).map((_, j) => <StarIcon key={j} />)}
                  </div>
                  <blockquote className="testimonial-card__quote">"{t.quote}"</blockquote>
                  <footer className="testimonial-card__footer">
                    <div className="testimonial-card__avatar" aria-hidden="true">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <strong className="testimonial-card__name">{t.name}</strong>
                      <span className="testimonial-card__role">{t.role}</span>
                    </div>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            BOOKING CTA BAND
        ════════════════════════════════════════ */}
        <section id="contact" className="cta-band" aria-label="Book appointment">
          <div className="cta-band__bg" aria-hidden="true" />
          <div className="container cta-band__inner">
            <p className="eyebrow eyebrow--dark">Ready?</p>
            <h2 className="cta-band__headline">Your Best Look Is One<br />Appointment Away.</h2>
            <p className="cta-band__sub">Seats are limited. Book your session today and experience the Elie difference.</p>
            <div className="cta-band__actions">
              <a href="https://wa.me/966500000000" className="btn btn--dark btn--lg" target="_blank" rel="noopener noreferrer">
                Book via WhatsApp <WhatsappIcon />
              </a>
              <a href="tel:+966500000000" className="btn btn--dark-outline btn--lg">
                Call Us
              </a>
            </div>
            <div className="cta-band__hours">
              <span>Sat – Thu: 9AM – 11PM</span>
              <span className="cta-band__sep" aria-hidden="true">·</span>
              <span>Friday: 2PM – 11PM</span>
            </div>
          </div>
        </section>
      </main>

      {/* ════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════ */}
      <footer className="footer" role="contentinfo">
        <div className="container footer__inner">
          <div className="footer__brand">
            <img src="/images/logo.png" alt="Elie Barbershop" className="footer__logo" />
            <div>
              <strong className="footer__brand-name">ELIE BARBERSHOP</strong>
              <p className="footer__tagline">Crafted in silence. Worn with confidence.</p>
            </div>
          </div>

          <div className="footer__cols">
            <div className="footer__col">
              <h4 className="footer__col-head">Contact</h4>
              <p>Al Khobar, Eastern Province</p>
              <p>Saudi Arabia</p>
              <a href="tel:+966500000000">+966 50 000 0000</a>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-head">Hours</h4>
              <p>Sat – Thu: 9AM – 11PM</p>
              <p>Friday: 2PM – 11PM</p>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-head">Follow</h4>
              <div className="footer__socials">
                <a href="#" aria-label="Instagram" className="footer__social-link"><InstagramIcon /></a>
                <a href="#" aria-label="WhatsApp" className="footer__social-link"><WhatsappIcon /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="container">
            <small>© {new Date().getFullYear()} Elie Barbershop. All rights reserved.</small>
          </div>
        </div>
      </footer>
    </div>
  )
}
