import { SphereEnv} from "./SphereEnv";
import { Environment, PerspectiveCamera } from '@react-three/drei';
import { EffectComposer, HueSaturation} from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { Xwing } from "./Xwing";
import { MotionBlur } from './MotionBlur';
import { SolarSystem } from "./SolarSystem";

function App() {

  return (
    <>
   
      <SphereEnv/>
      <Environment background={false} files={"textures/starmap.hdr"}/>
      <PerspectiveCamera makeDefault position={[0, 3, 10]} />
      <SolarSystem/>
      <Xwing/>
      <directionalLight
        castShadow
        color={"#f3d29a"}
        intensity={5}
        position={[10, 5, 4]}
        shadow-bias={-0.0005}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.01}
        shadow-camera-far={20}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
        shadow-camera-left={-6.2}
        shadow-camera-right={6.4}
      />
        <EffectComposer>
        <MotionBlur />
        <HueSaturation
          blendFunction={BlendFunction.NORMAL} // blend mode
          hue={-0.15} // hue in radians
          saturation={0.1} // saturation in radians
        />
      </EffectComposer>
    </>
  )
}

export default App
