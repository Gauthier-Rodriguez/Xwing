




import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Matrix4, Quaternion, Vector3 } from 'three';
import { updateXwingAxis } from './controls'

const x = new Vector3(1, 0, 0);
const y = new Vector3(0, 1, 0);
const z = new Vector3(0, 0, 1);

export const xWingPosition = new Vector3(0, 20, 120);

const delayedRotMatrix = new Matrix4();
const delayedQuaternion = new Quaternion();

export function Xwing(props) {


  const { nodes, materials } = useGLTF('models/xwing.glb');
  const groupRef = useRef();

  useFrame(({ camera }) => {
    updateXwingAxis(x, y, z, xWingPosition, camera);
    const rotMatrix = new Matrix4().makeBasis(x, y, z);

    const matrix = new Matrix4()
      .multiply(new Matrix4().makeTranslation(xWingPosition.x, xWingPosition.y, xWingPosition.z))
      .multiply(rotMatrix);

    groupRef.current.matrixAutoUpdate = false;
    groupRef.current.matrix.copy(matrix);
    groupRef.current.matrixWorldNeedsUpdate = true;

    var quaternionA = new Quaternion().copy(delayedQuaternion);

    var quaternionB = new Quaternion();
    quaternionB.setFromRotationMatrix(rotMatrix);

    var interpolationFactor = 0.175;
    var interpolatedQuaternion = new Quaternion().copy(quaternionA);
    interpolatedQuaternion.slerp(quaternionB, interpolationFactor);
    delayedQuaternion.copy(interpolatedQuaternion);

    delayedRotMatrix.identity();
    delayedRotMatrix.makeRotationFromQuaternion(delayedQuaternion);

    const cameraMatrix = new Matrix4()
      .multiply(new Matrix4().makeTranslation(xWingPosition.x, xWingPosition.y, xWingPosition.z))
      .multiply(delayedRotMatrix)
      .multiply(new Matrix4().makeRotationX(-0.2))
      .multiply(new Matrix4().makeTranslation(0, 0.015, 0.3));

    camera.matrixAutoUpdate = false;
    camera.matrix.copy(cameraMatrix);
    camera.matrixWorldNeedsUpdate = true;

  })


  return (
    <>
      <group ref={groupRef}>
        <group {...props} dispose={null} rotation={[Math.PI / 2, 0, 0]} scale={0.0001}>
          <mesh geometry={nodes.Object_2.geometry} material={materials.propulsin} />
          <mesh geometry={nodes.Object_3.geometry} material={materials.cristales} />
          <mesh geometry={nodes.Object_4.geometry} material={materials.cuerpo}>
            <meshPhysicalMaterial metalness={2} reflectivity={1} color="#D3D3D3" clearcoat={1}/>
            </mesh>
          <mesh geometry={nodes.Object_5.geometry} material={materials.cuerpo}>
            <meshPhysicalMaterial metalness={2} reflectivity={1} color="#D3D3D3" clearcoat={1}/>
            </mesh>
          <mesh geometry={nodes.Object_6.geometry} material={materials.cuerpo}>
            <meshPhysicalMaterial metalness={2} reflectivity={1} color="#D3D3D3" clearcoat={1}/>
            </mesh>
          <mesh geometry={nodes.Object_7.geometry} material={materials.cuerpo}>
            <meshPhysicalMaterial metalness={2} reflectivity={1} color="#D3D3D3" clearcoat={1}/>
            </mesh>
          <mesh geometry={nodes.Object_8.geometry} material={materials.cuerpo}>
            <meshPhysicalMaterial metalness={2} reflectivity={1} color="#D3D3D3" clearcoat={1}/>
            </mesh>
          <mesh geometry={nodes.Object_9.geometry} material={materials.cuerpo}>
            <meshPhysicalMaterial metalness={2} reflectivity={1} color="#D3D3D3" clearcoat={1}/>
            </mesh>
          <mesh geometry={nodes.Object_10.geometry} material={materials.cuerpo}>
            <meshPhysicalMaterial metalness={2} reflectivity={1} color="#D3D3D3" clearcoat={1}/>
            </mesh>
          <mesh geometry={nodes.Object_11.geometry} material={materials.cuerpo}>
            <meshPhysicalMaterial metalness={2} reflectivity={1} color="#D3D3D3" clearcoat={1}/>
            </mesh>
          <mesh geometry={nodes.Object_12.geometry} material={materials.cuerpo}>
            <meshPhysicalMaterial metalness={2} reflectivity={1} color="#D3D3D3" clearcoat={1}/>
            </mesh>
          <mesh geometry={nodes.Object_13.geometry} material={materials.cuerpo}>
            <meshPhysicalMaterial metalness={2} reflectivity={1} color="#D3D3D3" clearcoat={1}/>
            </mesh>
          <mesh geometry={nodes.Object_14.geometry} material={materials.cuerpo}>
            <meshPhysicalMaterial metalness={2} reflectivity={1} color="#D3D3D3" clearcoat={1}/>
          </mesh>
          <mesh geometry={nodes.Object_15.geometry} material={materials.cuerpo}>
            <meshPhysicalMaterial metalness={2} reflectivity={1} color="#D3D3D3" clearcoat={1}/>
          </mesh>
          <mesh geometry={nodes.Object_16.geometry} material={materials.cuerpo}>
            <meshPhysicalMaterial metalness={2} reflectivity={1} color="#D3D3D3" clearcoat={1}/>
          </mesh>
          <mesh geometry={nodes.Object_17.geometry} material={materials.cuerpo}>
            <meshPhysicalMaterial metalness={2} reflectivity={1} color="#D3D3D3" clearcoat={1}/>
          </mesh>
          <mesh geometry={nodes.Object_18.geometry} material={materials.cuerpo}>
            <meshPhysicalMaterial metalness={2} reflectivity={1} color="#D3D3D3" clearcoat={1}/>
          </mesh>
          <mesh geometry={nodes.Object_19.geometry} material={materials.cuerpo}>
            <meshPhysicalMaterial metalness={2} reflectivity={1} color="#D3D3D3"/>
          </mesh>
          <mesh geometry={nodes.Object_22.geometry} material={materials.propulsin}/>
        </group>
      </group>
    </>
  )
}

useGLTF.preload('models/xwing.glb')
