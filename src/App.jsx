import React, { useState } from 'react';

function Tab({ label, value, selectedTab, onClick }) {
  return (
    <button
      className={`px-4 py-2 border-b-2 ${selectedTab === value ? 'border-blue-600 font-bold' : 'border-transparent'
        }`}
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
              src="/headshot.jpg"
              alt="Portrait"
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
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center' }}>Jackson Hayward</h1>
          <p style={{ fontSize: '1.2rem', color: '#555', textAlign: 'center' }}>App Architecture | Cyber Security | MVP | Technical Advisor </p>
        </header>

        <nav style={{
          display: 'flex',
          justifyContent: 'space-around',
          borderBottom: '1px solid #ccc',
          marginBottom: '1rem',
          paddingBottom: '0.5rem' // Add space between tabs and border
        }}>
          <Tab label="About" value="about" selectedTab={tab} onClick={setTab} />
          <Tab label="Offerings" value="offerings" selectedTab={tab} onClick={setTab} />
          <Tab label="Education" value="education" selectedTab={tab} onClick={setTab} />
          <Tab label="Employment" value="employment" selectedTab={tab} onClick={setTab} />
          <Tab label="Projects" value="projects" selectedTab={tab} onClick={setTab} />
          <Tab label="Contact" value="contact" selectedTab={tab} onClick={setTab} />
        </nav>

        <main>
          {tab === 'about' && (
            <Section title="About Me">
              <p>
                I'm a seasoned consultant with decades of experience in software development, strategy, and cross-industry
                problem solving. Now retired from full-time work, I help individuals and organizations navigate technical
                and operational challenges through teaching, advising, and mentoring.
              </p>
            </Section>
          )}

          {tab === 'offerings' && (
            <Section title="Consulting Offerings">
              <ul>
                <li>Technical and architectural advising</li>
                <li>Mentorship for junior and mid-level engineers</li>
                <li>Technology due diligence for startups and investors</li>
                <li>Codebase and infrastructure audits</li>
                <li>Strategy and roadmap planning support</li>
              </ul>
            </Section>
          )}

          {tab === 'education' && (
            <Section title="Education">
              <p>
                B.S. in Computer Engineering — Your University Name<br />
                M.S. in Software Systems — Your Graduate School Name
              </p>
            </Section>
          )}

          {tab === 'employment' && (
            <Section title="Previous Employment">
              <div>
                <strong>Senior Software Engineer — MajorTech Corp</strong>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>2010–2023</p>
                <p>Led development of large-scale distributed systems across multiple domains.</p>
              </div>
              <div style={{ marginTop: '1rem' }}>
                <strong>Principal Consultant — Freelance</strong>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>2003–2010</p>
                <p>Worked with clients across industries to implement mission-critical solutions.</p>
              </div>
            </Section>
          )}

          {tab === 'projects' && (
            <Section title="Selected Projects">
              <div>
                <strong>Legacy System Modernization</strong>
                <p>Modernized a decades-old codebase for a financial client, cutting maintenance costs by 50%.</p>
              </div>
              <div style={{ marginTop: '1rem' }}>
                <strong>Startup Tech Due Diligence</strong>
                <p>Performed code audits and scalability assessments for VC-backed startups.</p>
              </div>
            </Section>
          )}

          {tab === 'contact' && (
            <Section title="Contact">
              <p>
                Feel free to reach out for consulting, mentoring, or collaboration opportunities.<br />
                <strong>Email:</strong> <a href="mailto:your.email@example.com">your.email@example.com</a>
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
