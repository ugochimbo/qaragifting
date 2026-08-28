'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Menu, ShoppingBag, X } from 'lucide-react'

const gifts = [
  { name: 'QARA / 01', title: 'The Signature Set', note: 'A considered introduction to giving well.', price: '€145', image: '/qara-signature.png', provenance: true },
  { name: 'QARA / 02', title: 'The Makers Set', note: 'Objects with a human point of view.', price: '€128', image: '/qara-makers.png', provenance: true },
  { name: 'QARA / 03', title: 'The Host Set', note: 'For generous tables and good company.', price: '€175', image: '/qara-host.png', provenance: false },
]

function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <Link href="#top" className="wordmark" aria-label="QARA home"><span>QARA</span><small>G I F T I N G</small></Link>
    <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
      <Link href="#collection" onClick={() => setOpen(false)}>Collection</Link>
      <Link href="#approach" onClick={() => setOpen(false)}>Our approach</Link>
      <Link href="#business" onClick={() => setOpen(false)}>For business</Link>
    </nav>
    <div className="header-actions"><button className="cart-link" aria-label="Open cart"><ShoppingBag size={16} strokeWidth={1.5} /><span>Bag (0)</span></button><button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button></div>
  </header>
}

function GiftCard({ gift }: { gift: typeof gifts[number] }) {
  return <article className="gift-card"><Link href="#business" className="gift-image"><Image src={gift.image} alt={`${gift.title}, a QARA gift box`} fill sizes="(max-width: 700px) 88vw, 30vw" /></Link><div className="gift-meta"><div><p className="product-index">{gift.name}</p><h3>{gift.title}</h3><p>{gift.note}</p></div><span className="price">{gift.price}</span></div><div className="gift-actions"><Link className="text-link" href="#business">View collection <ArrowUpRight size={14} /></Link>{gift.provenance && <span className="provenance-mark">◇ Story available</span>}</div></article>
}

function Footer() {
  return <footer className="footer"><div><div className="footer-brand">QARA</div><p className="footer-line">Gifts with a point of view.</p></div><div className="footer-links"><Link href="#collection">Collection</Link><Link href="#business">For business</Link><Link href="mailto:hello@qara.gifting">Contact</Link></div><p className="copyright">© 2026 QARA Gifting.</p></footer>
}

export default function Home() {
  return <div id="top" className="qara-site"><Header /><main>
    <section className="hero"><div className="hero-top"><p className="eyebrow">Curated Gifts & Provenance</p><p className="hero-side">A premium gifting company for people, teams and the moments worth marking.</p></div><div className="hero-title"><h1>Gifts<br /><span>with intent.</span></h1><div className="hero-cta"><p>Thoughtfully chosen.<br />Meaningfully given.</p><Link className="button button-ivory" href="#collection">Explore the collection <ArrowUpRight size={16} /></Link></div></div><div className="hero-teaser" aria-label="A preview of the QARA collection"><div className="teaser-image teaser-tall"><Image src="/qara-signature.png" alt="The Signature Set gift box" fill sizes="18vw" /></div><div className="teaser-image teaser-short"><Image src="/qara-makers.png" alt="The Makers Set gift box" fill sizes="18vw" /></div><div className="teaser-image teaser-tall"><Image src="/qara-host.png" alt="The Host Set gift box" fill sizes="18vw" /></div></div></section>
    <section id="approach" className="intro section-pad"><div className="section-label"><span>01</span><span>Our approach</span></div><div className="intro-grid"><h2>Good gifting is<br /><i>good thinking.</i></h2><div><p className="lead">We make it easier to give something that feels considered — whether it is for one person or a room full of them.</p><p>QARA brings together useful, beautiful objects from remarkable makers and builds them into gifts with a clear point of view. Selected products include additional information about their origin and maker, where available.</p><Link className="text-link" href="#collection">How we curate <ArrowUpRight size={15} /></Link></div></div></section>
    <section id="collection" className="collection section-pad"><div className="section-heading"><div><div className="section-label"><span>02</span><span>The collection</span></div><h2>Ready to<br /><i>give.</i></h2></div><Link className="text-link" href="#business">Shop all gifts <ArrowUpRight size={15} /></Link></div><div className="gift-grid">{gifts.map((gift) => <GiftCard gift={gift} key={gift.name} />)}</div></section>
    <section className="provenance"><div className="provenance-image"><Image src="/qara-makers.png" alt="Products selected from independent makers" fill sizes="(max-width: 700px) 100vw, 45vw" /></div><div className="provenance-copy"><div className="section-label"><span>03</span><span>Where available</span></div><p className="provenance-kicker">◇ Product stories</p><h2>Know what<br /><i>you&apos;re giving.</i></h2><p>Some of the products in our collection come with more to discover: where they were made, who made them and what makes them distinct.</p><div className="provenance-list"><div><span>Origin</span><strong>Portugal</strong></div><div><span>Maker</span><strong>Independent producer</strong></div><div><span>Documented</span><strong>Characteristics available</strong></div></div><Link className="button button-outline" href="#collection">Discover selected stories <ArrowUpRight size={15} /></Link></div></section>
    <section id="business" className="business section-pad"><div className="business-head"><div className="section-label"><span>04</span><span>For business</span></div><h2>Beautifully<br /><i>handled.</i></h2><p>Thoughtful gifting, made straightforward for teams that care about the details.</p></div><div className="business-panel"><p className="business-number">01—04</p><h3>For the people who make your business matter.</h3><p>Employee welcome gifts. Client thank-yous. Events, launches and seasonal moments. Choose from our collection or work with us on a custom set.</p><div className="business-list"><span>Employee gifting</span><span>Client & partner gifting</span><span>Events & campaigns</span><span>Custom collections</span></div><Link className="button button-dark" href="mailto:hello@qara.gifting">Start a conversation <ArrowUpRight size={15} /></Link></div></section>
    <section className="closing"><p className="eyebrow">The QARA principle</p><h2>Make it<br /><i>meaningful.</i></h2><Link className="button button-dark" href="#collection">Find your gift <ArrowUpRight size={15} /></Link></section>
  </main><Footer /></div>
}
