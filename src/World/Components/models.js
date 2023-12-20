/*
     Vector3 is for setting scale and position values
     Euler is for rotaion configurations, format is XYZ. unit is in radians

     Despite the issues we highlighted in this section, rotating object is generally intuitive. Here are a couple of 
     important things to take note of:

    Not all objects can be rotated. For example, the DirectionalLight we introduced in the last chapter cannot be rotated. 
    The light shines from a position, towards a target, and the angle of the light is calculated from the target’s 
    position, not the .rotation property.

    Angles in three.js are specified using radians, not degrees. The only exception is the PerspectiveCamera.fov 
    property which uses degrees to match real-world photography conventions.
*/


import {
    BoxGeometry, WireframeGeometry, Euler, Vector3, Mesh, MeshPhongMaterial,
    MeshBasicMaterial, MeshStandardMaterial, MathUtils, TextureLoader
} from 'three';

const specification1 = {
    color: "purple"
};

const specification2 = {
    color: "red"
};

function createMaterial() {
    // create a texture loader
    const textureLoader = new TextureLoader();

    
        // load a texture
        const texture = textureLoader.load('/assets/textures/hexagon-pavers1-bl/hexagon-pavers1_albedo.png');
        const material = new MeshStandardMaterial({ map: texture });
    
    // const material = new MeshStandardMaterial(spec);

    return material;
}

function createModels(selector) {
    //create a geometry
    const geometry = new BoxGeometry();
    let cube;
    let material;
    const radiansPerSecond = MathUtils.degToRad(30);
    const vector = new Vector3(2, 2, 2);


    if (selector == "Standard") {
        // material = createMaterial(specification1);
        material = createMaterial();

        cube = new Mesh(geometry, material);

        cube.rotation.set(-0.8, -0.2, 0.8);
        // cube.rotation.x = vector.x;
        // cube.rotation.y = vector.y;
        // cube.rotation.z = vector.z;

        cube.scale.set(2, 2, 2);
        // cube.scale.x = vector.x;
        // cube.scale.y = vector.y;
        // cube.scale.z = vector.z;

        cube.position.set(2, 0, 0);
        // cube.position.x = vector.x;
        // cube.position.y = vector.y;
        // cube.position.z = vector.z;

        const radiansPerSecond = MathUtils.degToRad(30);

        cube.tick = (delta) => {
            // increase the models rotation each frame
            cube.rotation.z += radiansPerSecond * delta;
            cube.rotation.y += radiansPerSecond * delta;
            cube.rotation.x += radiansPerSecond * delta;
        }
    }
    else {
        // material = new createMaterial(specification2);
        material = createMaterial();

        // create a mesh container the geometry and material

        cube = new Mesh(geometry, material);

        cube.rotation.set(-0.8, -0.2, 0.8);
        cube.position.set(-2, 0, 0);

        cube.tick = (delta) => {
            // increase the models rotation each frame
            cube.rotation.z -= radiansPerSecond * delta;
            cube.rotation.y += radiansPerSecond * delta;
            cube.rotation.x += radiansPerSecond * delta;
        }
    }

    return cube;
}

export { createModels };