import React, { useState } from 'react';
import content from './content';

function Tab({ label, value, selectedTab, onClick }) {
  return (
    <button
      className={`px-4 py-2 border-b-2 ${selectedTab === value ? 'border-blue-600 font-bold' : 'border-transparent'}`}
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
          textAlign: 'center'
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
        boxSizing: 'border-box'
      }}
    >
      <div style={{ maxWidth: '800px', width: '100%', padding: '2rem', fontFamily: 'sans-serif' }}>
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
                border: '3px solid #e0e0e0',
                background: '#f5f5f5'
              }}
            />
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center' }}>{content.name}</h1>
          <p style={{ fontSize: '1.2rem', color: '#555', textAlign: 'center' }}>{content.tagline}</p>
        </header>

        <nav style={{
          display: 'flex',
          justifyContent: 'space-around',
          borderBottom: '1px solid #ccc',
          marginBottom: '1rem',
          paddingBottom: '0.5rem'
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

        <main style={{ marginTop: '1rem' }}>
          {tab === 'home' && (
            <Section title={content.home.title}>
              <p>{content.home.text1}</p>
              <p>{content.home.text2}</p>
              <p>
                {content.home.text3}
                <a href={`tel:${content.contact.phone}`}>HERE</a>.
              </p>
            </Section>
          )}

          {tab === 'services' && (
            <Section title={content.services.title}>
              <ul>
                {content.services.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </Section>
          )}

          {tab === 'projects' && (
            <Section title={content.projects.title}>
              {content.projects.projects.map((proj, i) => (
                <div key={i} style={{ marginTop: i === 0 ? 0 : '1rem' }}>
                  <strong>{proj.title}</strong>
                  <p>{proj.desc}</p>
                </div>
              ))}
            </Section>
          )}

          {tab === 'industries' && (
            <Section title={content.industries.title}>
              {content.industries.industry.map((job, i) => (
                <div key={i} style={{ marginTop: i === 0 ? 0 : '1rem' }}>
                  <strong>{job.title}</strong>
                  <p style={{ fontSize: '0.9rem', color: '#666' }}>{job.years}</p>
                  <p>{job.desc}</p>
                </div>
              ))}
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
                        borderBottom: '1px solid #eee',
                        paddingTop: 0,
                        paddingBottom: 0,
                        width: '100%',
                        boxSizing: 'border-box',
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
                        }}
                      >
                        {item.logo ? (
                          <img
                            src={item.logo}
                            alt={`${item.name} logo`}
                            style={{ maxWidth: 64, maxHeight: 64, objectFit: 'contain' }}
                          />
                        ) : (
                          <div style={{ width: 64, height: 64, background: '#f0f0f0', borderRadius: 8 }} />
                        )}
                      </div>
                      <div style={{ flex: 1, paddingTop: '1rem', paddingBottom: '2rem' }}>
                        <div style={{ fontWeight: 'bold' }}>{item.name}</div>
                        <div style={{ color: '#666', fontSize: '0.95rem' }}>{item.description}</div>
                      </div>
                    </li>
                  ))}
                </div>
              </ul>
            </Section>
          )}

          {tab === 'contact' && (
            <Section title={content.contact.title}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p style={{ textAlign: 'center' }}>
                  {content.contact.text}
                  <br />
                  <br />
                  <strong>Email:</strong> <a href={`mailto:${content.contact.email}`}>{content.contact.email}</a>
                  <br />
                  <strong>Phone:</strong> <a href={`tel:${content.contact.phone}`}>{content.contact.phone}</a>
                </p>
              </div>
            </Section>
          )}
        </main>

        <footer style={{ textAlign: 'center', marginTop: '3rem' }}>
        </footer>
      </div>
    </div>
  );
}

export default App;
