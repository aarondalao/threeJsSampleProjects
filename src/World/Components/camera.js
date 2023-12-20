import { PerspectiveCamera } from "three";

function createCamera() {
    const camera = new PerspectiveCamera(
        35, // field of view
        1, // aspect ratio
        0.1, // near clipping
        100 // far clipping
    );

    // move the camera view 
    camera.position.set(
        0, // x axis 
        0, // y axis
        10 // z axis
    );
    

    return camera;

}

export { createCamera };