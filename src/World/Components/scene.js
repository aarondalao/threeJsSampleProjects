import { Scene, Color } from 'three';

function createScene() {
    const scene = new Scene();

    // set the scenes background to green
    scene.background = new Color("skyblue")

    return scene;
}

export { createScene };