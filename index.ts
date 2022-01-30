// Import stylesheets
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
} from 'three';

import './style.css';
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new WebGLRenderer({ canvas, antialias: true });
const geometry = new BoxGeometry();
const material = new MeshBasicMaterial({ color: 0x00ff00 });
const cube = new Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  if (camera.position.z < 10 && camera.position.z > 4)
    camera.position.z += 0.01;
  else camera.position.z -= 0.01;

  renderer.render(scene, camera);
}

animate();
