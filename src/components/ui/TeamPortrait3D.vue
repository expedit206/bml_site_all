<template>
  <div
    ref="container"
    class="w-full h-full relative cursor-crosshair overflow-hidden rounded-xl"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  ></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as THREE from 'three'

const props = defineProps<{
  src: string
}>()

const container = ref<HTMLElement | null>(null)
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let mesh: THREE.Mesh
let animationId: number

// Target rotation based on mouse
const targetRotation = { x: 0, y: 0 }
// Current rotation (eased)
const currentRotation = { x: 0, y: 0 }

const initThree = () => {
  if (!container.value) return

  const width = container.value.clientWidth
  const height = container.value.clientHeight

  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
  camera.position.z = 3

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container.value.appendChild(renderer.domElement)

  // Load texture
  const textureLoader = new THREE.TextureLoader()
  textureLoader.load(props.src, (texture) => {
    // Adjust aspect ratio
    const imgAspect = texture.image.width / texture.image.height
    const planeAspect = width / height

    // We want the image to cover the plane (similar to object-fit: cover)
    if (imgAspect > planeAspect) {
      texture.repeat.set(planeAspect / imgAspect, 1)
      texture.offset.set((1 - planeAspect / imgAspect) / 2, 0)
    } else {
      texture.repeat.set(1, imgAspect / planeAspect)
      texture.offset.set(0, (1 - imgAspect / planeAspect) / 2)
    }

    const geometry = new THREE.PlaneGeometry(2.5, 2.5 * (height/width), 32, 32)
    
    // Shader material for a slight wave/glitch effect
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: texture },
        uTime: { value: 0 },
        uHover: { value: 0 }
      },
      vertexShader: `
        uniform float uTime;
        uniform float uHover;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 pos = position;
          // Add a subtle wave on Z axis based on time and hover state
          pos.z += sin(pos.x * 5.0 + uTime * 2.0) * 0.1 * uHover;
          pos.z += cos(pos.y * 5.0 + uTime * 2.0) * 0.1 * uHover;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        uniform float uHover;
        varying vec2 vUv;
        void main() {
          vec4 texColor = texture2D(uTexture, vUv);
          
          // Slight color shift or brightness increase on hover
          vec3 color = texColor.rgb + vec3(0.1) * uHover;
          
          gl_FragColor = vec4(color, texColor.a);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide
    })

    mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
  })

  animate()
}

const onMouseMove = (event: MouseEvent) => {
  if (!container.value) return
  const rect = container.value.getBoundingClientRect()
  const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  const y = -((event.clientY - rect.top) / rect.height) * 2 + 1
  
  targetRotation.y = x * 0.5 // Rotate around Y axis
  targetRotation.x = y * 0.5 // Rotate around X axis
  
  if (mesh && mesh.material instanceof THREE.ShaderMaterial) {
    // Easing the hover value up
    mesh.material.uniforms.uHover.value = Math.min(mesh.material.uniforms.uHover.value + 0.1, 1.0)
  }
}

const onMouseLeave = () => {
  targetRotation.x = 0
  targetRotation.y = 0
}

const animate = () => {
  animationId = requestAnimationFrame(animate)

  // Smooth easing for rotation
  currentRotation.x += (targetRotation.x - currentRotation.x) * 0.1
  currentRotation.y += (targetRotation.y - currentRotation.y) * 0.1

  if (mesh) {
    mesh.rotation.x = currentRotation.x
    mesh.rotation.y = currentRotation.y
    
    // Decrease hover value when not moving mouse
    if (mesh.material instanceof THREE.ShaderMaterial) {
      if (targetRotation.x === 0 && targetRotation.y === 0) {
        mesh.material.uniforms.uHover.value = Math.max(mesh.material.uniforms.uHover.value - 0.05, 0.0)
      }
      mesh.material.uniforms.uTime.value += 0.05
    }
  }

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
