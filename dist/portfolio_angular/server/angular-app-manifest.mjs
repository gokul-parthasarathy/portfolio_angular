
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio_angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio_angular"
  },
  {
    "renderMode": 2,
    "route": "/portfolio_angular/home"
  },
  {
    "renderMode": 2,
    "route": "/portfolio_angular/about"
  },
  {
    "renderMode": 2,
    "route": "/portfolio_angular/projects"
  },
  {
    "renderMode": 2,
    "route": "/portfolio_angular/skills"
  },
  {
    "renderMode": 2,
    "route": "/portfolio_angular/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 632, hash: '9050e22dbe2a285eb08acfa51960e5e46ce41eb50f988a99b3b229c63e395479', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1145, hash: '27d6f2de660207416c9f6d05662ad92b0fd5a1f355314b4b3bb860bb85068daa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 5270, hash: 'f13b11a67e2db1f0c28e0079923cea10c3b23169e5c542a24d146c10786cc7d8', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 6891, hash: 'eca3596910ba213294402593d1cfd7c37cbd3da1ee214603990408d52ad791bd', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 10171, hash: '91a13f3f8ec06b9551343ed38656198ad1a42e0bfa5841856fbb837d0ffb46a8', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'index.html': {size: 7204, hash: 'a6224d49058456f8b403d7503d83ab04d8127269e7e36100fbfa4cbbb664632a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 7427, hash: '891d0c1bffef5415ff59ed2ac69c7708ce967f4a28a5c61f8a911199fc9889b6', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 8081, hash: '1572bad89aff5a9c82e3c40dd0cfd55d38713db4ca07055e82ab13ad7d11e0cb', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
