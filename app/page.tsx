import Link from "next/link";

const features = [
  ["01", "Personal & business QR", "Create shareable QR experiences for your personal identity or business."],
  ["02", "Premium digital card", "Give your profile a polished card-style presentation with one scan."],
  ["03", "Invoices & history", "Create invoices, track paid status, and review your workspace activity."],
  ["04", "QR scanner", "Open QR content with your device camera when browser support is available."],
  ["05", "Business profile", "Keep your business contact information together in one place."],
  ["06", "Admin workspace", "Review demo users, local activity, and create or restore a backup."],
] as const;

export default function HomePage() {
  return (
    <main className="site-shell">
      <header className="site-nav wrap">
        <Link href="/" className="brand-link" aria-label="QR360 home">
          <img src="/qr360-logo.svg" alt="QR360" width="174" height="42" />
        </Link>
        <nav className="nav-actions" aria-label="Main navigation">
          <a href="#features" className="nav-text">Features</a>
          <Link href="/workspace" className="button button-quiet">Open workspace</Link>
          <Link href="/workspace" className="button button-primary">Get started <span aria-hidden="true">↗</span></Link>
        </nav>
      </header>

      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> YOUR DIGITAL IDENTITY, REIMAGINED</div>
          <h1>Everything you share.<br /><span>One QR away.</span></h1>
          <p className="hero-lead">
            A single workspace for personal and business QR codes, digital cards, invoices, and everyday activity.
          </p>
          <div className="hero-actions">
            <Link href="/workspace" className="button button-primary button-large">Launch QR360 <span aria-hidden="true">→</span></Link>
            <a href="#features" className="button button-quiet button-large">Explore features</a>
          </div>
          <div className="hero-note"><span className="tiny-check">✓</span> One workspace · Personal and business tools</div>
        </div>
        <div className="hero-art-wrap">
          <img className="hero-art" src="/qr360-brand-artwork.svg" alt="QR360 logo concept with a QR-inspired orbit mark" />
          <div className="art-caption"><span className="art-pulse" /> SCAN <b>·</b> SHARE <b>·</b> CONNECT</div>
        </div>
      </section>

      <section className="feature-section wrap" id="features">
        <div className="section-heading">
          <div className="eyebrow">THE QR360 WORKSPACE</div>
          <h2>Built around the way you connect.</h2>
          <p>Start with a QR code. Keep your identity and business essentials together.</p>
        </div>
        <div className="feature-grid">
          {features.map(([number, title, description]) => (
            <article className="feature-card" key={number}>
              <span className="feature-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta wrap">
        <div>
          <div className="eyebrow">READY WHEN YOU ARE</div>
          <h2>Bring your QR world together.</h2>
          <p>Open the workspace to sign in or create a local demo account.</p>
        </div>
        <Link href="/workspace" className="button button-primary button-large">Open QR360 <span aria-hidden="true">→</span></Link>
      </section>

      <footer className="site-footer wrap">
        <img src="/qr360-logo.svg" alt="QR360" width="112" height="28" />
        <span>Digital identity & business tools</span>
        <span>QR360 · Demo edition</span>
      </footer>
    </main>
  );
}
