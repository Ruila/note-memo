import React, {useEffect, useRef} from 'react'
import * as THREE from 'three';

export const HomePageAnimation = () => {
    const canvasRef = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            85,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        const renderer = new THREE.WebGLRenderer({canvas: canvasRef.current});

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0xffffff, 1);

        const geometry = new THREE.SphereGeometry(5, 30, 30);
        const material = new THREE.PointsMaterial({color: 0x000, sizeAttenuation: false, size: 1});
        const sphere = new THREE.Points(geometry, material);
        scene.add(sphere);
        camera.position.z = 8;

        function animate() {
            // sphere.rotation.x += 0.005;
            sphere.rotation.y += 0.005;
            requestAnimationFrame(animate);
            renderer.render(scene, camera)
        }

        animate();

        // Cleanup on unmount, otherwise stuff will linger in GPU
        return () => {
            renderer.forceContextLoss();
            renderer.dispose();
            sphere.geometry.dispose();
            sphere.material.dispose();
        };
    }, []);

    return <div style={{display: "flex", alignItems: "center", justifyContent: "center", minHeight: "600px"}}>
        <div className="to-be-continued">To Be Continued</div>
        <canvas ref={canvasRef} style={{position: "absolute", zIndex: "0"}}/>
    </div>;
}
