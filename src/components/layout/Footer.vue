<template>
  <footer class="footer">
    <!-- Top gradient separator -->
    <div class="footer-separator"></div>

    <div class="footer-inner max-w-7xl mx-auto px-6">

      <!-- Top row: logo + newsletter -->
      <div class="footer-top">
        <div class="footer-brand">
          <img src="/img/BML/bodymacs-clair-final-svg.png" alt="BodyMacs Labs" class="footer-logo dark:hidden"/>
          <img src="/img/BML/bodymacs-sombre-final-svg-fond.png" alt="BodyMacs Labs" class="footer-logo hidden dark:block"/>
          <p class="footer-tagline">
            Nous transformons vos idées en produits numériques robustes, performants et évolutifs.
          </p>
          <div class="footer-social">
            <a href="#" target="_blank" rel="noopener" class="social-btn" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" target="_blank" rel="noopener" class="social-btn" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
            <a href="#" target="_blank" rel="noopener" class="social-btn" aria-label="Twitter / X">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l16 16M4 20L20 4"/></svg>
            </a>
            <a href="mailto:contact@bodymacs.com" class="social-btn" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
            </a>
          </div>
        </div>

        <!-- Newsletter -->
        <div class="footer-newsletter">
          <p class="newsletter-label">Restez informé</p>
          <h3 class="newsletter-title">Notre veille technologique, directement dans votre boîte</h3>
          <form class="newsletter-form" @submit.prevent="submitNewsletter">
            <div class="form-row">
              <input
                v-model="email"
                type="email"
                placeholder="votre@email.com"
                class="newsletter-input"
                required
              />
              <button type="submit" class="newsletter-btn" :disabled="submitted">
                <span v-if="!submitted">S'abonner</span>
                <span v-else class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  Abonné
                </span>
              </button>
            </div>
            <p class="newsletter-note">Pas de spam. Désabonnement en un clic.</p>
          </form>
        </div>
      </div>

      <!-- Middle row: navigation columns -->
      <div class="footer-nav">
        <div v-for="col in navColumns" :key="col.title" class="nav-col">
          <h4 class="nav-col-title">{{ col.title }}</h4>
          <ul class="nav-col-links">
            <li v-for="link in col.links" :key="link.label">
              <RouterLink v-if="link.to" :to="link.to" class="nav-link">{{ link.label }}</RouterLink>
              <a v-else :href="link.href" class="nav-link" :target="link.external ? '_blank' : undefined" :rel="link.external ? 'noopener' : undefined">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <!-- Contact column -->
        <div class="nav-col">
          <h4 class="nav-col-title">Contact</h4>
          <ul class="space-y-3">
            <li class="flex items-start gap-2.5">
              <svg class="shrink-0 mt-0.5 text-orange-500" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href="mailto:bodymacs@gmail.com" class="nav-link">bodymacs@gmail.com</a>
            </li>
            <li class="flex items-start gap-2.5">
              <svg class="shrink-0 mt-0.5 text-orange-500" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.96-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>
              <a href="tel:+237640472357" class="nav-link">+237 6 40 47 23 57</a>
            </li>
            <li class="flex items-start gap-2.5">
              <svg class="shrink-0 mt-0.5 text-orange-500" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span class="text-[var(--text-muted)] text-sm">Bafoussam, Cameroun 🇨🇲</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Stack badges -->
      <div class="footer-stack">
        <span class="stack-label">Construit avec</span>
        <div class="stack-badges">
          <span v-for="tech in stack" :key="tech" class="stack-badge">{{ tech }}</span>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="footer-bottom">
        <p class="text-sm text-[var(--text-muted)]">
          © {{ year }} BodyMacs Labs · Tous droits réservés
        </p>
        <div class="footer-bottom-links">
          <RouterLink to="/legal/mentions" class="bottom-link">Mentions légales</RouterLink>
          <RouterLink to="/legal/privacy" class="bottom-link">Confidentialité</RouterLink>
          <RouterLink to="/legal/cgv" class="bottom-link">CGV</RouterLink>
        </div>
        <div class="made-in">
          <div class="status-dot"></div>
          <span class="text-xs text-[var(--text-muted)]">Tous systèmes opérationnels</span>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const year = new Date().getFullYear()
const email = ref('')
const submitted = ref(false)

const submitNewsletter = () => {
  if (!email.value) return
  submitted.value = true
  setTimeout(() => { submitted.value = false; email.value = '' }, 4000)
}

const navColumns = [
  {
    title: 'Services',
    links: [
      { label: 'Développement web', to: '/services' },
      { label: 'Applications mobiles', to: '/services' },
      { label: 'Cloud & DevOps', to: '/services' },
      { label: 'Data & Analytics', to: '/services' },
      { label: 'Audit & sécurité', to: '/services' },
    ],
  },
  {
    title: 'Réalisations',
    links: [
      { label: 'Acadecol', href: 'https://acadecol.com', external: true },
      { label: 'Boris Tech', href: 'https://boristech.cm', external: true },
      { label: 'Stella Wabo', href: 'https://stellawabo.com', external: true },
      { label: 'StudentApp', href: 'https://studentapp.espacecameroun.com/', external: true },
      { label: 'Tous les projets', to: '/realisations' },
    ],
  },
  {
    title: 'Entreprise',
    links: [
      { label: 'À propos', to: '/a-propos' },
      { label: 'Notre équipe', to: '/a-propos' },
      { label: 'Carrières', to: '/a-propos' },
      { label: 'Blog technique', href: '#' },
      { label: 'Contact', to: '/contact' },
    ],
  },
]

const stack = ['Vue.js', 'Laravel', 'React Native', 'AWS', 'Docker', 'PostgreSQL', 'Tailwind']
</script>

<style scoped>
.footer {
  background: #0a0e14;
  position: relative;
  overflow: hidden;
}

.footer-separator {
  height: 1px;
  background: linear-gradient(90deg, transparent, #f39200 30%, #0a1b9e 70%, transparent);
  opacity: 0.6;
}

.footer-inner { padding: 64px 24px 32px; }

/* Top row */
.footer-top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  margin-bottom: 56px;
}
@media (max-width: 768px) { .footer-top { grid-template-columns: 1fr; gap: 40px; } }

/* Brand */
.footer-logo { height: 48px; width: auto; object-fit: contain; }
.footer-tagline { color: #8b949e; font-size: 14px; line-height: 1.7; margin-top: 16px; max-width: 340px; }
.footer-social { display: flex; gap: 8px; margin-top: 20px; }
.social-btn {
  width: 36px; height: 36px;
  border: 1px solid #30363d; border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
  color: #8b949e;
  transition: color .2s, border-color .2s, background .2s;
}
.social-btn:hover { color: #f39200; border-color: #f39200; background: rgba(243,146,0,.06); }

/* Newsletter */
.newsletter-label { font-size: 12px; font-family: monospace; color: #3d7bbd; margin-bottom: 8px; }
.newsletter-title { font-size: 18px; font-weight: 600; color: #e6edf3; line-height: 1.4; margin-bottom: 20px; }
.form-row { display: flex; gap: 8px; }
.newsletter-input {
  flex: 1; background: #161b22; border: 1px solid #30363d;
  border-radius: 8px; padding: 10px 14px;
  color: #e6edf3; font-size: 14px; outline: none;
  transition: border-color .2s;
}
.newsletter-input::placeholder { color: #484f58; }
.newsletter-input:focus { border-color: #f39200; }
.newsletter-btn {
  background: #f39200; color: white;
  border: none; border-radius: 8px; padding: 10px 20px;
  font-size: 14px; font-weight: 600; cursor: pointer; white-space: nowrap;
  transition: background .2s, transform .1s;
}
.newsletter-btn:hover:not(:disabled) { background: #d4820a; }
.newsletter-btn:disabled { background: #28c840; cursor: default; }
.newsletter-note { font-size: 11px; color: #484f58; margin-top: 8px; }

/* Nav columns */
.footer-nav {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  padding-bottom: 48px;
  border-bottom: 1px solid #21262d;
  margin-bottom: 32px;
}
@media (max-width: 768px) { .footer-nav { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .footer-nav { gap: 24px; } }

.nav-col-title { font-size: 12px; font-weight: 700; color: #e6edf3; text-transform: uppercase; letter-spacing: .08em; margin-bottom: 16px; }
.nav-col-links { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
.nav-link { font-size: 13px; color: #8b949e; text-decoration: none; transition: color .15s; }
.nav-link:hover { color: #f39200; }

/* Stack badges */
.footer-stack {
  display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
  padding-bottom: 32px; border-bottom: 1px solid #21262d; margin-bottom: 24px;
}
.stack-label { font-size: 12px; color: #484f58; white-space: nowrap; }
.stack-badges { display: flex; gap: 6px; flex-wrap: wrap; }
.stack-badge {
  font-size: 11px; padding: 3px 10px;
  border: 1px solid #30363d; border-radius: 4px;
  color: #8b949e; background: #161b22;
}

/* Bottom bar */
.footer-bottom {
  display: flex; align-items: center; gap: 24px; flex-wrap: wrap;
}
.footer-bottom-links { display: flex; gap: 16px; margin-left: auto; }
.bottom-link { font-size: 12px; color: #484f58; text-decoration: none; transition: color .15s; }
.bottom-link:hover { color: #8b949e; }
.made-in { display: flex; align-items: center; gap: 6px; }
.status-dot { width: 7px; height: 7px; border-radius: 50%; background: #28c840; animation: statusPulse 2s ease-in-out infinite; }
@keyframes statusPulse { 0%,100%{opacity:1} 50%{opacity:.4} }

@media (max-width: 768px) {
  .footer-bottom-links { margin-left: 0; }
  .footer-bottom { gap: 12px; }
}
</style>
