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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 700);
      if (window.innerWidth >= 700) setNavOpen(false);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          zIndex: 100,
          borderBottom: `1px solid var(--primary)`,
          background: 'var(--primary)',
          boxShadow: '0 2px 12px rgba(97,127,141,0.12)',
          padding: isMobile ? '0.5rem 1rem' : '0.5rem 0',
          display: 'flex',
          flexDirection: isMobile ? 'row' : 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
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
                marginRight: 'auto'
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
          <div style={{ maxWidth: '800px', width: '100%', display: 'flex', justifyContent: 'space-around' }}>
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
        )}
      </nav>
      <div style={{
        maxWidth: '800px',
        width: '100%',
        padding: '2rem 1rem',
        fontFamily: "'Droid Sans', Arial, sans-serif",
        background: 'var(--background)',
        color: 'var(--text)',
        marginTop: isMobile ? '4.5rem' : '4.5rem'
      }}>
        <main style={{ marginTop: '1rem', fontFamily: "'Droid Sans', Arial, sans-serif" }}>
          {tab === 'home' && (
            <>
              <header style={{
                textAlign: 'center',
                marginBottom: '2rem'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <img
                    src={content.portraitSrc}
                    alt={content.portraitAlt}
                    style={{
                      width: '100%',
                      maxWidth: '360px',
                      height: 'auto',
                      objectFit: 'cover',
                      borderRadius: '50%',
                      border: `3px solid var(--accent)`,
                      background: 'var(--background)'
                    }}
                  />
                </div>
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
                    flexDirection: window.innerWidth < 700 ? 'column' : 'row',
                    alignItems: window.innerWidth < 700 ? 'center' : 'flex-start',
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
                    marginRight: window.innerWidth < 700 ? 0 : '1.5rem',
                    marginBottom: window.innerWidth < 700 ? '1rem' : 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {proj.image ? (
                      <img
                        src={proj.image}
                        alt={`${proj.title} logo`}
                        style={{
                          width: window.innerWidth < 700 ? '80px' : '100px',
                          height: window.innerWidth < 700 ? '80px' : '100px',
                          objectFit: 'contain',
                          background: 'var(--background)'
                        }}
                      />
                    ) : (
                      <div style={{
                        width: window.innerWidth < 700 ? '80px' : '100px',
                        height: window.innerWidth < 700 ? '80px' : '100px',
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
                      fontSize: window.innerWidth < 500 ? '1rem' : '1.1rem',
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
                  gridTemplateColumns: window.innerWidth < 700 ? '1fr' : 'repeat(3, 1fr)',
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
                      padding: window.innerWidth < 500 ? '1rem 0.2rem' : '1rem 0.5rem',
                      boxSizing: 'border-box',
                      width: '100%',
                    }}
                  >
                    <img
                      src={item.logo}
                      alt={`${item.name} logo`}
                      style={{
                        maxWidth: window.innerWidth < 500 ? 100 : 160,
                        maxHeight: window.innerWidth < 500 ? 100 : 160,
                        objectFit: 'contain',
                        marginBottom: '0.7rem',
                        background: 'var(--background)'
                      }}
                    />
                    <div style={{
                      fontWeight: 'bold',
                      color: 'var(--primary)',
                      textAlign: 'center',
                      fontSize: window.innerWidth < 500 ? '0.9rem' : '1rem'
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
                  <br />
                  <strong>Phone:</strong> <a href={`tel:${content.contact.phone}`} style={{ color: 'var(--secondary)' }}>{content.contact.phone}</a>
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
                    padding: window.innerWidth < 500 ? '1rem' : '1.5rem',
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
                      rows={window.innerWidth < 500 ? 3 : 5}
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
                      fontSize: window.innerWidth < 500 ? '1rem' : '1.1rem',
                      padding: window.innerWidth < 500 ? '0.7em 1em' : '0.7em 1.5em',
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
