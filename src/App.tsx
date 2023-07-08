import './App.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import benSrc from './assets/Ben.png';
import moonSrc from './assets/moon.jpg';
import normalSrc from './assets/normal.jpg';
function App() {

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg') || undefined,
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.setZ(30);
  camera.position.setX(-3);

  renderer.render(scene, camera);

  // Torus

  const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
  const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
  const torus = new THREE.Mesh(geometry, material);

  scene.add(torus);

  // Lights

  const pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(5, 5, 5);

  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(pointLight, ambientLight);

  const controls = new OrbitControls(camera, renderer.domElement);

  function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3)
      .fill(null)
      .map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);
  }

  Array(200).fill(null).forEach(addStar);

  // Avatar
  const benTexture = new THREE.TextureLoader().load(benSrc);
  const ben = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: benTexture }));

  scene.add(ben);

  const moonTexture = new THREE.TextureLoader().load(moonSrc);
  const normalTexture = new THREE.TextureLoader().load(normalSrc);

  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({
      map: moonTexture,
      normalMap: normalTexture,
    })
  );

  scene.add(moon);

  moon.position.z = 30;
  moon.position.setX(-10);

  ben.position.z = -5;
  ben.position.x = 2;

  function moveCamera() {
    ben.rotation.y += 0.01;
    ben.rotation.z += 0.01;
  }

  document.body.onscroll = moveCamera;
  moveCamera();

  function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    controls.update();

    renderer.render(scene, camera);
  }

  animate();

  return (<div></div>)
}

export default App
