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
    <div style={{ padding: '1rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{title}</h2>
      {children}
    </div>
  );
}

function App() {
  const [tab, setTab] = useState('about');

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
          {tab === 'about' && (
            <Section title={content.about.title}>
              <p>{content.about.text}</p>
            </Section>
          )}

          {tab === 'offerings' && (
            <Section title={content.offerings.title}>
              <ul>
                {content.offerings.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </Section>
          )}

          {tab === 'education' && (
            <Section title={content.education.title}>
              <p>
                {content.education.text.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </Section>
          )}

          {tab === 'employment' && (
            <Section title={content.employment.title}>
              {content.employment.jobs.map((job, i) => (
                <div key={i} style={{ marginTop: i === 0 ? 0 : '1rem' }}>
                  <strong>{job.title}</strong>
                  <p style={{ fontSize: '0.9rem', color: '#666' }}>{job.years}</p>
                  <p>{job.desc}</p>
                </div>
              ))}
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

          {tab === 'contact' && (
            <Section title={content.contact.title}>
              <p>
                {content.contact.text}
                <br />
                <strong>Email:</strong> <a href={`mailto:${content.contact.email}`}>{content.contact.email}</a>
              </p>
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
