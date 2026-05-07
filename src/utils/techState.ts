import { ref } from 'vue'

export const activeTechTab = ref(0)

export const techLogosData = [
  {
    name: 'Vue.js', src: '/img/logo/vue-js-seeklogo.svg',
    x: 0.12, y: 0.12, filename: 'App.vue',
    language: 'vue',
    code: [
      { raw: '<script setup>',          html: `<span class="tok-kw">&lt;script setup&gt;</span>` },
      { raw: `  import { ref } from 'vue'`, html: `  <span class="tok-kw">import</span> { <span class="tok-fn">ref</span> } <span class="tok-kw">from</span> <span class="tok-str">'vue'</span>` },
      { raw: `  const agency = ref('BodyMacs Labs')`, html: `  <span class="tok-kw">const</span> <span class="tok-var">agency</span> = <span class="tok-fn">ref</span>(<span class="tok-str">'BodyMacs Labs'</span>)` },
      { raw: '</script>',               html: `<span class="tok-kw">&lt;/script&gt;</span>` },
      { raw: '',                        html: '' },
      { raw: '<template>',              html: `<span class="tok-kw">&lt;template&gt;</span>` },
      { raw: `  <h1>{{ agency }}</h1>`, html: `  <span class="tok-tag">&lt;h1&gt;</span>{{ <span class="tok-var">agency</span> }}<span class="tok-tag">&lt;/h1&gt;</span>` },
      { raw: '</template>',             html: `<span class="tok-kw">&lt;/template&gt;</span>` },
    ],
  },
  {
    name: 'React', src: '/img/logo/react-seeklogo.svg',
    x: 0.88, y: 0.12, filename: 'App.jsx',
    language: 'jsx',
    code: [
      { raw: `import { useState } from 'react'`, html: `<span class="tok-kw">import</span> { <span class="tok-fn">useState</span> } <span class="tok-kw">from</span> <span class="tok-str">'react'</span>` },
      { raw: '',                                 html: '' },
      { raw: `export default function App() {`,  html: `<span class="tok-kw">export default function</span> <span class="tok-fn">App</span>() {` },
      { raw: `  const [p, setP] = useState('')`, html: `  <span class="tok-kw">const</span> [p, setP] = <span class="tok-fn">useState</span>(<span class="tok-str">''</span>)` },
      { raw: `  return <div>{p}</div>`,          html: `  <span class="tok-kw">return</span> <span class="tok-tag">&lt;div&gt;</span>{p}<span class="tok-tag">&lt;/div&gt;</span>` },
      { raw: `}`,                                html: `}` },
    ],
  },
  {
    name: 'Node.js', src: '/img/logo/node-js-seeklogo.svg',
    x: 0.08, y: 0.50, filename: 'server.js',
    language: 'js',
    code: [
      { raw: `const express = require('express')`, html: `<span class="tok-kw">const</span> <span class="tok-var">express</span> = <span class="tok-fn">require</span>(<span class="tok-str">'express'</span>)` },
      { raw: `const app = express()`,              html: `<span class="tok-kw">const</span> <span class="tok-var">app</span> = <span class="tok-fn">express</span>()` },
      { raw: '',                                    html: '' },
      { raw: `app.get('/api/health', (req, res) => {`, html: `<span class="tok-var">app</span>.<span class="tok-fn">get</span>(<span class="tok-str">'/api/health'</span>, (<span class="tok-var">req</span>, <span class="tok-var">res</span>) => {` },
      { raw: `  res.json({ status: 'ok', uptime: 99.99 })`, html: `  <span class="tok-var">res</span>.<span class="tok-fn">json</span>({ <span class="tok-var">status</span>: <span class="tok-str">'ok'</span>, <span class="tok-var">uptime</span>: <span class="tok-num">99.99</span> })` },
      { raw: `})`,                                  html: `})` },
      { raw: '',                                    html: '' },
      { raw: `app.listen(3000)`,                    html: `<span class="tok-var">app</span>.<span class="tok-fn">listen</span>(<span class="tok-num">3000</span>)` },
    ],
  },
  {
    name: 'Python', src: '/img/logo/python-seeklogo.svg',
    x: 0.20, y: 0.88, filename: 'model.py',
    language: 'py',
    code: [
      { raw: `import pandas as pd`,                  html: `<span class="tok-kw">import</span> pandas <span class="tok-kw">as</span> pd` },
      { raw: `from sklearn import train_test_split`,  html: `<span class="tok-kw">from</span> sklearn <span class="tok-kw">import</span> train_test_split` },
      { raw: '',                                      html: '' },
      { raw: `# Analyse prédictive`,                  html: `<span class="tok-cm"># Analyse prédictive</span>` },
      { raw: `data = pd.read_csv('data.csv')`,        html: `<span class="tok-var">data</span> = pd.<span class="tok-fn">read_csv</span>(<span class="tok-str">'data.csv'</span>)` },
      { raw: `model = train_model(data)`,             html: `<span class="tok-var">model</span> = <span class="tok-fn">train_model</span>(data)` },
      { raw: `print('Précision:', model.score)`,      html: `<span class="tok-fn">print</span>(<span class="tok-str">'Précision:'</span>, model.score)` },
    ],
  },
  {
    name: 'Tailwind', src: '/img/logo/tailwind-css-seeklogo.svg',
    x: 0.80, y: 0.88, filename: 'main.css',
    language: 'css',
    code: [
      { raw: `@tailwind base;`,       html: `<span class="tok-at">@tailwind</span> base;` },
      { raw: `@tailwind components;`, html: `<span class="tok-at">@tailwind</span> components;` },
      { raw: `@tailwind utilities;`,  html: `<span class="tok-at">@tailwind</span> utilities;` },
      { raw: '',                      html: '' },
      { raw: `/* Bouton principal */`, html: `<span class="tok-cm">/* Bouton principal */</span>` },
      { raw: `.btn-primary {`,        html: `<span class="tok-sel">.btn-primary</span> {` },
      { raw: `  @apply bg-orange-500 text-white px-6 py-2 rounded-lg;`, html: `  <span class="tok-at">@apply</span> bg-orange-500 text-white px-6 py-2 rounded-lg;` },
      { raw: `}`,                     html: `}` },
    ],
  },
]
