import Scene from "./webgl/Scene.js";
import Geometry from "./webgl/Geometry.js";
import Vector3 from "./webgl/Vector3.js";
import Face from "./webgl/Face.js";
import Color from "./webgl/Color.js";

let canvas, scene;
let geometryLeft;
let geometryRight;

function main() {
    canvas = document.getElementById("myCanvas");
    scene = new Scene(canvas);

    geometryLeft = new Geometry();
    geometryRight = new Geometry();

    addGeometryLeft();

    addColorLeft();

    geometryLeft.setMovement(0.0, 0.0, 0.0);

    addFaceLeft();

    scene.add(geometryLeft);

    addGeometryRight();

    addColorRight();

    geometryRight.setMovement(0.0, 0.0062, 0.0);

    addFaceRight();

    scene.add(geometryRight);
}

function update() {
    scene.render();
}

function animate() {
    requestAnimationFrame(animate);
    update();
}

window.onload = () => {
    main();
    animate();
};

function addGeometryLeft() {
    // SISI KIRI

    // 1
    geometryLeft.addVertice(new Vector3(-0.951, -0.127, 0));
    geometryLeft.addVertice(new Vector3(-0.719, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.964, -0.199, 0));
    // 2
    geometryLeft.addVertice(new Vector3(-0.964, -0.199, 0));
    geometryLeft.addVertice(new Vector3(-0.719, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.968, -0.276, 0));
    // 3
    geometryLeft.addVertice(new Vector3(-0.968, -0.276, 0));
    geometryLeft.addVertice(new Vector3(-0.719, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.969, -0.366, 0));
    // 4
    geometryLeft.addVertice(new Vector3(-0.969, -0.366, 0));
    geometryLeft.addVertice(new Vector3(-0.719, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.966, -0.459, 0));
    // 5
    geometryLeft.addVertice(new Vector3(-0.966, -0.459, 0));
    geometryLeft.addVertice(new Vector3(-0.719, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.963, -0.551, 0));
    // 6
    geometryLeft.addVertice(new Vector3(-0.963, -0.551, 0));
    geometryLeft.addVertice(new Vector3(-0.719, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.818, -0.533, 0));
    // 7
    geometryLeft.addVertice(new Vector3(-0.818, -0.533, 0));
    geometryLeft.addVertice(new Vector3(-0.719, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.743, -0.516, 0));
    // 8
    geometryLeft.addVertice(new Vector3(-0.743, -0.516, 0));
    geometryLeft.addVertice(new Vector3(-0.719, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.675, -0.495, 0));
    // 9
    geometryLeft.addVertice(new Vector3(-0.675, -0.495, 0));
    geometryLeft.addVertice(new Vector3(-0.719, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.610, -0.470, 0));
    // 10
    geometryLeft.addVertice(new Vector3(-0.610, -0.470, 0));
    geometryLeft.addVertice(new Vector3(-0.719, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.558, -0.435, 0));
    // 11
    geometryLeft.addVertice(new Vector3(-0.558, -0.435, 0));
    geometryLeft.addVertice(new Vector3(-0.719, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.558, -0.394, 0));
    // 12
    geometryLeft.addVertice(new Vector3(-0.558, -0.394, 0));
    geometryLeft.addVertice(new Vector3(-0.719, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.558, -0.353, 0));
    // 13
    geometryLeft.addVertice(new Vector3(-0.558, -0.353, 0));
    geometryLeft.addVertice(new Vector3(-0.719, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.558, -0.299, 0));
    // 14
    geometryLeft.addVertice(new Vector3(-0.633, -0.233, 0));
    geometryLeft.addVertice(new Vector3(-0.719, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.558, -0.299, 0));
    
    //SISI TENGAH

    // 1
    geometryLeft.addVertice(new Vector3(-0.558, -0.435, 0));
    geometryLeft.addVertice(new Vector3(-0.558, -0.299, 0));
    geometryLeft.addVertice(new Vector3(-0.440, -0.435, 0));
    // 2
    geometryLeft.addVertice(new Vector3(-0.440, -0.299, 0));
    geometryLeft.addVertice(new Vector3(-0.558, -0.299, 0));
    geometryLeft.addVertice(new Vector3(-0.440, -0.435, 0));
    // 3 -> Atas
    geometryLeft.addVertice(new Vector3(-0.558, -0.299, 0));
    geometryLeft.addVertice(new Vector3(-0.542, -0.285, 0));
    geometryLeft.addVertice(new Vector3(-0.440, -0.299, 0));
    // 4
    geometryLeft.addVertice(new Vector3(-0.456, -0.285, 0));
    geometryLeft.addVertice(new Vector3(-0.542, -0.285, 0));
    geometryLeft.addVertice(new Vector3(-0.440, -0.299, 0));
    // 5 -> Bawah
    geometryLeft.addVertice(new Vector3(-0.558, -0.435, 0));
    geometryLeft.addVertice(new Vector3(-0.542, -0.452, 0));
    geometryLeft.addVertice(new Vector3(-0.440, -0.435, 0));
    // 6
    geometryLeft.addVertice(new Vector3(-0.542, -0.452, 0));
    geometryLeft.addVertice(new Vector3(-0.456, -0.452, 0));
    geometryLeft.addVertice(new Vector3(-0.440, -0.435, 0));

    // TALI

    // 1 -> Kiri
    geometryLeft.addVertice(new Vector3(-0.719, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.633, -0.233, 0));
    geometryLeft.addVertice(new Vector3(-0.772, 0.093, 0));
    // 2
    geometryLeft.addVertice(new Vector3(-0.633, -0.233, 0));
    geometryLeft.addVertice(new Vector3(-0.772, 0.093, 0));
    geometryLeft.addVertice(new Vector3(-0.700, 0.093, 0));
    // 3
    geometryLeft.addVertice(new Vector3(-0.633, 0.419, 0));
    geometryLeft.addVertice(new Vector3(-0.772, 0.093, 0));
    geometryLeft.addVertice(new Vector3(-0.700, 0.093, 0));
    // 4
    geometryLeft.addVertice(new Vector3(-0.633, 0.419, 0));
    geometryLeft.addVertice(new Vector3(-0.772, 0.093, 0));
    geometryLeft.addVertice(new Vector3(-0.705, 0.419, 0));
    // 5 -> Kanan
    geometryLeft.addVertice(new Vector3(-0.279, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.365, -0.233, 0));
    geometryLeft.addVertice(new Vector3(-0.226, 0.093, 0));
    // 6
    geometryLeft.addVertice(new Vector3(-0.365, -0.233, 0));
    geometryLeft.addVertice(new Vector3(-0.226, 0.093, 0));
    geometryLeft.addVertice(new Vector3(-0.298, 0.093, 0));
    // 7
    geometryLeft.addVertice(new Vector3(-0.365, 0.419, 0));
    geometryLeft.addVertice(new Vector3(-0.226, 0.093, 0));
    geometryLeft.addVertice(new Vector3(-0.298, 0.093, 0));
    // 8
    geometryLeft.addVertice(new Vector3(-0.293, 0.419, 0));
    geometryLeft.addVertice(new Vector3(-0.226, 0.093, 0));
    geometryLeft.addVertice(new Vector3(-0.365, 0.419, 0));
    // 9 -> Tengah
    geometryLeft.addVertice(new Vector3(-0.633, 0.419, 0));
    geometryLeft.addVertice(new Vector3(-0.552, 0.548, 0));
    geometryLeft.addVertice(new Vector3(-0.705, 0.419, 0));
    // 10
    geometryLeft.addVertice(new Vector3(-0.293, 0.419, 0));
    geometryLeft.addVertice(new Vector3(-0.446, 0.548, 0));
    geometryLeft.addVertice(new Vector3(-0.365, 0.419, 0));
    // 11
    geometryLeft.addVertice(new Vector3(-0.552, 0.548, 0));
    geometryLeft.addVertice(new Vector3(-0.446, 0.476, 0));
    geometryLeft.addVertice(new Vector3(-0.552, 0.476, 0));
    // 12
    geometryLeft.addVertice(new Vector3(-0.633, 0.419, 0));
    geometryLeft.addVertice(new Vector3(-0.552, 0.548, 0));
    geometryLeft.addVertice(new Vector3(-0.552, 0.476, 0));
    // 13
    geometryLeft.addVertice(new Vector3(-0.552, 0.548, 0));
    geometryLeft.addVertice(new Vector3(-0.446, 0.548, 0));
    geometryLeft.addVertice(new Vector3(-0.446, 0.476, 0));
    // 14
    geometryLeft.addVertice(new Vector3(-0.365, 0.419, 0));
    geometryLeft.addVertice(new Vector3(-0.446, 0.548, 0));
    geometryLeft.addVertice(new Vector3(-0.446, 0.476, 0));

    //SISI KANAN

    // 1
    geometryLeft.addVertice(new Vector3(-0.047, -0.127, 0));
    geometryLeft.addVertice(new Vector3(-0.279, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.034, -0.199, 0));
    // 2
    geometryLeft.addVertice(new Vector3(-0.034, -0.199, 0));
    geometryLeft.addVertice(new Vector3(-0.279, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.030, -0.276, 0));
    // 3
    geometryLeft.addVertice(new Vector3(-0.030, -0.276, 0));
    geometryLeft.addVertice(new Vector3(-0.279, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.029, -0.366, 0));
    // 4
    geometryLeft.addVertice(new Vector3(-0.029, -0.366, 0));
    geometryLeft.addVertice(new Vector3(-0.279, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.032, -0.459, 0));
    // 5
    geometryLeft.addVertice(new Vector3(-0.032, -0.459, 0));
    geometryLeft.addVertice(new Vector3(-0.279, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.035, -0.551, 0));
    // 6
    geometryLeft.addVertice(new Vector3(-0.035, -0.551, 0));
    geometryLeft.addVertice(new Vector3(-0.279, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.180, -0.533, 0));
    // 7
    geometryLeft.addVertice(new Vector3(-0.180, -0.533, 0));
    geometryLeft.addVertice(new Vector3(-0.279, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.255, -0.516, 0));
    // 8
    geometryLeft.addVertice(new Vector3(-0.255, -0.516, 0));
    geometryLeft.addVertice(new Vector3(-0.279, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.323, -0.495, 0));
    // 9
    geometryLeft.addVertice(new Vector3(-0.323, -0.495, 0));
    geometryLeft.addVertice(new Vector3(-0.279, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.388, -0.470, 0));
    // 10
    geometryLeft.addVertice(new Vector3(-0.388, -0.470, 0));
    geometryLeft.addVertice(new Vector3(-0.279, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.440, -0.435, 0));
    // 11
    geometryLeft.addVertice(new Vector3(-0.440, -0.435, 0));
    geometryLeft.addVertice(new Vector3(-0.279, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.440, -0.394, 0));
    // 12
    geometryLeft.addVertice(new Vector3(-0.440, -0.394, 0));
    geometryLeft.addVertice(new Vector3(-0.279, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.440, -0.353, 0));
    // 13
    geometryLeft.addVertice(new Vector3(-0.440, -0.353, 0));
    geometryLeft.addVertice(new Vector3(-0.279, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.440, -0.299, 0));
    // 14
    geometryLeft.addVertice(new Vector3(-0.365, -0.233, 0));
    geometryLeft.addVertice(new Vector3(-0.279, -0.184, 0));
    geometryLeft.addVertice(new Vector3(-0.440, -0.299, 0));
}

function addColorLeft() {
    //SISI KIRI

    // 1
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    // 2
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    // 3
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    // 4
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    // 5
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    // 6
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    // 7
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    // 8
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    // 9
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    // 10
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    // 11
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    // 12
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    // 13
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    // 14
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    
    //SISI TENGAH

    // 1
    geometryLeft.addColor(new Color(0.60, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.60, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.60, 0.0, 0.0, 1.0));
    // 2
    geometryLeft.addColor(new Color(0.60, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.60, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.60, 0.0, 0.0, 1.0));
    // 3 -> Atas 
    geometryLeft.addColor(new Color(0.50, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.50, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.50, 0.0, 0.0, 1.0));
    // 4
    geometryLeft.addColor(new Color(0.50, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.50, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.50, 0.0, 0.0, 1.0));
    // 5 -> Bawah
    geometryLeft.addColor(new Color(0.50, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.50, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.50, 0.0, 0.0, 1.0));
    // 6
    geometryLeft.addColor(new Color(0.50, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.50, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.50, 0.0, 0.0, 1.0));
    
    
    // TALI

    // 1 -> Kiri
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    // 2
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    // 3
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    // 4
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    // 5 -> Kanan
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    // 6
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    // 7
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    // 8
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    // 9 -> Tengah
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    // 10
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    // 11
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    // 12
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    // 13
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    // 14
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    
    // SISI KANAN

    // 1
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    // 2
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    // 3
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    // 4
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    // 5
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    // 6
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    // 7
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    // 8
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    // 9
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    // 10
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    // 11
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    // 12
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    // 13
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    // 14
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    geometryLeft.addColor(new Color(0.55, 0.0, 0.0, 1.0));
}

function addFaceLeft() {
    for (let i = 0; i < (14 + 20 + 14) * 3; i += 3) {
        geometryLeft.addFace(new Face(i, i + 1, i + 2));
    }
}

function addGeometryRight() {
    function verticesKanan() {
        // SISI KANAN

        // 1
        geometryRight.addVertice(new Vector3(0.951, 0.127, 0));
        geometryRight.addVertice(new Vector3(0.719, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.964, 0.199, 0));
        // 2
        geometryRight.addVertice(new Vector3(0.964, 0.199, 0));
        geometryRight.addVertice(new Vector3(0.719, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.968, 0.276, 0));
        // 3
        geometryRight.addVertice(new Vector3(0.968, 0.276, 0));
        geometryRight.addVertice(new Vector3(0.719, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.969, 0.366, 0));
        // 4
        geometryRight.addVertice(new Vector3(0.969, 0.366, 0));
        geometryRight.addVertice(new Vector3(0.719, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.966, 0.459, 0));
        // 5
        geometryRight.addVertice(new Vector3(0.966, 0.459, 0));
        geometryRight.addVertice(new Vector3(0.719, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.963, 0.551, 0));
        // 6
        geometryRight.addVertice(new Vector3(0.963, 0.551, 0));
        geometryRight.addVertice(new Vector3(0.719, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.818, 0.533, 0));
        // 7
        geometryRight.addVertice(new Vector3(0.818, 0.533, 0));
        geometryRight.addVertice(new Vector3(0.719, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.743, 0.516, 0));
        // 8
        geometryRight.addVertice(new Vector3(0.743, 0.516, 0));
        geometryRight.addVertice(new Vector3(0.719, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.675, 0.495, 0));
        // 9
        geometryRight.addVertice(new Vector3(0.675, 0.495, 0));
        geometryRight.addVertice(new Vector3(0.719, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.610, 0.470, 0));
        // 10
        geometryRight.addVertice(new Vector3(0.610, 0.470, 0));
        geometryRight.addVertice(new Vector3(0.719, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.558, 0.435, 0));
        // 11
        geometryRight.addVertice(new Vector3(0.558, 0.435, 0));
        geometryRight.addVertice(new Vector3(0.719, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.558, 0.394, 0));
        // 12
        geometryRight.addVertice(new Vector3(0.558, 0.394, 0));
        geometryRight.addVertice(new Vector3(0.719, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.558, 0.353, 0));
        // 13
        geometryRight.addVertice(new Vector3(0.558, 0.353, 0));
        geometryRight.addVertice(new Vector3(0.719, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.558, 0.299, 0));
        // 14
        geometryRight.addVertice(new Vector3(0.633, 0.233, 0));
        geometryRight.addVertice(new Vector3(0.719, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.558, 0.299, 0));
    }
    
    function verticesKiri() {
        //SISI KIRI

        // 1
        geometryRight.addVertice(new Vector3(0.047, 0.127, 0));
        geometryRight.addVertice(new Vector3(0.279, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.034, 0.199, 0));
        // 2
        geometryRight.addVertice(new Vector3(0.034, 0.199, 0));
        geometryRight.addVertice(new Vector3(0.279, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.030, 0.276, 0));
        // 3
        geometryRight.addVertice(new Vector3(0.030, 0.276, 0));
        geometryRight.addVertice(new Vector3(0.279, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.029, 0.366, 0));
        // 4
        geometryRight.addVertice(new Vector3(0.029, 0.366, 0));
        geometryRight.addVertice(new Vector3(0.279, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.032, 0.459, 0));
        // 5
        geometryRight.addVertice(new Vector3(0.032, 0.459, 0));
        geometryRight.addVertice(new Vector3(0.279, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.035, 0.551, 0));
        // 6
        geometryRight.addVertice(new Vector3(0.035, 0.551, 0));
        geometryRight.addVertice(new Vector3(0.279, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.180, 0.533, 0));
        // 7
        geometryRight.addVertice(new Vector3(0.180, 0.533, 0));
        geometryRight.addVertice(new Vector3(0.279, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.255, 0.516, 0));
        // 8
        geometryRight.addVertice(new Vector3(0.255, 0.516, 0));
        geometryRight.addVertice(new Vector3(0.279, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.323, 0.495, 0));
        // 9
        geometryRight.addVertice(new Vector3(0.323, 0.495, 0));
        geometryRight.addVertice(new Vector3(0.279, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.388, 0.470, 0));
        // 10
        geometryRight.addVertice(new Vector3(0.388, 0.470, 0));
        geometryRight.addVertice(new Vector3(0.279, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.440, 0.435, 0));
        // 11
        geometryRight.addVertice(new Vector3(0.440, 0.435, 0));
        geometryRight.addVertice(new Vector3(0.279, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.440, 0.394, 0));
        // 12
        geometryRight.addVertice(new Vector3(0.440, 0.394, 0));
        geometryRight.addVertice(new Vector3(0.279, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.440, 0.353, 0));
        // 13
        geometryRight.addVertice(new Vector3(0.440, 0.353, 0));
        geometryRight.addVertice(new Vector3(0.279, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.440, 0.299, 0));
        // 14
        geometryRight.addVertice(new Vector3(0.365, 0.233, 0));
        geometryRight.addVertice(new Vector3(0.279, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.440, 0.299, 0));
    }

    function verticesTengah() {
        //SISI TENGAH

        // 1
        geometryRight.addVertice(new Vector3(0.558, 0.435, 0));
        geometryRight.addVertice(new Vector3(0.558, 0.299, 0));
        geometryRight.addVertice(new Vector3(0.440, 0.435, 0));
        // 2
        geometryRight.addVertice(new Vector3(0.440, 0.299, 0));
        geometryRight.addVertice(new Vector3(0.558, 0.299, 0));
        geometryRight.addVertice(new Vector3(0.440, 0.435, 0));
        // 3 -> Atas
        geometryRight.addVertice(new Vector3(0.558, 0.299, 0));
        geometryRight.addVertice(new Vector3(0.542, 0.285, 0));
        geometryRight.addVertice(new Vector3(0.440, 0.299, 0));
        // 4
        geometryRight.addVertice(new Vector3(0.456, 0.285, 0));
        geometryRight.addVertice(new Vector3(0.542, 0.285, 0));
        geometryRight.addVertice(new Vector3(0.440, 0.299, 0));
        // 5 -> Bawah
        geometryRight.addVertice(new Vector3(0.558, 0.435, 0));
        geometryRight.addVertice(new Vector3(0.542, 0.452, 0));
        geometryRight.addVertice(new Vector3(0.440, 0.435, 0));
        // 6
        geometryRight.addVertice(new Vector3(0.542, 0.452, 0));
        geometryRight.addVertice(new Vector3(0.456, 0.452, 0));
        geometryRight.addVertice(new Vector3(0.440, 0.435, 0));

        // TALI

        // 1 -> Kanan
        geometryRight.addVertice(new Vector3(0.719, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.633, 0.233, 0));
        geometryRight.addVertice(new Vector3(0.772, -0.093, 0));
        // 2
        geometryRight.addVertice(new Vector3(0.633, 0.233, 0));
        geometryRight.addVertice(new Vector3(0.772, -0.093, 0));
        geometryRight.addVertice(new Vector3(0.700, -0.093, 0));
        // 3
        geometryRight.addVertice(new Vector3(0.633, -0.419, 0));
        geometryRight.addVertice(new Vector3(0.772, -0.093, 0));
        geometryRight.addVertice(new Vector3(0.700, -0.093, 0));
        // 4
        geometryRight.addVertice(new Vector3(0.633, -0.419, 0));
        geometryRight.addVertice(new Vector3(0.772, -0.093, 0));
        geometryRight.addVertice(new Vector3(0.705, -0.419, 0));
        // 5 -> Kiri
        geometryRight.addVertice(new Vector3(0.279, 0.184, 0));
        geometryRight.addVertice(new Vector3(0.365, 0.233, 0));
        geometryRight.addVertice(new Vector3(0.226, -0.093, 0));
        // 6
        geometryRight.addVertice(new Vector3(0.365, 0.233, 0));
        geometryRight.addVertice(new Vector3(0.226, -0.093, 0));
        geometryRight.addVertice(new Vector3(0.298, -0.093, 0));
        // 7
        geometryRight.addVertice(new Vector3(0.365, -0.419, 0));
        geometryRight.addVertice(new Vector3(0.226, -0.093, 0));
        geometryRight.addVertice(new Vector3(0.298, -0.093, 0));
        // 8
        geometryRight.addVertice(new Vector3(0.293, -0.419, 0));
        geometryRight.addVertice(new Vector3(0.226, -0.093, 0));
        geometryRight.addVertice(new Vector3(0.365, -0.419, 0));
        // 9 -> Tengah
        geometryRight.addVertice(new Vector3(0.633, -0.419, 0));
        geometryRight.addVertice(new Vector3(0.552, -0.548, 0));
        geometryRight.addVertice(new Vector3(0.705, -0.419, 0));
        // 10
        geometryRight.addVertice(new Vector3(0.293, -0.419, 0));
        geometryRight.addVertice(new Vector3(0.446, -0.548, 0));
        geometryRight.addVertice(new Vector3(0.365, -0.419, 0));
        // 11
        geometryRight.addVertice(new Vector3(0.552, -0.548, 0));
        geometryRight.addVertice(new Vector3(0.446, -0.476, 0));
        geometryRight.addVertice(new Vector3(0.552, -0.476, 0));
        // 12
        geometryRight.addVertice(new Vector3(0.633, -0.419, 0));
        geometryRight.addVertice(new Vector3(0.552, -0.548, 0));
        geometryRight.addVertice(new Vector3(0.552, -0.476, 0));
        // 13
        geometryRight.addVertice(new Vector3(0.552, -0.548, 0));
        geometryRight.addVertice(new Vector3(0.446, -0.548, 0));
        geometryRight.addVertice(new Vector3(0.446, -0.476, 0));
        // 14
        geometryRight.addVertice(new Vector3(0.365, -0.419, 0));
        geometryRight.addVertice(new Vector3(0.446, -0.548, 0));
        geometryRight.addVertice(new Vector3(0.446, -0.476, 0));
    }

    verticesKanan();
    verticesKiri();
    verticesTengah();
}

function addColorRight() {
    function colorKanan() {
        //SISI KANAN

        // 1
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        // 2
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        // 3
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        // 4
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        // 5
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        // 6
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        // 7
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        // 8
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        // 9
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        // 10
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        // 11
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        // 12
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        // 13
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        // 14
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    }

    function colorKiri() {
        // SISI KIRI

        // 1
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        // 2
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        // 3
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        // 4
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        // 5
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        // 6
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        // 7
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        // 8
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        // 9
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        // 10
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        // 11
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        // 12
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        // 13
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        // 14
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
    }

    function colorTengah() {
        //SISI TENGAH

        // 1
        geometryRight.addColor(new Color(0.60, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.60, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.60, 0.0, 0.0, 1.0));
        // 2
        geometryRight.addColor(new Color(0.60, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.60, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.60, 0.0, 0.0, 1.0));
        // 3 -> Atas 
        geometryRight.addColor(new Color(0.50, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.50, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.50, 0.0, 0.0, 1.0));
        // 4
        geometryRight.addColor(new Color(0.50, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.50, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.50, 0.0, 0.0, 1.0));
        // 5 -> Bawah
        geometryRight.addColor(new Color(0.50, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.50, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.50, 0.0, 0.0, 1.0));
        // 6
        geometryRight.addColor(new Color(0.50, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.50, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.50, 0.0, 0.0, 1.0));

        // TALI

        // 1 -> Kanan
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        // 2
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        // 3
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        // 4
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        // 5 -> Kiri
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        // 6
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        // 7
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        // 8
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        // 9 -> Tengah
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        // 10
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        // 11
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        // 12
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        // 13
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        // 14
        geometryRight.addColor(new Color(0.55, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
        geometryRight.addColor(new Color(0.70, 0.0, 0.0, 1.0));
    }

    colorKanan();
    colorKiri();
    colorTengah();
}

function addFaceRight() {
    for (let i = 0; i < (14 + 20 + 14) * 3; i += 3) {
        geometryRight.addFace(new Face(i, i + 1, i + 2));
    }
}