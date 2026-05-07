<template>
  <div ref="container" class="w-full h-16 pointer-events-none"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as THREE from 'three'

const props = defineProps<{
  techs: string[]
}>()

const container = ref<HTMLElement | null>(null)
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let animationId: number
const meshes: THREE.Mesh[] = []

// Map technologies to 3D primitive configurations
const getTechShape = (tech: string): { geom: THREE.BufferGeometry, color: number } => {
  const t = tech.toLowerCase()
  if (t.includes('vue')) return { geom: new THREE.TetrahedronGeometry(1), color: 0x42b883 }
  if (t.includes('react')) return { geom: new THREE.TorusGeometry(0.7, 0.2, 16, 100), color: 0x61dafb }
  if (t.includes('laravel')) return { geom: new THREE.BoxGeometry(1.2, 1.2, 1.2), color: 0xff2d20 }
  if (t.includes('node')) return { geom: new THREE.CylinderGeometry(0.6, 0.6, 1.2, 32), color: 0x339933 }
  if (t.includes('wordpress')) return { geom: new THREE.SphereGeometry(0.8, 32, 32), color: 0x21759b }
  if (t.includes('tailwind')) return { geom: new THREE.TorusKnotGeometry(0.5, 0.2, 64, 8), color: 0x06b6d4 }
  if (t.includes('mysql')) return { geom: new THREE.CylinderGeometry(0.8, 0.8, 0.6, 32), color: 0x4479a1 }
  if (t.includes('inertia')) return { geom: new THREE.DodecahedronGeometry(0.8), color: 0x9553e9 }
  
  // Default shape
  return { geom: new THREE.OctahedronGeometry(0.8), color: 0xf39200 }
}

const initThree = () => {
  if (!container.value) return

  const width = container.value.clientWidth
  const height = container.value.clientHeight

  scene = new THREE.Scene()
  
  // Transparent background
  scene.background = null

  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
  camera.position.z = 5

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container.value.appendChild(renderer.domElement)

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
  scene.add(ambientLight)
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8)
  dirLight.position.set(5, 5, 5)
  scene.add(dirLight)
  const backLight = new THREE.DirectionalLight(0xffffff, 0.3)
  backLight.position.set(-5, -5, -5)
  scene.add(backLight)

  createMeshes()
  animate()
}

const createMeshes = () => {
  // Clear existing
  meshes.forEach(m => {
    scene.remove(m)
    m.geometry.dispose()
    ;(m.material as THREE.Material).dispose()
  })
  meshes.length = 0

  const count = props.techs.length
  const spacing = 2.5
  const startX = -((count - 1) * spacing) / 2

  props.techs.forEach((tech, i) => {
    const shape = getTechShape(tech)
    const material = new THREE.MeshPhysicalMaterial({
      color: shape.color,
      metalness: 0.2,
      roughness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.9
    })

    const mesh = new THREE.Mesh(shape.geom, material)
    mesh.position.x = startX + i * spacing
    
    // Initial rotation offset
    mesh.rotation.x = Math.random() * Math.PI
    mesh.rotation.y = Math.random() * Math.PI

    scene.add(mesh)
    meshes.push(mesh)
  })
}

const animate = () => {
  animationId = requestAnimationFrame(animate)

  meshes.forEach((mesh, i) => {
    mesh.rotation.x += 0.01 + (i * 0.002)
    mesh.rotation.y += 0.015 - (i * 0.001)
    // Subtle float
    mesh.position.y = Math.sin(Date.now() * 0.002 + i) * 0.2
  })

  renderer.render(scene, camera)
}

const handleResize = () => {
  if (!container.value || !camera || !renderer) return
  const width = container.value.clientWidth
  const height = container.value.clientHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

watch(() => props.techs, () => {
  if (scene) createMeshes()
}, { deep: true })

onMounted(() => {
  initThree()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (animationId) cancelAnimationFrame(animationId)
  if (renderer && container.value) {
    container.value.removeChild(renderer.domElement)
    renderer.dispose()
  }
})
</script>
