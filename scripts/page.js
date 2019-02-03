const fs = require('fs');

const name = process.argv[2].replace(/^\w/, function(chr) {
  return chr.toLowerCase();
});

const dir = `./src/pages/`;

const write = (path, content) => {
  fs.writeFileSync(path, content.replace(/^ {2}/gm, ''), 'utf-8');
};

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const content = `
  import React from 'react';
  import { SEO } from '../components/SEO';

  export default function() {
    return (
      <>
        <SEO />
      </>
    );
  }
  `;

write(`${dir}/${name}.tsx`, content);
