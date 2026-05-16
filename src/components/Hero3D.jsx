import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Link } from 'react-router-dom'

export default function Hero3D() {
  const containerRef = useRef(null)
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const rendererRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x1a1a1a)
    scene.fog = new THREE.Fog(0x1a1a1a, 100, 1000)

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.set(5, 3, 8)
    camera.lookAt(0, 0, 0)

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFShadowShadowMap
    containerRef.current.appendChild(renderer.domElement)

    sceneRef.current = scene
    cameraRef.current = camera
    rendererRef.current = renderer

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(10, 15, 10)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 2048
    directionalLight.shadow.mapSize.height = 2048
    directionalLight.shadow.camera.far = 50
    directionalLight.shadow.camera.left = -20
    directionalLight.shadow.camera.right = 20
    directionalLight.shadow.camera.top = 20
    directionalLight.shadow.camera.bottom = -20
    scene.add(directionalLight)

    const pointLight = new THREE.PointLight(0xd4a574, 0.5)
    pointLight.position.set(-10, 8, 5)
    scene.add(pointLight)

    // Floor
    const floorGeometry = new THREE.PlaneGeometry(20, 20)
    const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x2d2d2d, roughness: 0.8 })
    const floor = new THREE.Mesh(floorGeometry, floorMaterial)
    floor.rotation.x = -Math.PI / 2
    floor.receiveShadow = true
    scene.add(floor)

    // Barber chair - seat
    const seatGeometry = new THREE.CylinderGeometry(0.8, 0.8, 0.3, 32)
    const seatMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513, metalness: 0.1, roughness: 0.7 })
    const seat = new THREE.Mesh(seatGeometry, seatMaterial)
    seat.position.y = 0.5
    seat.castShadow = true
    seat.receiveShadow = true
    scene.add(seat)

    // Barber chair - backrest
    const backrestGeometry = new THREE.BoxGeometry(0.8, 1.2, 0.2)
    const backrest = new THREE.Mesh(backrestGeometry, seatMaterial)
    backrest.position.set(0, 1.3, -0.4)
    backrest.castShadow = true
    backrest.receiveShadow = true
    scene.add(backrest)

    // Barber chair - base
    const baseGeometry = new THREE.CylinderGeometry(1, 1.2, 0.2, 32)
    const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.8, roughness: 0.2 })
    const base = new THREE.Mesh(baseGeometry, baseMaterial)
    base.position.y = 0.1
    base.castShadow = true
    base.receiveShadow = true
    scene.add(base)

    // Mirror
    const mirrorGeometry = new THREE.PlaneGeometry(3, 4)
    const mirrorMaterial = new THREE.MeshStandardMaterial({ color: 0xc0c0c0, metalness: 1, roughness: 0.1 })
    const mirror = new THREE.Mesh(mirrorGeometry, mirrorMaterial)
    mirror.position.set(0, 2, -3)
    mirror.castShadow = true
    mirror.receiveShadow = true
    scene.add(mirror)

    // Wash basin - bowl
    const basinGeometry = new THREE.CylinderGeometry(0.5, 0.6, 0.3, 32)
    const basinMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.3, roughness: 0.4 })
    const basin = new THREE.Mesh(basinGeometry, basinMaterial)
    basin.position.set(-3, 0.5, 0)
    basin.castShadow = true
    basin.receiveShadow = true
    scene.add(basin)

    // Wash basin - stand
    const standGeometry = new THREE.CylinderGeometry(0.1, 0.15, 1, 32)
    const stand = new THREE.Mesh(standGeometry, baseMaterial)
    stand.position.set(-3, 0.5, 0)
    stand.castShadow = true
    stand.receiveShadow = true
    scene.add(stand)

    // Second chair
    const seat2 = seat.clone()
    seat2.position.set(3, 0.5, 0)
    scene.add(seat2)

    const backrest2 = backrest.clone()
    backrest2.position.set(3, 1.3, -0.4)
    scene.add(backrest2)

    const base2 = base.clone()
    base2.position.set(3, 0.1, 0)
    scene.add(base2)

    // Mouse controls
    let isDragging = false
    let previousMousePosition = { x: 0, y: 0 }

    containerRef.current.addEventListener('mousedown', (e) => {
      isDragging = true
      previousMousePosition = { x: e.clientX, y: e.clientY }
    })

    containerRef.current.addEventListener('mousemove', (e) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x
        const deltaY = e.clientY - previousMousePosition.y

        const radius = Math.sqrt(camera.position.x ** 2 + camera.position.z ** 2)
        const angle = Math.atan2(camera.position.z, camera.position.x) + deltaX * 0.01

        camera.position.x = radius * Math.cos(angle)
        camera.position.z = radius * Math.sin(angle)
        camera.position.y = Math.max(0.5, camera.position.y + deltaY * 0.01)
        camera.lookAt(0, 0.5, 0)

        previousMousePosition = { x: e.clientX, y: e.clientY }
      }
    })

    containerRef.current.addEventListener('mouseup', () => {
      isDragging = false
    })

    containerRef.current.addEventListener('wheel', (e) => {
      e.preventDefault()
      const currentRadius = Math.sqrt(camera.position.x ** 2 + camera.position.z ** 2)
      const newRadius = Math.min(25, Math.max(3, currentRadius + e.deltaY * 0.01))
      const angle = Math.atan2(camera.position.z, camera.position.x)

      camera.position.x = newRadius * Math.cos(angle)
      camera.position.z = newRadius * Math.sin(angle)
      camera.lookAt(0, 0.5, 0)
    })

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }
    animate()

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="w-full h-screen relative mt-16"
        style={{ minHeight: 'calc(100vh - 64px)' }}
      >
        <div className="absolute top-10 left-10 text-white z-10">
          <h1 className="text-4xl font-bold text-amber-500 mb-2">J S Ramesh Hair Salon</h1>
          <p className="text-gray-300">Premium Barbershop Experience in Bangalore</p>
        </div>

        <div className="absolute bottom-10 left-10 right-10 z-10">
          <div className="max-w-md">
            <p className="text-gray-300 mb-4">🖱️ Drag to rotate • 🔄 Scroll to zoom</p>
            <div className="flex gap-4">
              <Link
                to="/booking"
                className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition"
              >
                Book Now
              </Link>
              <Link
                to="/services"
                className="px-6 py-3 border-2 border-amber-600 hover:bg-amber-600 hover:bg-opacity-10 text-amber-600 font-semibold rounded-lg transition"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}