import * as React from 'react'
import { useFrame } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib'

import { Model } from '../Model'

RectAreaLightUniformsLib.init()

const Environment = () => {
  return (
    <>
      <color attach="background" args="#ffb6c1" />
      <fog attach="fog" args={['lightpink', 60, 140]} />
    </>
  )
}

const Lights = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <spotLight position={[50, 50, -30]} castShadow />
      <pointLight position={[-10, -10, -10]} color="red" intensity={3} />
      <pointLight position={[0, -5, 5]} intensity={0.5} />
      <directionalLight position={[0, -5, 0]} color="red" intensity={2} />
    </>
  )
}

function MovingLight() {
  const ref = React.useRef()
  useFrame(({ clock }) => {
    ref.current.rotation.x = clock.elapsedTime
  })
  return (
    <group ref={ref}>
      <rectAreaLight
        width={15}
        height={100}
        position={[30, 30, -10]}
        intensity={5}
        onUpdate={(self) => self.lookAt(0, 0, 0)}
      />
    </group>
  )
}

export const Scene = () => {
  return (
    <>
      <Environment />
      <Model />
      <OrbitControls />
      <Lights />
      <MovingLight />
    </>
  )
}
