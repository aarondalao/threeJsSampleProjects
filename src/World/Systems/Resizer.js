const setSize = (container, camera, renderer) => {
    camera.aspect = container.clientWidth / container.clientHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);

    renderer.setPixelRatio(window.devicePixelRatio);
}

class Resizer{
    constructor(container, camera, renderer){
        // set initial on load
        setSize(container, camera, renderer);

        // trigger an event to set size again whenever resizing of windows occurs
        window.addEventListener('resize', () => {
            setSize(container, camera, renderer);

            // perform any custom actions
            this.onResize();
        });

        
    }

}

export { Resizer };