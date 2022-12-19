import * as material from "materials.js";
//-------------------------------------------------------


class Sword {
    hardness = [0, 0, 0]
    flexibility = [0, 0, 0]
    element = []
    weight = []

    constructor(hilt, blade, scabbard){
        this.hilt = hilt
        this.blade = blade
        this.scabbard = scabbard
    }
    crafting_hilt(){
    return material.this.hilt[0].hardness

    }
}