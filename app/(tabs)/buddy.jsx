import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { View, StyleSheet } from 'react-native'; // React Native View kullanımı
import Icon from 'react-native-vector-icons/FontAwesome'; // FontAwesome'dan mikrofon ikonu
import * as THREE from 'three';
import vertexShader from '../vertexShader';
import fragmentShader from '../fragmentShader';

const AnimatedBlob = () => {
  const meshRef = useRef();
  const blobShaderMaterial = useMemo(() => new THREE.ShaderMaterial({
    uniforms: {
      u_intensity: { value: 1.0 },
      u_time: { value: 0.0 },
    },
    vertexShader,
    fragmentShader,
  }), []);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.u_time.value = clock.getElapsedTime();
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} material={blobShaderMaterial}>
      <Sphere args={[1, 32, 32]} />
    </mesh>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      {/* Blob render edilen Canvas */}
      <Canvas style={styles.canvas}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedBlob />
      </Canvas>


      <View style={styles.microphoneContainer}>
        <Icon name="microphone" size={40} color="#000" />
      </View>
    </View>
  );
}

// Stil dosyası
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  canvas: {
    height: 300, 
    width: 300,
  },
  microphoneContainer: {
    marginTop: -5,  
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
