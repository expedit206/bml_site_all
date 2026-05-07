<template>
  <section id="contact" class="py-24 bg-[var(--surface)] border-t border-[var(--border)] relative overflow-hidden">
    <!-- Ambient glow -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-6xl mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <!-- Left: info + coords -->
        <div class="scroll-reveal space-y-8">
          <div>
            <p class="font-mono text-sm text-blue-600 mb-2">// 07. CONTACT</p>
            <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-main)] mb-4">
              Parlons de votre <span class="text-orange-500">prochain projet</span>
            </h2>
            <p class="text-lg text-[var(--text-muted)] leading-relaxed">
              Une idée, un besoin, une question ? Envoyez-nous votre brief et nous revenons vers vous sous 24h.
            </p>
          </div>

          <!-- Contact cards -->
          <div class="space-y-4">
            <a href="https://wa.me/237640472357" target="_blank" rel="noopener"
               class="contact-card group flex items-center gap-5 p-5 border border-[var(--border)] bg-[var(--background)] hover:border-orange-500 transition-all duration-300 rounded-xl">
              <div class="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 shrink-0 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.96-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>
              </div>
              <div>
                <p class="text-xs text-[var(--text-muted)] mb-0.5">WhatsApp / Téléphone</p>
                <p class="font-semibold text-[var(--text-main)] group-hover:text-orange-500 transition-colors">(+237) 640 472 357</p>
              </div>
            </a>

            <a href="mailto:bodymacs@gmail.com"
               class="contact-card group flex items-center gap-5 p-5 border border-[var(--border)] bg-[var(--background)] hover:border-orange-500 transition-all duration-300 rounded-xl">
              <div class="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
              </div>
              <div>
                <p class="text-xs text-[var(--text-muted)] mb-0.5">Email professionnel</p>
                <p class="font-semibold text-[var(--text-main)] group-hover:text-orange-500 transition-colors">bodymacs@gmail.com</p>
              </div>
            </a>

            <div class="flex items-center gap-5 p-5 border border-[var(--border)] bg-[var(--background)] rounded-xl">
              <div class="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <p class="text-xs text-[var(--text-muted)] mb-0.5">Localisation</p>
                <p class="font-semibold text-[var(--text-main)]">Bafoussam, Cameroun 🇨🇲</p>
              </div>
            </div>
          </div>

          <!-- Availability badge -->
          <div class="flex items-center gap-3">
            <div class="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
              <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span class="text-sm font-medium text-green-600 dark:text-green-400">Disponible pour de nouveaux projets</span>
            </div>
          </div>
        </div>

        <!-- Right: contact form -->
        <div class="scroll-reveal">
          <div class="bg-[var(--background)] border border-[var(--border)] rounded-2xl p-8 shadow-sm">
            <!-- Success / Error toasts -->
            <Transition name="toast">
              <div v-if="showSuccess" class="mb-6 flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-600 dark:text-green-400 text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Message envoyé avec succès. Nous vous répondrons sous 24h.
              </div>
            </Transition>
            <Transition name="toast">
              <div v-if="errorMessage" class="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm font-medium">
                {{ errorMessage }}
              </div>
            </Transition>

            <form @submit.prevent="submitForm" class="space-y-5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="form-field">
                  <label class="form-label">Nom complet *</label>
                  <input v-model="form.name" type="text" placeholder="Jean Dupont" required class="form-input"/>
                </div>
                <div class="form-field">
                  <label class="form-label">Email *</label>
                  <input v-model="form.email" type="email" placeholder="contact@projet.com" required class="form-input"/>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="form-field">
                  <label class="form-label">Téléphone (WhatsApp) *</label>
                  <input v-model="form.phone" type="tel" placeholder="+237 6XX XXX XXX" required class="form-input"/>
                </div>
                <div class="form-field">
                  <label class="form-label">Type de projet</label>
                  <select v-model="form.projectType" class="form-input">
                    <option value="">Choisir...</option>
                    <option value="web">Application Web</option>
                    <option value="mobile">Application Mobile</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="vitrine">Site Vitrine</option>
                    <option value="cloud">Cloud & DevOps</option>
                    <option value="audit">Audit & Conseil</option>
                  </select>
                </div>
              </div>

              <div class="form-field">
                <label class="form-label">Budget estimé</label>
                <select v-model="form.budget" class="form-input">
                  <option value="">Non défini</option>
                  <option value="50-150k FCFA">50 000 – 150 000 FCFA</option>
                  <option value="150-500k FCFA">150 000 – 500 000 FCFA</option>
                  <option value="500k-1M FCFA">500 000 – 1 000 000 FCFA</option>
                  <option value="1M+ FCFA">1 000 000+ FCFA</option>
                </select>
              </div>

              <div class="form-field">
                <label class="form-label">Décrivez votre projet *</label>
                <textarea v-model="form.message" rows="4" required
                  placeholder="Parlez-nous de vos objectifs, contraintes et délais..."
                  class="form-input resize-none"></textarea>
              </div>

              <button type="submit" :disabled="loading"
                class="w-full py-3.5 bg-orange-500 text-white font-semibold rounded-xl hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                <svg v-if="loading" class="animate-spin" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                <span>{{ loading ? 'Envoi en cours...' : 'Envoyer le brief' }}</span>
                <svg v-if="!loading" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import emailjs from 'emailjs-com'

const loading = ref(false)
const showSuccess = ref(false)
const errorMessage = ref('')
const form = ref({ name: '', email: '', phone: '', projectType: '', budget: '', message: '' })

const submitForm = async () => {
  if (loading.value) return
  loading.value = true
  errorMessage.value = ''

  const now = new Date()
  const time = now.toLocaleString('fr-FR', { dateStyle: 'full', timeStyle: 'short' })

  try {
    await emailjs.send(
      'service_4dm2t9a',
      'template_ch05lag',
      { from_name: form.value.name, from_email: form.value.email, phone: form.value.phone, projectType: form.value.projectType, budget: form.value.budget, message: form.value.message, time },
      'JB6T0Rx2FNlGbn1mL'
    )
    showSuccess.value = true
    form.value = { name: '', email: '', phone: '', projectType: '', budget: '', message: '' }
    setTimeout(() => { showSuccess.value = false }, 5000)
  } catch {
    errorMessage.value = 'Une erreur est survenue. Réessayez ou contactez-nous directement.'
    setTimeout(() => { errorMessage.value = '' }, 5000)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.form-field { display: flex; flex-direction: column; gap: 6px; }
.form-label { font-size: 13px; font-weight: 500; color: var(--text-muted); }
.form-input {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 10px 14px;
  font-size: 14px;
  color: var(--text-main);
  outline: none;
  transition: border-color .2s, box-shadow .2s;
  width: 100%;
  font-family: inherit;
}
.form-input::placeholder { color: var(--text-muted); opacity: .6; }
.form-input:focus { border-color: #f39200; box-shadow: 0 0 0 3px rgba(243,146,0,.1); }

.toast-enter-active, .toast-leave-active { transition: opacity .3s ease, transform .3s ease; }
.toast-enter-from, .toast-leave-to { opacity: 0; transform: translateY(-6px); }
</style>
