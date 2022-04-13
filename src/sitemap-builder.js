require('babel-register')({
  presets: ['es2015', 'react'],
});

const router = require('./router.tsx').default;
const Sitemap = require('react-router-sitemap').default;

new Sitemap(router)
  .build('https://ixdstudios.design')
  .save('./public/sitemap.xml');
