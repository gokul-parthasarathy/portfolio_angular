
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "route": "/skills"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 614, hash: '935c485bfec6c92717e73c3041d3cf9af2343e7edc66b2380d09d77266f2b370', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1127, hash: '36ee288626f72aba379a2c2281fc4333d61b1e1968510a346c78e8201bd41a06', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 5144, hash: 'dd9cc4570cdace27678556e690f26d9f86b463f4a8d4974136ced352f9ae92c2', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 6765, hash: 'ed53ecfc2af0577178bacb991aaaab4c9c2b1c4233cf4ddaedd3f92b76086e06', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 7301, hash: '570aea3c5db6e627e6c6e2aee2ca1d7ebbdaa83b5910b46a8df7d972c327b75b', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6970, hash: '4f8b1d621c787d605eb1eb21cfefa5e1acbe560fa83b42f3677fe01002bcd141', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 7955, hash: '61ec163ec47439034e467b9a307875082dd6dcb7d2d428aa8fe0704da3089596', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 10045, hash: 'e80ac64afd5f211e6e2c4bff62c9692a83a2bb5751e382cfa3e27ab45127f290', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
