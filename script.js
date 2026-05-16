// Three.js 3D Scene
let scene, camera, renderer;
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };

function initThreeJS() {
    const container = document.getElementById('canvas-container');
    
    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a1a);
    scene.fog = new THREE.Fog(0x1a1a1a, 100, 1000);
    
    // Camera
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(5, 3, 8);
    camera.lookAt(0, 0, 0);
    
    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowShadowMap;
    container.appendChild(renderer.domElement);
    
    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 15, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);
    
    const pointLight = new THREE.PointLight(0xd4a574, 0.5);
    pointLight.position.set(-10, 8, 5);
    scene.add(pointLight);
    
    // Floor
    const floorGeometry = new THREE.PlaneGeometry(20, 20);
    const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x2d2d2d, roughness: 0.8 });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);
    
    // Barber Chair 1
    createBarberChair(0, 0, 0);
    
    // Barber Chair 2
    createBarberChair(3, 0, 0);
    
    // Mirror
    const mirrorGeometry = new THREE.PlaneGeometry(3, 4);
    const mirrorMaterial = new THREE.MeshStandardMaterial({ color: 0xc0c0c0, metalness: 1, roughness: 0.1 });
    const mirror = new THREE.Mesh(mirrorGeometry, mirrorMaterial);
    mirror.position.set(0, 2, -3);
    mirror.castShadow = true;
    mirror.receiveShadow = true;
    scene.add(mirror);
    
    // Wash Basin
    const basinGeometry = new THREE.CylinderGeometry(0.5, 0.6, 0.3, 32);
    const basinMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.3, roughness: 0.4 });
    const basin = new THREE.Mesh(basinGeometry, basinMaterial);
    basin.position.set(-3, 0.5, 0);
    basin.castShadow = true;
    basin.receiveShadow = true;
    scene.add(basin);
    
    // Mouse Events
    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });
    
    container.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const deltaX = e.clientX - previousMousePosition.x;
            const deltaY = e.clientY - previousMousePosition.y;
            
            const radius = Math.sqrt(camera.position.x ** 2 + camera.position.z ** 2);
            const angle = Math.atan2(camera.position.z, camera.position.x) + deltaX * 0.01;
            
            camera.position.x = radius * Math.cos(angle);
            camera.position.z = radius * Math.sin(angle);
            camera.position.y = Math.max(0.5, camera.position.y + deltaY * 0.01);
            camera.lookAt(0, 0.5, 0);
            
            previousMousePosition = { x: e.clientX, y: e.clientY };
        }
    });
    
    container.addEventListener('mouseup', () => {
        isDragging = false;
    });
    
    container.addEventListener('wheel', (e) => {
        e.preventDefault();
        const currentRadius = Math.sqrt(camera.position.x ** 2 + camera.position.z ** 2);
        const newRadius = Math.min(25, Math.max(3, currentRadius + e.deltaY * 0.01));
        const angle = Math.atan2(camera.position.z, camera.position.x);
        
        camera.position.x = newRadius * Math.cos(angle);
        camera.position.z = newRadius * Math.sin(angle);
        camera.lookAt(0, 0.5, 0);
    });
    
    // Handle Resize
    window.addEventListener('resize', () => {
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
    });
    
    // Animation Loop
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();
}

function createBarberChair(x, y, z) {
    const seatGeometry = new THREE.CylinderGeometry(0.8, 0.8, 0.3, 32);
    const seatMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513, metalness: 0.1, roughness: 0.7 });
    const seat = new THREE.Mesh(seatGeometry, seatMaterial);
    seat.position.set(x, y + 0.5, z);
    seat.castShadow = true;
    scene.add(seat);
    
    const backrestGeometry = new THREE.BoxGeometry(0.8, 1.2, 0.2);
    const backrest = new THREE.Mesh(backrestGeometry, seatMaterial);
    backrest.position.set(x, y + 1.3, z - 0.4);
    backrest.castShadow = true;
    scene.add(backrest);
    
    const baseGeometry = new THREE.CylinderGeometry(1, 1.2, 0.2, 32);
    const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.8, roughness: 0.2 });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.set(x, y + 0.1, z);
    base.castShadow = true;
    scene.add(base);
}

// Navigation
function scrollTo(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
}

// Update active nav link
window.addEventListener('scroll', () => {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    links.forEach(link => link.classList.remove('active'));
    
    sections.forEach(section => {
        const top = section.offsetTop - 100;
        const height = section.clientHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
            const id = section.getAttribute('id');
            const link = document.querySelector(`a[href="#${id}"]`);
            if (link) link.classList.add('active');
        }
    });
});

// Booking
function handleBooking(event) {
    event.preventDefault();
    const message = document.getElementById('booking-message');
    message.style.display = 'block';
    event.target.reset();
    setTimeout(() => {
        message.style.display = 'none';
    }, 3000);
}

// Gallery Modal
function openModal(element) {
    const modal = document.getElementById('modal');
    const img = element.querySelector('img');
    const modalImg = document.getElementById('modal-img');
    modalImg.src = img.src;
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initThreeJS();
});