import { useState } from 'react';
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
      <div style={{ maxWidth: '800px', width: '100%', padding: '2rem', fontFamily: "'Droid Sans', Arial, sans-serif", background: 'var(--background)', color: 'var(--text)' }}>
        <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1.5rem'
          }}>
            <img
              src={content.portraitSrc}
              alt={content.portraitAlt}
              style={{
                width: '360px',
                height: '360px',
                objectFit: 'cover',
                borderRadius: '50%',
                border: `3px solid var(--accent)`,
                background: 'var(--background)'
              }}
            />
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', color: 'var(--primary)', fontFamily: "'Droid Sans', Arial, sans-serif" }}>{content.name}</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--secondary)', textAlign: 'center', fontFamily: "'Droid Sans', Arial, sans-serif" }}>{content.tagline}</p>
        </header>

        <nav style={{
          display: 'flex',
          justifyContent: 'space-around',
          borderBottom: `1px solid var(--primary)`,
          marginBottom: '1rem',
          paddingBottom: '0.5rem',
          background: 'var(--primary)'
        }}>
          {content.tabs.map(tabObj => (
            <Tab
              key={tabObj.value}
              label={tabObj.label}
              value={tabObj.value}
              selectedTab={tab}
              onClick={setTab}
            />
          ))}
        </nav>

        <main style={{ marginTop: '1rem', fontFamily: "'Droid Sans', Arial, sans-serif" }}>
          {tab === 'home' && (
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
                    boxShadow: '0 2px 8px rgba(97,127,141,0.08)'
                  }}
                  onClick={() => window.open(`mailto:${content.contact.email}?subject=Consultation Request`, '_blank')}
                >
                  {content.home.buttonText}
                </button>
              </div>
            </Section>
          )}

          {tab === 'projects' && (
            <Section title={content.projects.title}>
              <div style={{ maxWidth: 700, margin: '0 auto 2rem auto', color: 'var(--text)', fontSize: '1.08rem', textAlign: 'center' }}>
                {content.projects.desc}
              </div>
              {content.projects.projects.map((proj, i) => (
                <div key={i} style={{
                  marginTop: i === 0 ? 0 : '2rem',
                  maxWidth: 700,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  paddingBottom: '1.5rem',
                  borderBottom: i !== content.projects.projects.length - 1 ? '1px solid var(--primary)' : 'none',
                  background: 'var(--background)',
                  color: 'var(--text)'
                }}>
                  <div style={{ fontWeight: 'bold', fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>
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
              ))}
            </Section>
          )}

          {tab === 'industries' && (
            <Section title={content.industries.title}>
              <div
                style={{
                  maxWidth: 700,
                  margin: '0 auto 1.2rem auto',
                  color: 'var(--text)',
                  fontSize: '1.08rem',
                  textAlign: 'center'
                }}
              >
                {content.industries.desc}
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  maxWidth: 600,
                  width: '100%',
                  textAlign: 'center'
                }}
              >
                {Object.values(content.industries.industry).map((title, i) => (
                  <div
                    key={i}
                    style={{
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
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
                  gridTemplateColumns: 'repeat(3, 1fr)',
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
                      padding: '1rem 0.5rem',
                      boxSizing: 'border-box',
                      width: '100%',
                    }}
                  >
                    <img
                      src={item.logo}
                      alt={`${item.name} logo`}
                      style={{
                        maxWidth: 160,
                        maxHeight: 160,
                        objectFit: 'contain',
                        marginBottom: '0.7rem',
                        background: 'var(--background)'
                      }}
                    />
                    <div style={{ fontWeight: 'bold', color: 'var(--primary)', textAlign: 'center', fontSize: '1rem' }}>
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
