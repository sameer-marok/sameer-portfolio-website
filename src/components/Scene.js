import { useFrame } from '@react-three/fiber'
import { TorusKnot } from '@react-three/drei'
import { useRef } from 'react'

export default function Scene() {
  const knotRef = useRef()

  // useFrame runs on every rendered frame
  useFrame((state, delta) => {
    // Continuous rotation on its own axis
    knotRef.current.rotation.y += delta * 0.5; // Rotate on Y-axis
    knotRef.current.rotation.x += delta * 0.2; // Rotate on X-axis

    // Gently move towards the mouse position for a subtle hover effect
    const targetX = state.pointer.x * 0.5;
    const targetY = state.pointer.y * 0.5;
    knotRef.current.position.x += (targetX - knotRef.current.position.x) * 0.05;
    knotRef.current.position.y += (targetY - knotRef.current.position.y) * 0.05;
  })

  return (
    <>
      <TorusKnot ref={knotRef} args={[0.9, 0.35, 256, 32]}>
          {/* A "normal" material shows geometry with colors, great for abstract shapes */}
          <meshNormalMaterial />
      </TorusKnot>
    </>
  )
}