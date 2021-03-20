import React from 'react'
import { useLoader } from 'react-three-fiber'
import { MeshPhysicalMaterial, Color } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

const material = new MeshPhysicalMaterial({
  color: new Color('#bb86a1').convertSRGBToLinear(),
  roughness: 0,
  clearcoat: 1,
  clearcoatRoughness: 0,
})

export const Model = () => {
  const { scene } = useLoader(GLTFLoader, 'public/pink-d.glb', (loader) => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
    loader.setDRACOLoader(dracoLoader)
  })

  React.useLayoutEffect(() => {
    scene.children.forEach((child) => {
      if (child.material) {
        child.material = material
      }
    })
  }, [scene])

  return <primitive object={scene} />
}
