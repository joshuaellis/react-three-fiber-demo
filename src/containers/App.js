import * as React from 'react'
import { Canvas } from 'react-three-fiber'

import { Scene } from '../components/Scene'

export const App = () => {
  return (
    <Canvas concurrent shadowMap pixelRatio={[1, 2]} camera={{ position: [70, 6, 0], fov: 20 }}>
      <React.Suspense fallback={null}>
        <Scene />
      </React.Suspense>
    </Canvas>
  )
}
