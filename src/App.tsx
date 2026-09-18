import { useState, useEffect } from 'react'
import logoImg from '@/imports/image.png'

// ── Logo SVG rebuilt from brand identity ──────────────────────────────────────
function AtlasLogo({ size = 40 }: { size?: number }) {
  return (
    <img
      src={logoImg}
      alt="Atlas Imobiliária"
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  )
}

// ── Data ──────────────────────────────────────────────────────────────────────
const PROPERTIES = [
  {
    id: 1,
    tag: 'Lançamento',
    name: 'Residencial Horizon',
    location: 'Aldeota, Fortaleza · CE',
    price: 'A partir de R$ 680.000',
    beds: 3,
    area: 112,
    img: 'https://images.unsplash.com/photo-1669236392098-133cf2fe76af?w=600&h=420&fit=crop&auto=format',
  },
  {
    id: 2,
    tag: 'Alto Padrão',
    name: 'Penthouse Vista Mar',
    location: 'Meireles, Fortaleza · CE',
    price: 'A partir de R$ 1.450.000',
    beds: 4,
    area: 218,
    img: 'https://images.unsplash.com/photo-1757924461488-ef9ad0670978?w=600&h=420&fit=crop&auto=format',
  },
  {
    id: 3,
    tag: 'Pronto pra Morar',
    name: 'Jardins do Cocó',
    location: 'Cocó, Fortaleza · CE',
    price: 'A partir de R$ 520.000',
    beds: 2,
    area: 78,
    img: 'https://images.unsplash.com/photo-1751945965597-71171ec7a458?w=600&h=420&fit=crop&auto=format',
  },
  {
    id: 4,
    tag: 'Exclusivo',
    name: 'Alto de Fátima Tower',
    location: 'Fátima, Fortaleza · CE',
    price: 'A partir de R$ 890.000',
    beds: 3,
    area: 145,
    img: 'https://images.unsplash.com/photo-1758448756167-88dc934c58e4?w=600&h=420&fit=crop&auto=format',
  },
]

const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Assessoria Completa',
    desc: 'Acompanhamos todo o processo — da visita à assinatura do contrato — sem burocracia.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Portfólio Exclusivo',
    desc: 'Empreendimentos selecionados com rigor: localização privilegiada, construtoras renomadas.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Consultores Especializados',
    desc: 'Equipe certificada e com profundo conhecimento do mercado imobiliário local.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Valorização Garantida',
    desc: 'Análise de potencial de valorização para que seu investimento seja sempre estratégico.',
  },
]

const TESTIMONIALS = [
  {
    name: 'Mariana Carvalho',
    role: 'Compradora — Residencial Horizon',
    text: '"A Atlas transformou a busca pelo meu apartamento em algo simples e seguro. Equipe impecável do início ao fim."',
    avatar: 'MC',
  },
  {
    name: 'Rafael Sousa',
    role: 'Investidor — Portfólio Comercial',
    text: '"Profissionalismo e transparência em cada etapa. Já adquiri três imóveis com eles e continuo confiando."',
    avatar: 'RS',
  },
  {
    name: 'Beatriz Mendes',
    role: 'Compradora — Penthouse Vista Mar',
    text: '"Encontraram o imóvel perfeito para o meu perfil em menos de duas semanas. Resultado acima de qualquer expectativa."',
    avatar: 'BM',
  },
]

// ── Nav ───────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(17,17,8,0.96)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.35s ease',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <AtlasLogo size={42} />
          <div>
            <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 18, fontWeight: 600, letterSpacing: '0.12em', color: 'var(--gold)', lineHeight: 1.1 }}>ATLAS</div>
            <div style={{ fontSize: 9, letterSpacing: '0.28em', color: 'var(--muted)', textTransform: 'uppercase' }}>IMOBILIÁRIA</div>
          </div>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 36, alignItems: 'center' }} className="hidden-mobile">
          {['Imóveis', 'Sobre', 'Serviços', 'Depoimentos', 'Contato'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ color: 'var(--muted)', fontSize: 13, letterSpacing: '0.06em', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >{l}</a>
          ))}
          <button className="btn-gold" style={{ padding: '10px 22px' }}>Fale Conosco</button>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer' }} className="show-mobile">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            {open
              ? <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round"/>
              : <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"/>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', padding: '20px 32px 28px' }}>
          {['Imóveis', 'Sobre', 'Serviços', 'Depoimentos', 'Contato'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              style={{ display: 'block', color: 'var(--muted)', fontSize: 15, padding: '10px 0', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}
            >{l}</a>
          ))}
          <button className="btn-gold" style={{ marginTop: 20, width: '100%', justifyContent: 'center' }}>Fale Conosco</button>
        </div>
      )}
    </nav>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: 640, display: 'flex', alignItems: 'flex-end' }}>
      {/* BG */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1710473492229-888b362df2af?w=1600&h=1100&fit=crop&auto=format"
          alt="Skyline de Fortaleza"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,11,5,0.97) 0%, rgba(11,11,5,0.55) 55%, rgba(11,11,5,0.2) 100%)' }} />
        {/* Gold vignette sides */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(11,11,5,0.5) 0%, transparent 40%, transparent 60%, rgba(11,11,5,0.5) 100%)' }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '0 32px 96px', width: '100%' }}>
        <span className="gold-line" style={{ marginBottom: 24, display: 'flex' }}>Imobiliária de Alto Padrão</span>
        <h1 className="font-display" style={{ fontSize: 'clamp(42px, 7vw, 82px)', fontWeight: 500, lineHeight: 1.08, maxWidth: 680, marginBottom: 24 }}>
          Encontre o imóvel<br />
          <span className="gold-gradient">que define</span> quem você é.
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: 17, maxWidth: 480, lineHeight: 1.7, marginBottom: 40 }}>
          Há mais de 10 anos conectando famílias e investidores aos melhores imóveis de Fortaleza e região.
        </p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <button className="btn-gold">Conhecer Imóveis</button>
          <button className="btn-outline">Falar com Consultor</button>
        </div>

        {/* Search bar */}
        <div style={{ marginTop: 56, background: 'rgba(26,26,15,0.85)', backdropFilter: 'blur(16px)', border: '1px solid var(--border)', padding: '20px 24px', display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', maxWidth: 720 }}>
          <div style={{ flex: 1, minWidth: 160 }}>
            <div style={{ fontSize: 10, letterSpacing: '0.14em', color: 'var(--gold)', marginBottom: 4, textTransform: 'uppercase' }}>Tipo</div>
            <select style={{ background: 'transparent', border: 'none', color: 'var(--text)', fontSize: 13, width: '100%', outline: 'none', cursor: 'pointer' }}>
              <option value="" style={{ background: '#1a1a0f' }}>Apartamento</option>
              <option value="" style={{ background: '#1a1a0f' }}>Casa</option>
              <option value="" style={{ background: '#1a1a0f' }}>Cobertura</option>
            </select>
          </div>
          <div style={{ width: 1, height: 36, background: 'var(--border)' }} />
          <div style={{ flex: 1, minWidth: 160 }}>
            <div style={{ fontSize: 10, letterSpacing: '0.14em', color: 'var(--gold)', marginBottom: 4, textTransform: 'uppercase' }}>Bairro</div>
            <select style={{ background: 'transparent', border: 'none', color: 'var(--text)', fontSize: 13, width: '100%', outline: 'none', cursor: 'pointer' }}>
              <option value="" style={{ background: '#1a1a0f' }}>Todos os bairros</option>
              <option value="" style={{ background: '#1a1a0f' }}>Meireles</option>
              <option value="" style={{ background: '#1a1a0f' }}>Aldeota</option>
              <option value="" style={{ background: '#1a1a0f' }}>Cocó</option>
            </select>
          </div>
          <div style={{ width: 1, height: 36, background: 'var(--border)' }} />
          <div style={{ flex: 1, minWidth: 160 }}>
            <div style={{ fontSize: 10, letterSpacing: '0.14em', color: 'var(--gold)', marginBottom: 4, textTransform: 'uppercase' }}>Faixa de Preço</div>
            <select style={{ background: 'transparent', border: 'none', color: 'var(--text)', fontSize: 13, width: '100%', outline: 'none', cursor: 'pointer' }}>
              <option value="" style={{ background: '#1a1a0f' }}>Qualquer valor</option>
              <option value="" style={{ background: '#1a1a0f' }}>Até R$ 500k</option>
              <option value="" style={{ background: '#1a1a0f' }}>R$ 500k – R$ 1M</option>
              <option value="" style={{ background: '#1a1a0f' }}>Acima de R$ 1M</option>
            </select>
          </div>
          <button className="btn-gold" style={{ whiteSpace: 'nowrap' }}>
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35" strokeLinecap="round"/>
            </svg>
            Buscar
          </button>
        </div>
      </div>
    </section>
  )
}

// ── Stats ─────────────────────────────────────────────────────────────────────
function Stats() {
  const items = [
    { n: '+1.200', label: 'Imóveis Vendidos' },
    { n: '+10 anos', label: 'No Mercado' },
    { n: '98%', label: 'Clientes Satisfeitos' },
    { n: '+350', label: 'Famílias Atendidas' },
  ]
  return (
    <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 32px', display: 'flex', gap: 0, justifyContent: 'center', flexWrap: 'wrap' }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
            <div style={{ padding: '0 48px', textAlign: 'center' }}>
              <div className="font-display gold-gradient" style={{ fontSize: 36, fontWeight: 600 }}>{item.n}</div>
              <div style={{ color: 'var(--muted)', fontSize: 12, letterSpacing: '0.1em', marginTop: 4 }}>{item.label}</div>
            </div>
            {i < items.length - 1 && <div className="stat-sep" />}
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Properties ────────────────────────────────────────────────────────────────
function Properties() {
  const [filter, setFilter] = useState('Todos')
  const tabs = ['Todos', 'Lançamentos', 'Alto Padrão', 'Pronto pra Morar']

  return (
    <section id="imóveis" style={{ padding: '100px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
        <div>
          <span className="gold-line" style={{ marginBottom: 16, display: 'flex' }}>Portfólio</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 500, lineHeight: 1.15 }}>
            Imóveis em <span className="gold-gradient">Destaque</span>
          </h2>
        </div>
        <div style={{ display: 'flex', gap: 4, background: 'var(--surface)', padding: 4, border: '1px solid var(--border)' }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setFilter(t)} style={{
              background: filter === t ? 'var(--gold)' : 'transparent',
              color: filter === t ? '#111108' : 'var(--muted)',
              border: 'none',
              padding: '8px 16px',
              fontSize: 11,
              letterSpacing: '0.08em',
              cursor: 'pointer',
              fontWeight: filter === t ? 600 : 400,
              transition: 'all 0.2s',
              fontFamily: 'Outfit, sans-serif',
            }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
        {PROPERTIES.map(p => (
          <div key={p.id} className="card-prop">
            <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
              <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div style={{ position: 'absolute', top: 14, left: 14, background: 'var(--gold)', color: '#111108', fontSize: 9, letterSpacing: '0.14em', fontWeight: 700, padding: '4px 10px', textTransform: 'uppercase' }}>{p.tag}</div>
            </div>
            <div style={{ padding: '22px 22px 26px' }}>
              <h3 className="font-display" style={{ fontSize: 19, fontWeight: 500, marginBottom: 6 }}>{p.name}</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--muted)', fontSize: 12, marginBottom: 16 }}>
                <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {p.location}
              </div>
              <div style={{ display: 'flex', gap: 16, marginBottom: 18 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--muted)', fontSize: 12 }}>
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {p.beds} quartos
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--muted)', fontSize: 12 }}>
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {p.area} m²
                </div>
              </div>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ color: 'var(--gold)', fontSize: 13, fontWeight: 500 }}>{p.price}</div>
                <button style={{ background: 'none', border: '1px solid var(--border)', color: 'var(--gold)', fontSize: 10, letterSpacing: '0.1em', padding: '6px 14px', cursor: 'pointer', fontFamily: 'Outfit, sans-serif', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                >Ver Mais</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 48 }}>
        <button className="btn-outline">Ver Todos os Imóveis</button>
      </div>
    </section>
  )
}

// ── Features ──────────────────────────────────────────────────────────────────
function Features() {
  return (
    <section id="serviços" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 0 }}>
        <div style={{ gridColumn: '1 / -1', marginBottom: 56 }}>
          <span className="gold-line" style={{ marginBottom: 16, display: 'flex' }}>Por Que a Atlas</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 500, maxWidth: 500 }}>
            Mais que uma imobiliária —<br />
            <span className="gold-gradient">um parceiro de confiança.</span>
          </h2>
        </div>
        {FEATURES.map((f, i) => (
          <div key={i} style={{ padding: '36px 32px', borderTop: '1px solid var(--border)', borderRight: i < FEATURES.length - 1 ? '1px solid var(--border)' : 'none', transition: 'background 0.25s' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,164,82,0.04)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            <div style={{ color: 'var(--gold)', marginBottom: 18 }}>{f.icon}</div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 10, letterSpacing: '0.02em' }}>{f.title}</h3>
            <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Banner ────────────────────────────────────────────────────────────────────
function Banner() {
  return (
    <section style={{ position: 'relative', height: 480, overflow: 'hidden' }}>
      <img
        src="https://images.unsplash.com/photo-1656038339605-f48e55b367d5?w=1600&h=700&fit=crop&auto=format"
        alt="Empreendimento de alto padrão"
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,11,5,0.72)' }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 32px' }}>
        <div>
          <span className="gold-line" style={{ display: 'inline-flex', marginBottom: 20 }}>Sobre a Atlas</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 5vw, 54px)', fontWeight: 500, maxWidth: 660, lineHeight: 1.2, marginBottom: 24 }}>
            Construindo <em>histórias</em> através dos melhores imóveis.
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 16, maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.7 }}>
            Desde 2014, a Atlas Imobiliária é referência em Fortaleza pela qualidade do atendimento e pelo portfólio cuidadosamente selecionado.
          </p>
          <button className="btn-gold">Conheça Nossa História</button>
        </div>
      </div>
    </section>
  )
}

// ── Testimonials ──────────────────────────────────────────────────────────────
function Testimonials() {
  return (
    <section id="depoimentos" style={{ padding: '100px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <span className="gold-line" style={{ display: 'inline-flex', marginBottom: 16 }}>Depoimentos</span>
        <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 500 }}>
          O que nossos <span className="gold-gradient">clientes dizem</span>
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
        {TESTIMONIALS.map((t, i) => (
          <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '32px 28px' }}>
            {/* Stars */}
            <div style={{ display: 'flex', gap: 3, marginBottom: 20 }}>
              {[...Array(5)].map((_, s) => (
                <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="var(--gold)">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <p className="font-display" style={{ fontSize: 15, fontStyle: 'italic', lineHeight: 1.7, color: 'var(--text)', marginBottom: 24 }}>{t.text}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, var(--gold-dim), var(--gold))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#111' }}>{t.avatar}</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{t.name}</div>
                <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── CTA ───────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section id="contato" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '80px 32px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48, alignItems: 'center' }}>
        <div>
          <span className="gold-line" style={{ marginBottom: 16, display: 'flex' }}>Entre em Contato</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 500, lineHeight: 1.2, marginBottom: 16 }}>
            Pronto para encontrar<br /><span className="gold-gradient">seu imóvel ideal?</span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.7 }}>
            Converse com um de nossos consultores agora mesmo — sem compromisso.
          </p>
          <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { icon: '📞', text: '(85) 9 9999-0000' },
              { icon: '📧', text: 'contato@atlasimob.com.br' },
              { icon: '📍', text: 'Fortaleza, Ceará' },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--muted)', fontSize: 13 }}>
                <span>{c.icon}</span>{c.text}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '32px 28px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { label: 'Nome Completo', type: 'text', placeholder: 'Seu nome' },
              { label: 'Telefone / WhatsApp', type: 'tel', placeholder: '(85) 9 0000-0000' },
              { label: 'E-mail', type: 'email', placeholder: 'seu@email.com' },
            ].map((f, i) => (
              <div key={i}>
                <label style={{ display: 'block', fontSize: 10, letterSpacing: '0.14em', color: 'var(--gold)', marginBottom: 6, textTransform: 'uppercase' }}>{f.label}</label>
                <input type={f.type} placeholder={f.placeholder} style={{ width: '100%', background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)', padding: '12px 14px', fontSize: 13, outline: 'none', fontFamily: 'Outfit, sans-serif', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--gold-dim)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                />
              </div>
            ))}
            <div>
              <label style={{ display: 'block', fontSize: 10, letterSpacing: '0.14em', color: 'var(--gold)', marginBottom: 6, textTransform: 'uppercase' }}>Mensagem</label>
              <textarea placeholder="Como podemos ajudar?" rows={3} style={{ width: '100%', background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)', padding: '12px 14px', fontSize: 13, outline: 'none', fontFamily: 'Outfit, sans-serif', resize: 'vertical', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--gold-dim)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              />
            </div>
            <button className="btn-gold" style={{ justifyContent: 'center', marginTop: 4 }}>Enviar Mensagem</button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '56px 32px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <AtlasLogo size={38} />
              <div>
                <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 16, fontWeight: 600, letterSpacing: '0.12em', color: 'var(--gold)' }}>ATLAS</div>
                <div style={{ fontSize: 8, letterSpacing: '0.28em', color: 'var(--muted)', textTransform: 'uppercase' }}>IMOBILIÁRIA</div>
              </div>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.7 }}>Conectando você ao imóvel dos seus sonhos com excelência e confiança.</p>
          </div>

          {/* Links */}
          {[
            { title: 'Imóveis', links: ['Apartamentos', 'Coberturas', 'Casas', 'Lançamentos'] },
            { title: 'Empresa', links: ['Sobre a Atlas', 'Nosso Time', 'Blog', 'Parceiros'] },
          ].map((col, i) => (
            <div key={i}>
              <div style={{ fontSize: 11, letterSpacing: '0.16em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 16 }}>{col.title}</div>
              {col.links.map(l => (
                <a key={l} href="#" style={{ display: 'block', color: 'var(--muted)', fontSize: 13, marginBottom: 8, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                >{l}</a>
              ))}
            </div>
          ))}

          {/* Social */}
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.16em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 16 }}>Redes Sociais</div>
            <div style={{ display: 'flex', gap: 10 }}>
              {['Instagram', 'WhatsApp', 'Facebook'].map(s => (
                <a key={s} href="#" style={{ width: 36, height: 36, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', textDecoration: 'none', fontSize: 10, transition: 'border-color 0.2s, color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)' }}
                  title={s}
                >
                  {s === 'Instagram' && <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>}
                  {s === 'WhatsApp' && <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>}
                  {s === 'Facebook' && <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>}
                </a>
              ))}
            </div>
            <div style={{ marginTop: 20, fontSize: 12, color: 'var(--muted)' }}>
              <a href="https://www.instagram.com/atlasimob_/" target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--gold)', textDecoration: 'none', fontSize: 12 }}>@atlasimob_</a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
          <div style={{ color: 'var(--muted)', fontSize: 12 }}>© 2024 Atlas Imobiliária. Todos os direitos reservados.</div>
          <div style={{ color: 'var(--muted)', fontSize: 12 }}>CRECI · CE</div>
        </div>
      </div>
    </footer>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
      <Nav />
      <Hero />
      <Stats />
      <Properties />
      <Features />
      <Banner />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}
