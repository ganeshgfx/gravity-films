import React, { useRef } from "react";
import { useCubeTexture, useGLTF } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
export default function Gravity(props: any) {
     const ref = useRef<GroupProps>(null!);
     const ref1 = useRef<Mesh>(null!);
     const ref2 = useRef<Mesh>(null!);

     const { nodes, materials } = useGLTF("/3d-objects/gravity.glb");
     const n = nodes.g1 as Mesh;
     const n1 = nodes.g2 as Mesh;

     useFrame(() => {
          if (ref1.current) {
               ref1.current.rotation.y += 0.01;
               ref1.current.rotation.x = 1.5708;
          }
     });

     useFrame(() => {
          if (ref2.current) {
               ref2.current.rotation.x += 0.01;
               ref2.current.rotation.y += 0.01;
               ref2.current.rotation.z += 0.01;
          }
     });

     const texture = useCubeTexture(
          ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
          { path: "/3d-objects/env/" },
     );
     return (
          <group {...props} ref={ref} scale={1.8} dispose={null}>
               <mesh
                    geometry={n.geometry}
                    ref={ref1}
                    material={materials.Material}
               >
                    <meshStandardMaterial
                         envMap={texture}
                         metalness={1}
                         roughness={0.07}
                    />
               </mesh>
               <mesh
                    geometry={n1.geometry}
                    scale={0.8}
                    ref={ref2}
                    material={materials.Material}
               >
                    <meshStandardMaterial
                         envMap={texture}
                         metalness={1}
                         roughness={0.07}
                    />
               </mesh>
          </group>
     );
}
useGLTF.preload("/3d-objects/gravity.glb");
