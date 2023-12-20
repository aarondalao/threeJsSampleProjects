import { SphereGeometry, Group, Mesh, TextureLoader, MathUtils, MeshStandardMaterial } from 'three'

function createMeshGroup() {

    // a group can contain other objects but cannot be seen itself
    const group = new Group;

    const radius = 0.25;
    const widthSegments = 16;
    const heightSegments = 16;

    const textureLoader = new TextureLoader();

    const geometry = new SphereGeometry(
        radius,
        widthSegments,
        heightSegments
    );

    // load a texture
    const texture = textureLoader.load('/assets/textures/hexagon-pavers1-bl/hexagon-pavers1_albedo.png');
    const material = new MeshStandardMaterial({ map: texture });

    const prototypeSphere = new Mesh(geometry, material);

    group.add(prototypeSphere);

    for(let i= 0; i <= 20; i++){
        const sphere = prototypeSphere.clone();

        // position the spheres on around a circle
        sphere.position.x = Math.cos(2 * Math.PI * i);
        sphere.position.y = Math.sin(2 * Math.PI * i);
        // sphere.position.x = i;

        group.add(sphere);
    }

    // every sphere inside the group will be scaled
    group.scale.multiplyScalar(2);

    const radiansPerSecond = MathUtils.degToRad(30);

    group.tick = (delta) => {
        group.rotation.z -= delta * radiansPerSecond;
      };

    return group;
}

export { createMeshGroup };