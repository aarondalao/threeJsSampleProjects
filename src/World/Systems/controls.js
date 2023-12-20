import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function createControls(camera, canvas) {
    const controls = new OrbitControls(camera, canvas);

    // this does not work if we're rendering frames on demand
    controls.enableDamping = true;

    // this will move the target to a new position
    // controls.target.set(1, 2, 3);

    controls.tick = () => controls.update();

    configureControls(controls);

    // Save the state of the controller
    // controls.saveState();

    // reset the state of the controller
    // controls.reset();

    // dispose the saved controls
    // controls.dispose();

    return controls;
}

function configureControls (ctrls) {

    // enable or disable the control entirely
    // ctrls.enabled = true;

    // or disable any of the three modes of control individually
    // ctrls.enableRotate = false;
    // ctrls.enableZoom = false;
    // ctrls.enablePan = false;

    // optionally listen for key events and use the arrow keys to pan the camera
    ctrls.listenToKeyEvents(window);

    // autorotate
    ctrls.autoRotate = true;
    ctrls. autoRotateSpeed = 1;

    // zoom limiter
    ctrls.minDistance = 5;
    ctrls.maxDistance = 20;

    // rotation limiter, default is Infinity
    // azimuth angle  is horizontally
    // polar angle is vertically
    ctrls.minAzimuthAngle = - Infinity;
    ctrls.maxAzimuthAngle = Infinity;
    ctrls.minPolarAngle = 0;
    ctrls.maxPolarAngle = Math.PI; // default
}

export { createControls }