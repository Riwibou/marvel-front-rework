import { useEffect } from "react";
import * as THREE from "three";
import marvelLogo from "./logo.png"; // Importez votre image PNG du logo Marvel
import marvel from "../../assets/marvel2.jpeg";

const Logo = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x243952); // Définir un fond rouge

    const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(200, 100);
    const container = document.getElementById("logo-container");
    container.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(4, 2);

    // Chargement de la texture du logo Marvel
    const textureLoader = new THREE.TextureLoader();
    // const texture = textureLoader.load(marvelLogo);
    const texture = textureLoader.load(marvel);

    // Création du matériau avec la texture du logo Marvel
    const material = new THREE.MeshBasicMaterial({ map: texture });

    const logo = new THREE.Mesh(geometry, material);
    scene.add(logo);

    const animate = () => {
      requestAnimationFrame(animate);
      logo.rotation.x += 0.01;
      logo.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      scene.remove(logo);
      renderer.domElement.remove();
    };
  }, []);

  return <div id="logo-container" className="header-logo ml-10" style={{ width: "120px", height: "100px", borderRadius: "40px" }}></div>;
};

export default Logo;
