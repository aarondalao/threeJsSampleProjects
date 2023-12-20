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
    BoxGeometry, WireframeGeometry, SphereGeometry, Euler, Vector3, Mesh, MeshPhongMaterial,
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

function createCube() {
    //create a geometry
    const geometry = new BoxGeometry();


    const vector = new Vector3(2, 2, 2);
    // material = createMaterial(specification1);
    const material = createMaterial();

    const cube = new Mesh(geometry, material);

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

    return cube;
}

function createSphere() {
    const radius = 0.5;
    const widthSegments = 20;
    const heightSegments = 20;

    const geometry = new SphereGeometry(radius, widthSegments, heightSegments);
    const material = new createMaterial();

    const sphere = new Mesh(geometry, material);

    sphere.position.set(-2, 0, 0);

    const radiansPerSecond = MathUtils.degToRad(30);

    sphere.tick = (delta) => {
        // increase the models rotation each frame
        sphere.rotation.z += radiansPerSecond * delta;
        sphere.rotation.y += radiansPerSecond * delta;
        sphere.rotation.x += radiansPerSecond * delta;
    }

    return sphere;
}

function createModels() {
    const model1 = createCube();

    const model2 = createSphere();

    return { model1, model2 };
}

export { createModels };