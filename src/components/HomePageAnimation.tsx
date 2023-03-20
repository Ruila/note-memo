import React, {useEffect, useRef} from 'react'
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {FontLoader} from "three/examples/jsm/loaders/FontLoader";
import {TextGeometry} from "three/examples/jsm/geometries/TextGeometry";
import useBaseUrl from "@docusaurus/useBaseUrl";

export const HomePageAnimation = () => {
    const canvasRef = useRef();
    let fontFileUrl = `${window.location.origin}${useBaseUrl('/helvetiker_bold.typeface.json')}`
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            85,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        const renderer = new THREE.WebGLRenderer({canvas: canvasRef.current});
        const controls = new OrbitControls( camera, renderer.domElement );

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0xffffff, 1);

        const geometry = new THREE.SphereGeometry(10, 60, 60);
        const material = new THREE.PointsMaterial({color: 0x000, sizeAttenuation: false, size: 2});
        const sphere = new THREE.Points(geometry, material);
        let txtMesh: THREE.Mesh<TextGeometry, THREE.MeshBasicMaterial>;
        const loader = new FontLoader();

        loader.load(fontFileUrl, function ( font ) {
            const textGeometry = new TextGeometry( 'To be continued', {
                font: font,
                size: 1,
                height: 0,
            } );
            const txtMater = new THREE.MeshBasicMaterial({color: 0x000000});
            txtMesh = new THREE.Mesh(textGeometry, txtMater);
            textGeometry.computeBoundingBox()
            textGeometry.center()
            txtMesh.position.z = 0
            scene.add(txtMesh);
        } );
        scene.add(sphere)
        camera.position.z = 15;
        function animate() {
            sphere.rotation.x += 0.005;
            sphere.rotation.y += 0.01;
            controls.update();
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
            txtMesh.geometry.dispose();
            txtMesh.material.dispose();
        };
    }, []);

    return <canvas ref={canvasRef}/>
}
