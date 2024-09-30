import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { View, StyleSheet } from 'react-native'; // React Native View kullanımı
import Icon from 'react-native-vector-icons/FontAwesome'; // FontAwesome'dan mikrofon ikonu
import * as THREE from 'three';
import vertexShader from '../vertexShader';
import fragmentShader from '../fragmentShader';
import { MathUtils } from "three";

const AnimatedBlob = () => {
const mesh = useRef();
  const blobShaderMaterial = useMemo(() => new THREE.ShaderMaterial({
    uniforms: {
      u_intensity: { value: 0.3 },
      u_time: { value: 0.0 },

    },
    vertexShader: vertexShader, 
    fragmentShader: fragmentShader,
    transparent: false,
  }), []);

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      mesh.current.material.uniforms.u_time.value =
        0.6 * clock.getElapsedTime();

      mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        mesh.current.material.uniforms.u_intensity.value,
       0.10,
        0.1
      );
    }
  });

  return (
    <mesh ref={mesh} material={blobShaderMaterial}>
      <sphereGeometry args={[1, 35, 35]} />
    </mesh>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Canvas  style={styles.canvas}>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={1}/>
        <AnimatedBlob />
      </Canvas>
      <View style={styles.microphoneContainer}>
        <Icon name="microphone" size={40} color="#000" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateY: -130 }], // Move the container 30 units up
    },
  canvas: {
    height: 300, 
    width: 300,
    marginBottom: 30,
  },
  microphoneContainer: {
    marginTop: 10,  
    marginBottom: -15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
