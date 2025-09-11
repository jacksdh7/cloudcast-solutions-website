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
              <p>
                {content.home.text3}
                <a href={`tel:${content.contact.phone}`} style={{ color: 'var(--secondary)' }}>HERE</a>.
              </p>
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
              <div style={{ maxWidth: 700, margin: '0 auto 2rem auto', color: 'var(--text)', fontSize: '1.08rem', textAlign: 'center' }}>
                {content.industries.desc}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {content.industries.industry.map((industry, i) => (
                  <li
                    key={i}
                    style={{
                      marginBottom: '2rem',
                      padding: '0 0 1.5rem 0',
                      maxWidth: 600,
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      border: 'none',
                      background: 'var(--background)',
                      boxShadow: 'none',
                      color: 'var(--text)'
                    }}
                  >
                    <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>
                      {industry.title}
                    </div>
                    <div style={{ marginBottom: industry.items?.length ? '0.5rem' : 0, color: 'var(--text)' }}>
                      {industry.desc}
                    </div>
                    {industry.items && industry.items.length > 0 && (
                      <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                        {industry.items.map((item, j) => (
                          <li key={j} style={{ marginBottom: '0.25rem', color: 'var(--text)', fontSize: '0.98rem' }}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {tab === 'clients' && (
            <Section title={content.clients.title}>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  marginTop: 0,
                  marginBottom: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: 'fit-content',
                    minWidth: 260,
                  }}
                >
                  {content.clients.items.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        borderBottom: '1px solid var(--primary)',
                        paddingTop: 0,
                        paddingBottom: 0,
                        width: '100%',
                        boxSizing: 'border-box',
                        background: 'var(--background)',
                        color: 'var(--text)'
                      }}
                    >
                      <div
                        style={{
                          marginRight: '1.5rem',
                          width: 64,
                          height: 64,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          paddingTop: '1rem',
                          paddingBottom: '2rem',
                          background: 'var(--background)'
                        }}
                      >
                        {item.logo ? (
                          <img
                            src={item.logo}
                            alt={`${item.name} logo`}
                            style={{ maxWidth: 64, maxHeight: 64, objectFit: 'contain' }}
                          />
                        ) : (
                          <div style={{ width: 64, height: 64, background: 'var(--accent)', borderRadius: 8 }} />
                        )}
                      </div>
                      <div style={{ flex: 1, paddingTop: '1rem', paddingBottom: '2rem', color: 'var(--text)' }}>
                        <div style={{ fontWeight: 'bold', color: 'var(--primary)' }}>{item.name}</div>
                        <div style={{ color: 'var(--secondary)', fontSize: '0.95rem' }}>{item.description}</div>
                      </div>
                    </li>
                  ))}
                </div>
              </ul>
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
