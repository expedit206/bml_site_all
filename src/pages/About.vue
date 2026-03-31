<template>
  <main class="about-page" ref="pageRef">
    <div class="cursor-glow" ref="cursorGlowRef"></div>

    <!-- ═══════════════════════════════════════════════
         HERO — Cinematic full-viewport opener
    ═══════════════════════════════════════════════ -->
    <section class="hero" ref="heroRef">
      <div class="hero__grid-overlay" aria-hidden="true"></div>
      <div class="hero__orbs" aria-hidden="true">
        <span class="orb orb--1"></span>
        <span class="orb orb--2"></span>
        <span class="orb orb--3"></span>
      </div>

      <div class="container hero__inner">
        <div class="hero__badge reveal" data-delay="0">
          <span class="badge-dot"></span>
          <span>Notre Histoire &nbsp;·&nbsp; Est. 2014</span>
        </div>

        <h1 class="hero__title reveal" data-delay="100">
          <span class="line">Une équipe qui</span>
          <span class="line line--accent">transforme</span>
          <span class="line line--outline">vos idées</span>
          <span class="line">en réalité.</span>
        </h1>

        <p class="hero__sub reveal" data-delay="250">
          Nous ne développons pas simplement des applications. Nous concevons des
          systèmes robustes, évolutifs et performants qui propulsent vos projets
          vers un nouveau niveau d'excellence digitale.
        </p>

        <div class="hero__cta reveal" data-delay="380">
          <router-link to="/contact" class="btn-primary-hero">
            Démarrer un projet
            <span class="btn-arrow">→</span>
          </router-link>
          <router-link to="/services" class="btn-ghost-hero">
            Nos services
          </router-link>
        </div>
      </div>

      <div class="hero__scroll-hint" aria-hidden="true">
        <span class="scroll-line"></span>
        <span class="scroll-label">Découvrir</span>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════
         MANIFESTO — One bold statement line
    ═══════════════════════════════════════════════ -->
    <section class="manifesto">
      <div class="manifesto__ticker" aria-hidden="true">
        <div class="ticker-track">
          <span v-for="n in 6" :key="n">
            Solutions Digitales &nbsp;·&nbsp; Ingénierie de Précision &nbsp;·&nbsp;
            Code de Qualité &nbsp;·&nbsp; Innovation Continue &nbsp;·&nbsp;&nbsp;
          </span>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════
         MISSION — Split layout with stats
    ═══════════════════════════════════════════════ -->
    <section class="mission section-gap" ref="missionRef">
      <div class="container mission__grid">

        <div class="mission__content">
          <p class="eyebrow reveal">// Notre Mission</p>
          <h2 class="section-title reveal" data-delay="80">
            Nous croyons que la technologie peut
            <em>transformer</em> chaque projet ambitieux
            en un succès mesurable.
          </h2>
          <p class="body-text reveal" data-delay="160">
            Nous sommes une équipe de développeurs et de designers passionnés par
            la technologie, la création et l'innovation. Notre objectif est simple :
            aider les entreprises, les entrepreneurs et les organisations à réussir
            leur transformation digitale grâce à des solutions modernes, performantes
            et adaptées à leurs besoins.
          </p>
          <p class="body-text reveal" data-delay="220">
            Nous ne faisons pas que développer des sites web ou des applications —
            nous créons des outils qui aident nos clients à mieux travailler, gagner
            du temps et développer leur activité.
          </p>

          <div class="mission__highlights reveal" data-delay="300">
            <div v-for="h in highlights" :key="h.title" class="highlight-item">
              <div class="highlight-icon">{{ h.icon }}</div>
              <div>
                <strong>{{ h.title }}</strong>
                <p>{{ h.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mission__stats reveal" data-delay="100">
          <div v-for="stat in stats" :key="stat.label" class="stat-card">
            <div class="stat-card__value" :data-target="stat.raw">
              {{ stat.value }}
            </div>
            <div class="stat-card__label">{{ stat.label }}</div>
            <div class="stat-card__desc">{{ stat.desc }}</div>
          </div>
        </div>

      </div>
    </section>

    <!-- ═══════════════════════════════════════════════
         VISION — Full-bleed dark band
    ═══════════════════════════════════════════════ -->
    <section class="vision-band">
      <div class="vision-band__noise" aria-hidden="true"></div>
      <div class="container">
        <p class="eyebrow eyebrow--light reveal">// Notre Vision</p>
        <blockquote class="vision-band__quote reveal" data-delay="100">
          "Nous croyons que la technologie est un outil puissant qui peut
          transformer une idée simple en un grand projet. Notre ambition est de
          devenir le partenaire digital de confiance pour toutes les entreprises
          qui souhaitent se moderniser, automatiser leurs services et améliorer
          leur présence en ligne."
        </blockquote>
        <footer class="vision-band__author reveal" data-delay="200">
          — L'équipe BodyMac, depuis 2014
        </footer>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════
         WHY US — Horizontal cards
    ═══════════════════════════════════════════════ -->
    <section class="why-us section-gap">
      <div class="container">
        <div class="section-header">
          <p class="eyebrow reveal">// Pourquoi nous choisir</p>
          <h2 class="section-title reveal" data-delay="80">
            Un partenaire engagé,<br>
            pas juste un prestataire.
          </h2>
        </div>

        <div class="why-us__grid">
          <div
            v-for="(card, i) in whyCards"
            :key="card.title"
            class="why-card reveal tilt-3d"
            :data-delay="i * 90"
          >
            <div class="why-card__glow"></div>
            <div class="why-card__inner">
              <div class="why-card__number">{{ String(i + 1).padStart(2, '0') }}</div>
              <div class="why-card__icon">{{ card.icon }}</div>
              <h3 class="why-card__title">{{ card.title }}</h3>
              <p class="why-card__desc">{{ card.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════
         TEAM — Cinematic card grid
    ═══════════════════════════════════════════════ -->
    <section class="team section-gap">
      <div class="container">
        <div class="section-header">
          <p class="eyebrow reveal">// Notre Équipe</p>
          <h2 class="section-title reveal" data-delay="80">
            Les esprits derrière<br>
            <span class="title-outline">chaque ligne de code.</span>
          </h2>
          <p class="body-text reveal" data-delay="160" style="max-width:52ch">
            Développeurs web & mobile, designers UI/UX et passionnés du digital
            qui travaillent ensemble pour concevoir des solutions modernes et performantes.
          </p>
        </div>

        <div class="team__grid">
          <article
            v-for="(member, i) in team"
            :key="member.name"
            class="member-card reveal tilt-3d"
            :data-delay="i * 70"
          >
            <div class="member-card__glow"></div>
            <div class="member-card__inner">
              <div class="member-card__photo-wrap">
                <img
                  v-if="member.photo"
                  :src="member.photo"
                  :alt="member.name"
                  class="member-card__photo"
                  loading="lazy"
                />
                <div v-else class="member-card__avatar">{{ member.icon }}</div>
                <div class="member-card__overlay">
                  <span class="member-card__skill">{{ member.skills }}</span>
                </div>
              </div>
              <div class="member-card__body">
                <div class="member-card__role">{{ member.title }}</div>
                <h3 class="member-card__name">{{ member.name }}</h3>
                <p class="member-card__bio">{{ member.bio }}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════
         TIMELINE — Vertical milestones
    ═══════════════════════════════════════════════ -->
    <section class="timeline-section section-gap">
      <div class="container">
        <div class="section-header">
          <p class="eyebrow reveal">// Milestones</p>
          <h2 class="section-title reveal" data-delay="80">
            10 ans de<br>construction.
          </h2>
        </div>

        <div class="timeline">
          <div
            v-for="(item, i) in timeline"
            :key="item.year"
            class="timeline__item reveal"
            :data-delay="i * 120"
          >
            <div class="timeline__year">{{ item.year }}</div>
            <div class="timeline__connector">
              <div class="timeline__dot"></div>
              <div class="timeline__line"></div>
            </div>
            <div class="timeline__content">
              <h3 class="timeline__title">{{ item.title }}</h3>
              <p class="timeline__desc">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════
         CTA — Final closing section
    ═══════════════════════════════════════════════ -->
    <section class="cta-section">
      <div class="cta-section__bg" aria-hidden="true">
        <span class="cta-orb cta-orb--1"></span>
        <span class="cta-orb cta-orb--2"></span>
      </div>
      <div class="container cta-section__inner">
        <p class="eyebrow eyebrow--light reveal">// Prêt pour la suite ?</p>
        <h2 class="cta-section__title reveal" data-delay="80">
          Votre projet mérite<br>
          <em>une ingénierie d'élite.</em>
        </h2>
        <p class="cta-section__sub reveal" data-delay="180">
          Ne vous contentez pas d'un site. Construisons ensemble un système
          robuste, scalable et performant qui vous démarque vraiment.
        </p>
        <div class="cta-section__actions reveal" data-delay="260">
          <router-link to="/contact" class="cta-btn cta-btn--primary">
            Lancer mon projet
            <span class="cta-btn__arrow">→</span>
          </router-link>
          <router-link to="/portfolio" class="cta-btn cta-btn--outline">
            Voir nos réalisations
          </router-link>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  {
    value: '10+',
    raw: 10,
    label: "Années d'expérience",
    desc: "Une décennie à créer des solutions durables.",
  },
  {
    value: '50+',
    raw: 50,
    label: 'Projets livrés',
    desc: 'Des missions réussies pour des clients variés.',
  },
  {
    value: '30+',
    raw: 30,
    label: 'Clients satisfaits',
    desc: 'Des partenariats basés sur la confiance.',
  },
]

const highlights = [
  {
    icon: '⭐',
    title: 'Qualité avant tout',
    desc: 'Code audité, testé et optimisé pour la performance en production.',
  },
  {
    icon: '🤝',
    title: 'Vrai partenariat',
    desc: 'Nous dépassons la relation client–prestataire classique.',
  },
  {
    icon: '📅',
    title: 'Responsabilité totale',
    desc: 'Délais, budgets et livrables toujours respectés.',
  },
]

const whyCards = [
  {
    icon: '🎯',
    title: 'Compréhension profonde',
    desc: "Nous prenons le temps d'analyser vos besoins, vos objectifs et votre vision avant d'écrire la première ligne de code.",
  },
  {
    icon: '⚡',
    title: 'Exécution rapide',
    desc: 'Des sprints efficaces, des livraisons régulières et une communication transparente à chaque étape.',
  },
  {
    icon: '🏗️',
    title: 'Architecture solide',
    desc: 'Nos solutions sont conçues pour évoluer avec votre activité — scalables, sécurisées, maintenables.',
  },
  {
    icon: '🎨',
    title: 'Design premium',
    desc: "Interfaces modernes, ergonomiques et accessibles qui reflètent l'identité de votre marque.",
  },
  {
    icon: '🔒',
    title: 'Fiabilité technique',
    desc: 'Technologies éprouvées, tests rigoureux et monitoring continu pour une disponibilité maximale.',
  },
  {
    icon: '💬',
    title: 'Support dédié',
    desc: 'Un interlocuteur unique, réactif, disponible bien après la mise en ligne de votre projet.',
  },
]

const team = [
  {
    icon: '💻',
    name: 'Nguimfack Yannick',
    title: 'Développeur Front-end',
    bio: "Développement de l'interface utilisateur, optimisation UX et création de composants interactifs.",
    skills: 'Vue.js · React · UI/UX · DevOps',
    photo: '/img/equipe/yannick.png',
  },
  {
    icon: '🖥️',
    name: 'Tsemo Dominique',
    title: 'Développeur Back-end',
    bio: "Développement et maintenance des API, gestion des bases de données et performance côté serveur.",
    skills: 'Laravel · SQL · REST API',
    photo: '/img/equipe/expeditdominique.jpg',
  },
  {
    icon: '🖥️',
    name: 'Lontsi Parfait',
    title: 'Développeur Back-end',
    bio: "Architecture système, intégration des services tiers et monitoring applicatif.",
    skills: 'Laravel · Microservices · DevOps',
    photo: '/img/equipe/parfait.png',
  },
  {
    icon: '💻',
    name: 'Simo Boris',
    title: 'Développeur Front-end',
    bio: "Expérience utilisateur et création d'interfaces modernes et performantes.",
    skills: 'Vue.js · React · Performance',
    photo: '/img/equipe/aubin.png',
  },
  {
    icon: '💻',
    name: 'Fouadzeu Boris',
    title: 'Développeur Front-end',
    bio: "Développement à partir des maquettes, ergonomie et composants réutilisables.",
    skills: 'Vue.js · React · Ergonomie',
    photo: '/img/equipe/boris.png',
  },
  {
    icon: '🎨',
    name: 'Waffo Rostand',
    title: 'Conseiller Technique & Designer',
    bio: "Conseil technique, conception graphique et veille sur les tendances UI/UX.",
    skills: 'Design web · UI/UX · DevOps · Formation',
    photo: '/img/equipe/waffo rostand.png',
  },
  {
    icon: '🖌️',
    name: 'Kenhago Stephy',
    title: 'Infographe',
    bio: "Création de visuels, illustrations et supports graphiques pour nos projets.",
    skills: 'Infographie · Illustration · Créativité',
    photo: '/img/equipe/stephie.jpeg',
  },
]

const timeline = [
  {
    year: '2014',
    title: 'Fondation de BodyMac',
    desc: "Premier jalon : une équipe passionnée réunie autour de l'ingénierie logicielle pure.",
  },
  {
    year: '2018',
    title: 'Expansion & Croissance',
    desc: "Premiers clients grands comptes, élargissement de l'équipe et diversification des expertises.",
  },
  {
    year: '2021',
    title: 'Cap des 30 clients',
    desc: "Franchissement d'un palier symbolique — 30 partenariats durables bâtis sur la confiance.",
  },
  {
    year: '2024',
    title: 'Leader digital régional',
    desc: "Plus de 50 projets livrés avec succès. La transformation digitale, c'est notre quotidien.",
  },
]

// ─── Scroll Animations (IntersectionObserver) ────────────────────────────────



const cursorGlowRef = ref<HTMLElement | null>(null)

let observer: IntersectionObserver | null = null

const handle3DTilt = (e: MouseEvent, el: HTMLElement) => {
  const rect = el.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = (y - centerY) / 10
  const rotateY = (centerX - x) / 10

  el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  
  const glow = el.querySelector('.why-card__glow, .member-card__glow') as HTMLElement
  if (glow) {
    glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.15), transparent 80%)`
  }
}

const reset3DTilt = (el: HTMLElement) => {
  el.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`
  const glow = el.querySelector('.why-card__glow, .member-card__glow') as HTMLElement
  if (glow) {
    glow.style.background = `transparent`
  }
}

onMounted(() => {
  // Reveal elements on scroll
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement
          const delay = Number(el.dataset.delay ?? 0)
          setTimeout(() => {
            el.classList.add('is-visible')
          }, delay)
          observer?.unobserve(el)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  )

  document.querySelectorAll('.reveal').forEach((el) => observer!.observe(el))

  // 3D Tilt setup
  document.querySelectorAll('.tilt-3d').forEach((el) => {
    const htmlEl = el as HTMLElement
    htmlEl.addEventListener('mousemove', (e) => handle3DTilt(e, htmlEl))
    htmlEl.addEventListener('mouseleave', () => reset3DTilt(htmlEl))
  })

  // Mouse Glow & Hero Parallax
  const handleGlobalMouseMove = (e: MouseEvent) => {
    // Cursor glow
    if (cursorGlowRef.value) {
      cursorGlowRef.value.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    }

    // Hero Parallax
    const orbs = document.querySelectorAll<HTMLElement>('.orb')
    orbs.forEach((orb, i) => {
      const speed = (i + 1) * 0.015
      const x = (e.clientX - window.innerWidth / 2) * speed
      const y = (e.clientY - window.innerHeight / 2) * speed
      orb.style.transform = `translate(${x}px, ${y}px)`
    })

    // Hero Grid Tilt
    const grid = document.querySelector<HTMLElement>('.hero__grid-overlay')
    if (grid) {
      const x = (e.clientX - window.innerWidth / 2) * 0.005
      const y = (e.clientY - window.innerHeight / 2) * 0.005
      grid.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`
    }
  }
  
  window.addEventListener('mousemove', handleGlobalMouseMove)
  ;(window as any).__aboutListeners = handleGlobalMouseMove
})

onUnmounted(() => {
  observer?.disconnect()
  if ((window as any).__aboutListeners) {
    window.removeEventListener('mousemove', (window as any).__aboutListeners)
  }
})
</script>

<style scoped>
/* ─── Design Tokens ──────────────────────────────────────────────────────── */
.about-page {
  --clr-bg: var(--background);
  --clr-surface: var(--surface);
  --clr-border: var(--border);
  --clr-primary: var(--primary);
  --clr-accent: var(--accent);
  --clr-text: var(--text-main);
  --clr-muted: var(--text-muted);
  --font-sans: 'Inter', system-ui, sans-serif;
  background: var(--clr-bg);
  color: var(--clr-text);
  font-family: var(--font-sans);
  overflow-x: hidden;
  cursor: none;
}

.cursor-glow {
  position: fixed;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, color-mix(in srgb, var(--clr-primary) 15%, transparent) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  filter: blur(40px);
  will-change: transform;
  mix-blend-mode: screen;
  display: none;
}

@media (min-width: 1024px) {
  .cursor-glow { display: block; position: fixed; left: -200px; top: -200px; }
}

.container {
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: clamp(1.25rem, 5vw, 3rem);
}

.section-gap {
  padding-block: clamp(5rem, 10vw, 9rem);
}

/* ─── Reveal Animation ───────────────────────────────────────────────────── */
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ─── Typography helpers ─────────────────────────────────────────────────── */
.eyebrow {
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--clr-primary);
  margin-bottom: 1.1rem;
}
.eyebrow--light { color: rgba(255,255,255,0.55); }

.section-title {
  font-size: clamp(2rem, 4.5vw, 3.6rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.06;
  margin-bottom: 1.5rem;
  color: var(--clr-text);
}
.section-title em { font-style: italic; color: var(--clr-primary); }
.title-outline {
  -webkit-text-stroke: 1.5px var(--clr-text);
  color: transparent;
}

.body-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--clr-muted);
  margin-bottom: 1.25rem;
}

.section-header { margin-bottom: 4rem; }

/* ─── Hero ───────────────────────────────────────────────────────────────── */
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-block: 120px 80px;
  overflow: hidden;
  border-bottom: 1px solid var(--clr-border);
}

.hero__grid-overlay {
  position: absolute;
  inset: -10%;
  background-image:
    linear-gradient(to right, var(--clr-border) 1px, transparent 1px),
    linear-gradient(to bottom, var(--clr-border) 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: 0.35;
  pointer-events: none;
  transition: transform 0.2s cubic-bezier(0.1, 0, 0.2, 1);
  will-change: transform;
}

/* Gradient fade on grid edges */
.hero__grid-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, var(--clr-bg) 100%);
}

/* Ambient orbs */
.hero__orbs { position: absolute; inset: 0; pointer-events: none; }
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}
.orb--1 {
  width: 600px; height: 600px;
  top: -160px; left: -160px;
  background: radial-gradient(circle, color-mix(in srgb, var(--clr-primary) 25%, transparent) 0%, transparent 70%);
}
.orb--2 {
  width: 500px; height: 500px;
  bottom: -100px; right: -60px;
  background: radial-gradient(circle, color-mix(in srgb, var(--clr-accent) 18%, transparent) 0%, transparent 70%);
}
.orb--3 {
  width: 300px; height: 300px;
  top: 40%; left: 55%;
  background: radial-gradient(circle, color-mix(in srgb, var(--clr-primary) 12%, transparent) 0%, transparent 70%);
}

.hero__inner { position: relative; z-index: 2; }

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 1rem;
  border: 1px solid color-mix(in srgb, var(--clr-primary) 40%, transparent);
  border-radius: 99px;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--clr-primary);
  background: color-mix(in srgb, var(--clr-primary) 6%, transparent);
  margin-bottom: 2rem;
}
.badge-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--clr-primary);
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.7); }
}

.hero__title {
  font-size: clamp(3rem, 8vw, 7.5rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 0.92;
  margin-bottom: 2.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.06em;
}
.hero__title .line { display: block; }
.hero__title .line--accent { color: var(--clr-primary); font-style: italic; }
.hero__title .line--outline {
  -webkit-text-stroke: 2px var(--clr-text);
  color: transparent;
}

.hero__sub {
  max-width: 52ch;
  font-size: clamp(1rem, 1.5vw, 1.18rem);
  line-height: 1.75;
  color: var(--clr-muted);
  margin-bottom: 2.8rem;
  font-weight: 400;
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.btn-primary-hero {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.9rem 2rem;
  background: var(--clr-primary);
  color: #000;
  font-weight: 800;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid var(--clr-primary);
  transition: background 0.25s, color 0.25s, gap 0.25s;
  position: relative;
  overflow: hidden;
}
.btn-primary-hero:hover { background: transparent; color: var(--clr-primary); }
.btn-primary-hero:hover .btn-arrow { transform: translateX(4px); }
.btn-arrow { transition: transform 0.25s; }

.btn-ghost-hero {
  display: inline-flex;
  align-items: center;
  padding: 0.9rem 1.8rem;
  background: transparent;
  color: var(--clr-text);
  font-weight: 700;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid var(--clr-border);
  transition: border-color 0.25s, color 0.25s;
}
.btn-ghost-hero:hover { border-color: var(--clr-primary); color: var(--clr-primary); }

.hero__scroll-hint {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 2;
}
.scroll-line {
  display: block;
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, var(--clr-primary), transparent);
  animation: scrollDrop 2s ease-in-out infinite;
}
@keyframes scrollDrop {
  0% { transform: scaleY(0); transform-origin: top; opacity: 0; }
  40% { transform: scaleY(1); transform-origin: top; opacity: 1; }
  100% { transform: scaleY(1); transform-origin: bottom; opacity: 0; }
}
.scroll-label {
  font-size: 0.6rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--clr-muted);
}

/* ─── Manifesto Ticker ───────────────────────────────────────────────────── */
.manifesto {
  padding-block: 1.25rem;
  border-block: 1px solid var(--clr-border);
  overflow: hidden;
  background: var(--clr-surface);
}
.manifesto__ticker { white-space: nowrap; }
.ticker-track {
  display: inline-flex;
  animation: ticker 28s linear infinite;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--clr-muted);
  gap: 0;
}
@keyframes ticker {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* ─── Mission ────────────────────────────────────────────────────────────── */
.mission__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
}
@media (min-width: 900px) {
  .mission__grid { grid-template-columns: 1fr 400px; align-items: start; }
}

.mission__highlights {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--clr-border);
}
.highlight-item {
  display: flex;
  gap: 1.1rem;
  align-items: flex-start;
}
.highlight-icon {
  font-size: 1.4rem;
  line-height: 1;
  flex-shrink: 0;
  margin-top: 0.1rem;
}
.highlight-item strong {
  display: block;
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: var(--clr-text);
}
.highlight-item p {
  font-size: 0.85rem;
  color: var(--clr-muted);
  line-height: 1.55;
  margin: 0;
}

.mission__stats {
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid var(--clr-border);
  position: sticky;
  top: 120px;
}
.stat-card {
  padding: 2.2rem 2rem;
  border-bottom: 1px solid var(--clr-border);
  transition: background 0.3s;
  position: relative;
  overflow: hidden;
}
.stat-card:last-child { border-bottom: none; }
.stat-card::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 3px;
  background: var(--clr-primary);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.stat-card:hover::before { transform: scaleY(1); }
.stat-card:hover { background: color-mix(in srgb, var(--clr-primary) 4%, var(--clr-surface)); }

.stat-card__value {
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  color: var(--clr-primary);
  line-height: 1;
  margin-bottom: 0.4rem;
}
.stat-card__label {
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--clr-text);
  margin-bottom: 0.4rem;
}
.stat-card__desc {
  font-size: 0.8rem;
  color: var(--clr-muted);
  line-height: 1.5;
}

/* ─── Vision Band ────────────────────────────────────────────────────────── */
.vision-band {
  position: relative;
  padding-block: clamp(5rem, 10vw, 8rem);
  background: var(--clr-accent, #0f0f11);
  overflow: hidden;
}
.vision-band__noise {
  position: absolute; inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
  background-size: 200px;
  opacity: 0.4;
  pointer-events: none;
}
.vision-band .container { position: relative; z-index: 1; max-width: 860px; }
.vision-band__quote {
  font-size: clamp(1.35rem, 2.8vw, 2.1rem);
  font-weight: 500;
  font-style: italic;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.88);
  border-left: 3px solid var(--clr-primary);
  padding-left: 2rem;
  margin: 0 0 1.5rem;
}
.vision-band__author {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  padding-left: 2rem;
}

/* ─── Why Us ─────────────────────────────────────────────────────────────── */
.why-us__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1px;
  background: var(--clr-border);
  border: 1px solid var(--clr-border);
}
.why-card {
  background: var(--clr-bg);
  padding: 2.5rem 2rem;
  position: relative;
  transition: background 0.3s;
  overflow: hidden;
}
.why-card::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 2px;
  background: var(--clr-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.why-card:hover::after { transform: scaleX(1); }
.why-card:hover { background: color-mix(in srgb, var(--clr-primary) 3%, var(--clr-bg)); }

.why-card__number {
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.3em;
  color: var(--clr-primary);
  opacity: 0.7;
  margin-bottom: 1.2rem;
}
.why-card__icon {
  font-size: 1.6rem;
  margin-bottom: 1rem;
}
.why-card__title {
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: -0.01em;
  margin-bottom: 0.6rem;
  color: var(--clr-text);
}
.why-card__desc {
  font-size: 0.85rem;
  color: var(--clr-muted);
  line-height: 1.65;
}

/* ─── Team ───────────────────────────────────────────────────────────────── */
.team__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
}
.member-card {
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  overflow: hidden;
  transition: border-color 0.3s, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s;
  cursor: default;
}
.member-card:hover {
  border-color: var(--clr-primary);
  transform: translateY(-6px);
  box-shadow: 0 20px 60px -10px color-mix(in srgb, var(--clr-primary) 20%, transparent);
}

.member-card__photo-wrap {
  position: relative;
  aspect-ratio: 3/3.5;
  overflow: hidden;
  background: var(--clr-bg);
}
.member-card__photo {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), filter 0.4s;
  filter: grayscale(20%);
}
.member-card:hover .member-card__photo {
  transform: scale(1.06);
  filter: grayscale(0%);
}
.member-card__avatar {
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
  font-size: 4rem;
  opacity: 0.2;
}

.member-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, color-mix(in srgb, var(--clr-accent) 90%, transparent) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.4s;
  display: flex;
  align-items: flex-end;
  padding: 1.2rem;
}
.member-card:hover .member-card__overlay { opacity: 1; }
.member-card__skill {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--clr-primary);
  background: color-mix(in srgb, var(--clr-primary) 15%, rgba(0,0,0,0.5));
  padding: 0.3rem 0.7rem;
  border-radius: 2px;
}

.member-card__body {
  padding: 1.4rem 1.5rem 1.6rem;
}
.member-card__role {
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--clr-primary);
  margin-bottom: 0.35rem;
}
.member-card__name {
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--clr-text);
  margin-bottom: 0.5rem;
}
.member-card__bio {
  font-size: 0.8rem;
  color: var(--clr-muted);
  line-height: 1.6;
}

/* ─── Timeline ───────────────────────────────────────────────────────────── */
.timeline { position: relative; }
.timeline__item {
  display: grid;
  grid-template-columns: 100px 40px 1fr;
  gap: 1.5rem;
  align-items: start;
  margin-bottom: 0;
}
.timeline__item:last-child .timeline__line { display: none; }

.timeline__year {
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  color: color-mix(in srgb, var(--clr-accent) 60%, transparent);
  text-align: right;
  padding-top: 0.1rem;
  transition: color 0.3s;
}
.timeline__item:hover .timeline__year { color: var(--clr-primary); }

.timeline__connector {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.timeline__dot {
  width: 12px; height: 12px;
  border-radius: 50%;
  border: 2px solid var(--clr-primary);
  background: var(--clr-bg);
  flex-shrink: 0;
  margin-top: 0.5rem;
  transition: background 0.3s, transform 0.3s;
}
.timeline__item:hover .timeline__dot { background: var(--clr-primary); transform: scale(1.4); }
.timeline__line {
  flex: 1;
  width: 1px;
  background: var(--clr-border);
  min-height: 80px;
  margin-top: 6px;
}

.timeline__content { padding-top: 0.2rem; padding-bottom: 3.5rem; }
.timeline__title {
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--clr-text);
  margin-bottom: 0.6rem;
}
.timeline__desc {
  font-size: 0.9rem;
  color: var(--clr-muted);
  line-height: 1.65;
  max-width: 52ch;
}

@media (max-width: 600px) {
  .timeline__item { grid-template-columns: 70px 32px 1fr; gap: 1rem; }
}

/* ─── CTA ────────────────────────────────────────────────────────────────── */
.cta-section {
  position: relative;
  padding-block: clamp(6rem, 12vw, 10rem);
  background: var(--clr-accent, #0d0d10);
  overflow: hidden;
}
.cta-section__bg { position: absolute; inset: 0; pointer-events: none; }
.cta-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
}
.cta-orb--1 {
  width: 700px; height: 700px;
  top: -250px; left: -200px;
  background: radial-gradient(circle, color-mix(in srgb, var(--clr-primary) 20%, transparent), transparent 70%);
}
.cta-orb--2 {
  width: 500px; height: 500px;
  bottom: -200px; right: -100px;
  background: radial-gradient(circle, color-mix(in srgb, var(--clr-primary) 12%, transparent), transparent 70%);
}

.cta-section__inner { position: relative; z-index: 2; text-align: center; }

.cta-section__title {
  font-size: clamp(2.5rem, 6vw, 5.5rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.05;
  color: #fff;
  margin-bottom: 1.4rem;
}
.cta-section__title em { font-style: italic; color: var(--clr-primary); }

.cta-section__sub {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.55);
  max-width: 50ch;
  margin-inline: auto;
  margin-bottom: 2.8rem;
  line-height: 1.7;
}

.cta-section__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  padding: 1rem 2.2rem;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.25s;
  border: 2px solid transparent;
}
.cta-btn--primary {
  background: var(--clr-primary);
  color: #000;
  border-color: var(--clr-primary);
}
.cta-btn--primary:hover {
  background: transparent;
  color: var(--clr-primary);
}
.cta-btn--primary:hover .cta-btn__arrow { transform: translateX(5px); }
.cta-btn__arrow { transition: transform 0.25s; }

.cta-btn--outline {
  background: transparent;
  color: rgba(255, 255, 255, 0.75);
  border-color: rgba(255, 255, 255, 0.2);
}
.cta-btn--outline:hover {
  border-color: var(--clr-primary);
  color: var(--clr-primary);
}

/* ─── Responsive tweaks ──────────────────────────────────────────────────── */
@media (max-width: 640px) {
  .hero__title { font-size: clamp(2.8rem, 12vw, 4.5rem); }
  .mission__stats { position: static; }
  .stat-card { padding: 1.6rem 1.4rem; }
  .vision-band__quote { font-size: 1.1rem; }
  .timeline__item { grid-template-columns: 56px 28px 1fr; gap: 0.8rem; }
}
/* ─── 3D Utilities ───────────────────────────────────────────────────────── */
.tilt-3d {
  transform-style: preserve-3d;
  transition: transform 0.15s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
}

.why-card__inner, .member-card__inner {
  transform: translateZ(40px);
  transform-style: preserve-3d;
}

.why-card__glow, .member-card__glow {
  position: absolute;
  inset: 0;
  z-index: 10;
  pointer-events: none;
  transition: background 0.1s;
}

.why-card__icon, .why-card__number, .member-card__photo-wrap {
  transform: translateZ(60px);
}

.why-card__title, .member-card__name {
  transform: translateZ(80px);
}

.why-card:hover, .member-card:hover {
  z-index: 100;
}

@media (max-width: 1024px) {
  .about-page { cursor: auto; }
}
</style>
