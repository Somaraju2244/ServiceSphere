// components/drift.js
import Script from 'next/script';

const Drift = () => {
  const snippetVersion = '0.3.1';
  const loadScript = (scriptId) => {
    const timestamp = Math.ceil(new Date() / 300000) * 300000;
    const scriptSrc = `https://js.driftt.com/include/${timestamp}/${scriptId}.js`;
    return (
      <Script
        src={scriptSrc}
        async
        crossorigin="anonymous"
        key={scriptId}
      />
    );
  };

  return (
    <div>
      {loadScript('g66wiewv887g')}
    </div>
  );
};

export default Drift;