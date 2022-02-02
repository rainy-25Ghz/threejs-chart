// Import stylesheets
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
} from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

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
const loader = new FontLoader();

loader.load('./roboto.typeface.json', function (font) {
  const geometryText = new TextGeometry('Hello three.js!', {
    font: font,
    size: 80,
    height: 5,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 10,
    bevelSize: 8,
    bevelOffset: 0,
    bevelSegments: 5,
  });
  const material = new MeshBasicMaterial({ color: 0x00ff00 });
  const textMesh = new Mesh(geometryText, material);
  scene.add(textMesh);

  camera.position.z = 5;
  function animate() {
    requestAnimationFrame(animate);

    textMesh.rotation.x += 0.01;
    textMesh.rotation.y += 0.01;
    if (camera.position.z < 10 && camera.position.z > 4)
      camera.position.z += 0.01;
    else camera.position.z -= 0.01;

    renderer.render(scene, camera);
  }

  animate();
});

// const geometry = new BoxGeometry();

// const cube = new Mesh(geometry, material);
