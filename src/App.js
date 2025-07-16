import React from 'react';

function App() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
    color: '#fff',
    fontFamily: 'Segoe UI, sans-serif',
    padding: '2rem',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '3rem',
    marginBottom: '1rem',
    color: '#00d8ff',
  };

  const paragraphStyle = {
    fontSize: '1.25rem',
    maxWidth: '600px',
    lineHeight: '1.6',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Hi, I'm Abdul Hannan 👋</h1>
      <p style={paragraphStyle}>
        I'm working at <strong>Systems Limited</strong>, diving deep into the world of <strong>DevOps</strong>. 🚀
      </p>
      <p style={paragraphStyle}>
        I’m passionate about automation, CI/CD pipelines, and creating scalable infrastructure with cloud-native tools. 💡
      </p>
    </div>
  );
}

export default App;
