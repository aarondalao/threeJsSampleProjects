// import all components
import { createScene } from './Components/scene';
import { createCamera } from './Components/camera';
import { createModels } from './Components/models';
import { createLights } from './Components/lights';

// import all systems
import { createRenderer } from './Systems/renderer';
import { Resizer } from './Systems/Resizer';
import { Loop } from './Systems/Loop';
import { createControls } from './Systems/controls';

let camera;
let renderer;
let scene;
let loop;

function cutToNewCameraPosition(camera, controls) {
    // move the camera
    camera.position.set(1, 2, 3);

    // and/or rotate the camera
    camera.rotation.set(0.5, 0, 0);

    // then tell the controls to update
    controls.update();
}

class World {
    constructor(container) {

        camera = createCamera();
        renderer = createRenderer();
        scene = createScene();

        container.append(renderer.domElement);

        loop = new Loop(camera, scene, renderer);

        const controls = new createControls(camera, renderer.domElement);

        const cube1 = createModels("Standard");
        const cube2 = createModels("Phong");
        const { mainLight, ambientLight } = createLights();

        // this will point the control at an oject by copying the object's position
        // controls.target.copy(cube1.position);

        // manually position the camera while retaining control
        // cutToNewCameraPosition(camera, controls);

        // uncomment this to smoothen transion to a new camera position WHEN ANIMATING
        // CAMERA OR THE TARGET
        // controls.enabled = false;
        

        loop.updatables.push(cube1, cube2, controls);
        // loop.updatables.push( controls);

        scene.add(cube1, cube2, mainLight, ambientLight);

        console.log(scene.children);

        const resizer = new Resizer(container, camera, renderer);

        // resizer.onResize = () => {
        //     this.render();
        // }

        // controls.addEventListener('change', () => {
        //     renderer.render(scene, camera)
        // });


        controls.addEventListener('change', () => {
            this.render();
        });
    }

    render() {
        renderer.render(scene, camera);
    }

    start() {
        loop.start();
    }

    stop() {
        loop.stop();
    }

}

export { World };