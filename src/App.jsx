import { useState, useEffect } from 'react';
import content from './content';

function Tab({ label, value, selectedTab, onClick }) {
  return (
    <button
      style={{
        background: 'var(--primary)',
        color: 'var(--background)',
        borderBottom: selectedTab === value ? `2px solid var(--accent)` : '2px solid transparent',
        fontWeight: selectedTab === value ? 'bold' : 'normal',
        fontFamily: "'Droid Sans', Arial, sans-serif"
      }}
      onClick={() => onClick(value)}
    >
      {label}
    </button>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h2
        style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: '0.5rem',
          textAlign: 'center',
          color: 'var(--primary)',
          fontFamily: "'Droid Sans', Arial, sans-serif"
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

function App() {
  const [tab, setTab] = useState('home');
  const [navOpen, setNavOpen] = useState(false);

  // track window width in state so components can derive breakpoints consistently
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      if (window.innerWidth >= 700) setNavOpen(false);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // derived breakpoints
  const isMobile = width < 700;
  const isNarrow = width < 500;

  // NAV_HEIGHT controls the fixed nav height and the top offset of the main content.
  const NAV_HEIGHT = 56;
  const logoShift = NAV_HEIGHT / 4;
  // double the rendered logo size (keeps nav height unchanged)
  const LOGO_HEIGHT = (NAV_HEIGHT - 12) * 2;

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        boxSizing: 'border-box',
        background: 'var(--background)',
        color: 'var(--text)',
        fontFamily: "'Droid Sans', Arial, sans-serif"
      }}
    >
      {/* Mobile-friendly navigation bar */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: `${NAV_HEIGHT}px`,
          zIndex: 100,
          borderBottom: `1px solid var(--primary)`,
          background: 'var(--primary)',
          boxShadow: '0 2px 12px rgba(97,127,141,0.12)',
          padding: isMobile ? '0 1rem' : '0',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* logo anchored to the left edge of the nav (absolute - does not affect layout) */}
        <img
          src="/JAH_Jacksons_JacksonBlueVariant_617f8d.svg"
          alt="Cloudcast Solutions logo"
          style={{
            position: 'absolute',
            left: '1rem',
            top: '50%',
            transform: `translateY(calc(-50% - ${logoShift}px))`, // moved up by configured shift
            height: `${LOGO_HEIGHT}px`,
            width: 'auto',
            pointerEvents: 'none'
          }}
        />
        {isMobile ? (
          <>
            <button
              aria-label="Open menu"
              style={{
                background: 'var(--accent)',
                color: 'var(--text)',
                border: 'none',
                borderRadius: '6px',
                padding: '0.5em 1em',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                cursor: 'pointer',
                marginLeft: 'auto',
                marginRight: '0.75rem'
              }}
              onClick={() => setNavOpen(!navOpen)}
            >
              ☰ Menu
            </button>
            {navOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  width: '100vw',
                  background: 'var(--primary)',
                  boxShadow: '0 2px 12px rgba(97,127,141,0.12)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '1rem 0'
                }}
              >
                {content.tabs.map(tabObj => (
                  <Tab
                    key={tabObj.value}
                    label={tabObj.label}
                    value={tabObj.value}
                    selectedTab={tab}
                    onClick={value => {
                      setTab(value);
                      setNavOpen(false);
                    }}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div style={{
            maxWidth: '800px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {content.tabs.map(tabObj => (
                <Tab
                  key={tabObj.value}
                  label={tabObj.label}
                  value={tabObj.value}
                  selectedTab={tab}
                  onClick={setTab}
                />
              ))}
            </div>
          </div>
        )}
      </nav>

      <div style={{
        maxWidth: '800px',
        width: '100%',
        // ensure the top of the main content sits directly under the nav (no gap)
        marginTop: `${NAV_HEIGHT}px`,
        padding: '0 1rem 2rem 1rem',   // remove top padding so image touches nav
        fontFamily: "'Droid Sans', Arial, sans-serif",
        background: 'var(--background)',
        color: 'var(--text)'
      }}>
        <main style={{ marginTop: '0', fontFamily: "'Droid Sans', Arial, sans-serif" }}>
          {tab === 'home' && (
            <>
              <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
                {/* responsive skyline banner: full-bleed on mobile, constrained to content on desktop */}
                {isMobile ? (
                  <div style={{
                    width: '100vw',
                    position: 'relative',
                    left: '50%',
                    marginLeft: '-50vw',   // full-bleed ignoring parent padding
                    overflow: 'hidden'
                  }}>
                    <img
                      src="/Downtown_Tulsa_Panoramic.jpg"
                      alt="Tulsa skyline"
                      style={{
                        width: '100%',
                        height: '200px',    // slightly shorter on narrow screens
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                    <div style={{
                      fontSize: '0.7rem',
                      color: 'var(--secondary)',
                      textAlign: 'right',
                      padding: '6px 10px',
                      background: 'rgba(255,255,255,0)', // transparent background so no extra gap
                      boxSizing: 'border-box'
                    }}>
                      Creator / Credit: Robert J. Baird · © Robert J. Baird
                    </div>
                  </div>
                ) : (
                  <div style={{
                    width: '100%',
                    maxWidth: 800,       // constrained to content width on desktop
                    margin: '0 auto',
                    boxSizing: 'border-box',
                    overflow: 'hidden'
                  }}>
                    <img
                      src="/Downtown_Tulsa_Panoramic.jpg"
                      alt="Tulsa skyline"
                      style={{
                        width: '100%',
                        height: '260px',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                    <div style={{
                      fontSize: '0.8rem',
                      color: 'var(--secondary)',
                      textAlign: 'right',
                      padding: '8px 0 0 0'
                    }}>
                      Creator / Credit: Robert J. Baird · © Robert J. Baird
                    </div>
                  </div>
                )}

                <h1 style={{
                  fontSize: '2.2rem',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: 'var(--primary)',
                  fontFamily: "'Droid Sans', Arial, sans-serif"
                }}>{content.name}</h1>
                <p style={{
                  fontSize: '1.1rem',
                  color: 'var(--secondary)',
                  textAlign: 'center',
                  fontFamily: "'Droid Sans', Arial, sans-serif"
                }}>{content.tagline}</p>
              </header>
              <Section title={content.home.title}>
                <p>{content.home.text1}</p>
                <p>{content.home.text2}</p>
                <p>{content.home.text3}</p>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                  <button
                    style={{
                      background: 'var(--accent)',
                      color: 'var(--text)',
                      fontFamily: "'Droid Sans', Arial, sans-serif",
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                      padding: '0.7em 1.5em',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 2px 8px rgba(97,127,141,0.08)',
                      width: '100%',
                      maxWidth: 260
                    }}
                    onClick={() => window.open(`mailto:${content.contact.email}?subject=Consultation Request`, '_blank')}
                  >
                    {content.home.buttonText}
                  </button>
                </div>
              </Section>
            </>
          )}

          {tab === 'projects' && (
            <Section title={content.projects.title}>
              <div style={{
                maxWidth: 700,
                margin: '0 auto 2rem auto',
                color: 'var(--text)',
                fontSize: '1.08rem',
                textAlign: 'center'
              }}>
                {content.projects.desc}
              </div>
              {content.projects.projects.map((proj, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: isMobile ? 'center' : 'flex-start',
                    marginTop: i === 0 ? 0 : '2rem',
                    maxWidth: 700,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    paddingBottom: '1.5rem',
                    borderBottom: i !== content.projects.projects.length - 1 ? '1px solid var(--primary)' : 'none',
                    background: 'var(--background)',
                    color: 'var(--text)'
                  }}
                >
                  <div style={{
                    minWidth: 100,
                    maxWidth: 120,
                    marginRight: isMobile ? 0 : '1.5rem',
                    marginBottom: isMobile ? '1rem' : 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {proj.image ? (
                      <img
                        src={proj.image}
                        alt={`${proj.title} logo`}
                        style={{
                          width: isMobile ? '80px' : '100px',
                          height: isMobile ? '80px' : '100px',
                          objectFit: 'contain',
                          background: 'var(--background)'
                        }}
                      />
                    ) : (
                      <div style={{
                        width: isMobile ? '80px' : '100px',
                        height: isMobile ? '80px' : '100px',
                        background: 'var(--accent)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--primary)',
                        fontWeight: 'bold'
                      }}>
                        No Image
                      </div>
                    )}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontWeight: 'bold',
                      fontSize: '1.15rem',
                      marginBottom: '0.5rem',
                      color: 'var(--primary)'
                    }}>
                      {proj.title}
                    </div>
                    <div style={{ marginBottom: '0.3rem', color: 'var(--text)' }}>
                      <strong>{content.projects.lable1}</strong> {proj.text1}
                    </div>
                    <div style={{ marginBottom: '0.3rem', color: 'var(--text)' }}>
                      <strong>{content.projects.lable2}</strong> {proj.text2}
                    </div>
                    <div style={{ marginBottom: '0.3rem', color: 'var(--text)' }}>
                      <strong>{content.projects.lable3}</strong> {proj.text3}
                    </div>
                    <div style={{ marginBottom: '0.3rem', color: 'var(--text)' }}>
                      <strong>{content.projects.lable4}</strong> {proj.text4}
                    </div>
                    <div style={{ color: 'var(--text)' }}>
                      <strong>{content.projects.lable5}</strong> {proj.text5}
                    </div>
                  </div>
                </div>
              ))}
            </Section>
          )}

          {tab === 'industries' && (
            <Section title={content.industries.title}>
              <div style={{
                maxWidth: 700,
                margin: '0 auto 1.2rem auto',
                color: 'var(--text)',
                fontSize: '1.08rem',
                textAlign: 'center'
              }}>
                {content.industries.desc}
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
                maxWidth: 600,
                width: '100%',
                textAlign: 'center'
              }}>
                {Object.values(content.industries.industry).map((title, i) => (
                  <div
                    key={i}
                    style={{
                      fontWeight: 'bold',
                      fontSize: isNarrow ? '1rem' : '1.1rem',
                      color: 'var(--primary)',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {title}
                  </div>
                ))}
              </div>
            </Section>
          )}

          {tab === 'clients' && (
            <Section title={content.clients.title}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                  gap: '2rem',
                  justifyItems: 'center',
                  alignItems: 'center',
                  width: '100%',
                  margin: '0 auto',
                  maxWidth: 800,
                }}
              >
                {content.clients.items.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'var(--background)',
                      borderRadius: '10px',
                      padding: isNarrow ? '1rem 0.2rem' : '1rem 0.5rem',
                      boxSizing: 'border-box',
                      width: '100%',
                    }}
                  >
                    <img
                      src={item.logo}
                      alt={`${item.name} logo`}
                      style={{
                        maxWidth: isNarrow ? 100 : 160,
                        maxHeight: isNarrow ? 100 : 160,
                        objectFit: 'contain',
                        marginBottom: '0.7rem',
                        background: 'var(--background)'
                      }}
                    />
                    <div style={{
                      fontWeight: 'bold',
                      color: 'var(--primary)',
                      textAlign: 'center',
                      fontSize: isNarrow ? '0.9rem' : '1rem'
                    }}>
                      {item.name}
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {tab === 'contact' && (
            <Section title={content.contact.title}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--text)' }}>
                <p style={{ textAlign: 'center' }}>
                  {content.contact.text}
                  <br />
                  <br />
                  <strong>Email:</strong> <a href={`mailto:${content.contact.email}`} style={{ color: 'var(--secondary)' }}>{content.contact.email}</a>
                </p>
                <form
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    width: '100%',
                    maxWidth: 400,
                    marginTop: '2rem',
                    background: 'var(--background)',
                    padding: isNarrow ? '1rem' : '1.5rem',
                    borderRadius: '10px',
                    boxShadow: '0 6px 24px rgba(97,127,141,0.18)'
                  }}
                  action="https://formsubmit.co/f0a68d087442fb541db2c9d2097851d0"
                  method="POST"
                >
                  <label style={{ fontWeight: 'bold', color: 'var(--primary)' }}>
                    {content.contact.formNameLabel}
                    <input
                      type="text"
                      name="Name"
                      required
                      style={{
                        width: '100%',
                        padding: '0.5rem',
                        marginTop: '0.3rem',
                        borderRadius: '6px',
                        border: '1px solid var(--primary)',
                        fontFamily: "'Droid Sans', Arial, sans-serif"
                      }}
                    />
                  </label>
                  <label style={{ fontWeight: 'bold', color: 'var(--primary)' }}>
                    {content.contact.formEmailLabel}
                    <input
                      type="email"
                      name="Email"
                      required
                      style={{
                        width: '100%',
                        padding: '0.5rem',
                        marginTop: '0.3rem',
                        borderRadius: '6px',
                        border: '1px solid var(--primary)',
                        fontFamily: "'Droid Sans', Arial, sans-serif"
                      }}
                    />
                  </label>
                  <label style={{ fontWeight: 'bold', color: 'var(--primary)' }}>
                    {content.contact.formMessageLabel}
                    <textarea
                      name="Message"
                      required
                      rows={isNarrow ? 3 : 5}
                      style={{
                        width: '100%',
                        padding: '0.5rem',
                        marginTop: '0.3rem',
                        borderRadius: '6px',
                        border: '1px solid var(--primary)',
                        fontFamily: "'Droid Sans', Arial, sans-serif",
                        resize: 'vertical'
                      }}
                    />
                  </label>
                  <input type="hidden" name="_captcha" value="false" />
                  <button
                    type="submit"
                    style={{
                      background: 'var(--accent)',
                      color: 'var(--text)',
                      fontWeight: 'bold',
                      fontSize: isNarrow ? '1rem' : '1.1rem',
                      padding: isNarrow ? '0.7em 1em' : '0.7em 1.5em',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: "'Droid Sans', Arial, sans-serif"
                    }}
                  >
                    {content.contact.formButtonText}
                  </button>
                </form>
              </div>
            </Section>
          )}
        </main>

        <footer style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--primary)' }}>
        </footer>
      </div>
    </div>
  );
}

export default App;
