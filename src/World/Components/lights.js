/*
    DirectionalLight = Sunlight
    PointLight = Lightbulbs
    RectAreaLight = strip lighting or bright windows
    SpotLight = Spotlights
*/

import { DirectionalLight, AmbientLight, SpotLight, RectAreaLight, PointLight, HemisphereLight } from 'three';

function createLights() {

    const mainLight = new DirectionalLight("white", 3);

    const ambientLight = new HemisphereLight();

    // move the light right, up, and towards us
    mainLight.position.set(30, 10, 30);

    return { mainLight, ambientLight };
}

export { createLights };
