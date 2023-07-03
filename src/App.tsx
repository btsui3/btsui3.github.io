import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as THREE from 'three'

function App() {
  const [count, setCount] = useState(0)

  // Setup

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



  // Avatar

  const benTexture = new THREE.TextureLoader().load('./assets/ben.png');

  const ben = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: benTexture }));
  ben.position.z = -5;
  ben.position.x = 2;
  scene.add(ben);
  function moveCamera() {

    ben.rotation.y += 0.01;
    ben.rotation.z += 0.01;

    // camera.position.z = t * -0.01;
    // camera.position.x = t * -0.0002;
    // camera.rotation.y = t * -0.0002;
  }

  document.body.onscroll = moveCamera;
  moveCamera();
  // Animation Loop

  function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;


    // controls.update();

    renderer.render(scene, camera);
  }

  animate();


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>This is Ben testing in production</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          This is a work in progress
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
