import React, { useRef } from "react";
import { useCubeTexture, useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export default function Gravity(props) {
	const ref = useRef();
	const ref1 = useRef();
	const ref2 = useRef();

	const { nodes, materials } = useGLTF("/3d-objects/gravity.glb");

	useFrame((state, delta) => (ref1.current.rotation.y += 0.01));
	useFrame((state, delta) => (ref1.current.rotation.x = 1.5708));

	useFrame((state, delta) => (ref2.current.rotation.x += 0.01));
	useFrame((state, delta) => (ref2.current.rotation.y += 0.01));
	useFrame((state, delta) => (ref2.current.rotation.z += 0.01));

	const texture = useCubeTexture(
		["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
		{ path: "/3d-objects/env/" }
	);
	return (
		<group {...props} ref={ref} scale={1.8} dispose={null}>
			<mesh
				geometry={nodes.g1.geometry}
				ref={ref1}
				material={materials.Material}
			>
				<meshStandardMaterial envMap={texture} metalness={1} roughness={0.07} />
			</mesh>
			<mesh
				geometry={nodes.g2.geometry}
				scale={0.8}
				ref={ref2}
				material={materials.Material}
			>
				<meshStandardMaterial envMap={texture} metalness={1} roughness={0.07} />
			</mesh>
		</group>
	);
}
useGLTF.preload("/3d-objects/gravity.glb");
