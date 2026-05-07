<template>
  <div class="code-editor" :class="{ 'editor-focused': isFocused }" @click="isFocused = true" @blur.capture="isFocused = false" tabindex="0">
    <!-- Window chrome -->
    <div class="editor-chrome">
      <div class="window-dots">
        <span class="dot dot-red"></span>
        <span class="dot dot-yellow"></span>
        <span class="dot dot-green"></span>
      </div>
      <div class="editor-tabs">
        <div class="tab active-tab">
          <img v-if="langIcon" :src="langIcon" class="tab-icon" />
          <span>{{ filename }}</span>
        </div>
      </div>
      <div class="editor-actions">
        <button class="action-btn" :class="{ copied }" @click.stop="copyAll" :title="copied ? 'Copié !' : 'Copier tout'">
          <template v-if="!copied">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          </template>
          <template v-else>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#28c840" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </template>
        </button>
        <button class="action-btn" @click.stop="$emit('toggle-expand')" title="Agrandir">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
        </button>
      </div>
    </div>

    <!-- Code area (real selectable text) -->
    <div class="editor-body" ref="editorBodyRef">
      <transition name="code-fade" mode="out-in">
        <div :key="filename" class="code-lines">
          <div
            v-for="(line, i) in lines"
            :key="i"
            class="code-line"
            :class="{ 'highlighted': hoveredLine === i }"
            @mouseenter="hoveredLine = i"
            @mouseleave="hoveredLine = -1"
            @click="selectedLine = i"
          >
            <span class="line-num" :class="{ 'line-num-active': selectedLine === i }">{{ i + 1 }}</span>
            <!-- Invisible selectable raw text -->
            <span class="raw-text" :data-raw="line.raw">{{ line.raw }}</span>
            <!-- Visual syntax-highlighted overlay (pointer-events none so selection works on raw) -->
            <span class="highlighted-code" v-html="line.html"></span>
          </div>
        </div>
      </transition>
      <!-- Cursor blink at end -->
      <div class="editor-cursor" :class="{ 'cursor-active': isFocused }"></div>
    </div>

    <!-- Status bar -->
    <div class="editor-statusbar">
      <span class="status-item">
        <span class="status-dot"></span>
        {{ language.toUpperCase() }}
      </span>
      <span class="status-item">{{ lines.length }} lignes</span>
      <span class="status-item status-encoding">UTF-8</span>
      <span class="status-item ml-auto status-branch">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
        main
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const props = defineProps<{
  filename: string
  language: string
  lines: { raw: string; html: string }[]
}>()

defineEmits(['toggle-expand'])

const isFocused  = ref(false)
const copied     = ref(false)
const hoveredLine = ref(-1)
const selectedLine = ref(-1)
const editorBodyRef = ref<HTMLElement | null>(null)

// Reset state on content change
watch(() => props.filename, () => {
  hoveredLine.value  = -1
  selectedLine.value = -1
})

const langIcon = computed(() => {
  // Map language to icon if needed (optional)
  return null
})

const copyAll = async () => {
  const text = props.lines.map(l => l.raw).join('\n')
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    // Fallback for older browsers
    const ta = document.createElement('textarea')
    ta.value = text
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
  }
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}
</script>

<style scoped>
.code-editor {
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  outline: none;
  transition: border-color 0.2s;
}
.code-editor.editor-focused { border-color: #3d4d61; }

/* Chrome */
.editor-chrome {
  background: #161b22;
  border-bottom: 1px solid #30363d;
  display: flex;
  align-items: center;
  padding: 0 12px;
  height: 38px;
  flex-shrink: 0;
  gap: 12px;
}
.window-dots { display: flex; gap: 6px; }
.dot { display: inline-block; width: 12px; height: 12px; border-radius: 50%; }
.dot-red    { background: #ff5f57; }
.dot-yellow { background: #ffbd2e; }
.dot-green  { background: #28c840; }

.editor-tabs { display: flex; flex: 1; overflow: hidden; }
.tab {
  display: flex; align-items: center; gap: 6px;
  padding: 0 14px; height: 38px;
  font-size: 12px; color: #8b949e;
  border-bottom: 2px solid transparent;
  white-space: nowrap;
}
.active-tab { color: #e6edf3; border-bottom-color: #f39200; }
.tab-icon { width: 14px; height: 14px; object-fit: contain; }

.editor-actions { display: flex; gap: 8px; margin-left: auto; }
.action-btn {
  background: transparent; border: none; cursor: pointer;
  color: #8b949e; padding: 4px 6px; border-radius: 4px;
  display: flex; align-items: center; transition: color .2s, background .2s;
}
.action-btn:hover { color: #e6edf3; background: rgba(255,255,255,.05); }
.action-btn.copied { color: #28c840; }

/* Code area */
.editor-body {
  flex: 1;
  overflow-y: auto;
  padding: 16px 0;
  position: relative;
  /* Allow real text selection */
  user-select: text;
  -webkit-user-select: text;
}
.editor-body::-webkit-scrollbar { width: 6px; }
.editor-body::-webkit-scrollbar-track { background: transparent; }
.editor-body::-webkit-scrollbar-thumb { background: #30363d; border-radius: 3px; }

.code-lines { display: flex; flex-direction: column; }

.code-line {
  position: relative;
  display: flex;
  align-items: baseline;
  padding: 0 16px 0 0;
  gap: 0;
  min-height: 1.7em;
  transition: background 0.1s;
}
.code-line:hover, .code-line.highlighted { background: rgba(255,255,255,.03); }

.line-num {
  min-width: 42px;
  text-align: right;
  padding-right: 16px;
  color: #3d444d;
  select: none;
  -webkit-user-select: none;
  font-size: 12px;
  flex-shrink: 0;
  transition: color 0.15s;
}
.line-num-active { color: #8b949e; }

/* The raw text is invisible but selectable */
.raw-text {
  position: absolute;
  left: 58px; right: 16px;
  color: transparent;
  white-space: pre;
  pointer-events: none; /* highlight overlay handles clicks */
  z-index: 1;
}

/* The highlighted overlay — visual only */
.highlighted-code {
  position: relative;
  white-space: pre;
  z-index: 2;
  pointer-events: none;
  color: #e6edf3;
}

/* Make both stacked so the raw (transparent) text is selectable */
.code-line {
  position: relative;
}
.raw-text {
  position: absolute;
  inset: 0;
  left: 58px;
  color: transparent !important;
  background: transparent;
  z-index: 0;
  pointer-events: auto; /* real selection */
  caret-color: transparent;
  white-space: pre;
}
.highlighted-code { pointer-events: none; }

/* Token colours */
:deep(.tok-kw)  { color: #ff7b72; }
:deep(.tok-fn)  { color: #d2a8ff; }
:deep(.tok-str) { color: #a5d6ff; }
:deep(.tok-var) { color: #79c0ff; }
:deep(.tok-num) { color: #79c0ff; }
:deep(.tok-cm)  { color: #8b949e; font-style: normal; }
:deep(.tok-tag) { color: #7ee787; }
:deep(.tok-at)  { color: #ff7b72; }
:deep(.tok-sel) { color: #79c0ff; }

/* Cursor */
.editor-cursor {
  display: inline-block;
  width: 2px; height: 1.1em;
  background: #f39200;
  margin-left: 58px;
  opacity: 0;
  vertical-align: text-bottom;
}
.cursor-active { animation: blink 1.1s step-end infinite; }
@keyframes blink { 0%,100%{opacity:0} 50%{opacity:1} }

/* Status bar */
.editor-statusbar {
  background: #1c2128;
  border-top: 1px solid #30363d;
  display: flex; align-items: center;
  padding: 0 12px; height: 24px;
  gap: 16px; font-size: 11px;
  flex-shrink: 0;
}
.status-item { color: #8b949e; display: flex; align-items: center; gap: 4px; }
.status-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: #28c840;
  display: inline-block;
}
.status-branch { color: #7c83e0; }

/* Transition */
.code-fade-enter-active, .code-fade-leave-active { transition: opacity .25s ease, transform .25s ease; }
.code-fade-enter-from, .code-fade-leave-to { opacity: 0; transform: translateY(4px); }
</style>
