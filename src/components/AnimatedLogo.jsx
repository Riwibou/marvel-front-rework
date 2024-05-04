import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import logoUrl from '../assets/logo.png'


function AnimatedLogo({ }) {
    const mountRef = useRef(null);

    useEffect(() => {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        mountRef.current.appendChild(renderer.domElement);

        // Load texture
        const textureLoader = new THREE.TextureLoader();
        const logoTexture = textureLoader.load(logoUrl);
        const logoMaterial = new THREE.MeshBasicMaterial({ map: logoTexture });
        const logoGeometry = new THREE.PlaneGeometry(5, 5);
        const logoMesh = new THREE.Mesh(logoGeometry, logoMaterial);
        scene.add(logoMesh);

        // Position camera
        camera.position.z = 10;

        // Animation logic
        let frameId;
        const animate = function () {
            frameId = requestAnimationFrame(animate);

            // Rotation
            logoMesh.rotation.y += 0.01;

            // Floating effect
            logoMesh.position.y += Math.sin(Date.now() * 0.001) * 0.01;

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            cancelAnimationFrame(frameId);
            mountRef.current.removeChild(renderer.domElement);
            scene.remove(logoMesh);
            logoMaterial.dispose();
            logoGeometry.dispose();
            renderer.dispose();
        };
    }, [logoUrl]);

    return <div ref={mountRef} style={{ width: '100px', height: '100px' }}></div>;
}

export default AnimatedLogo;
