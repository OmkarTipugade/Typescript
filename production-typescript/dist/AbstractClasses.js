"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Takephoto {
    cameraMode;
    filter;
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 4;
    }
}
class Instagram extends Takephoto {
    cameraMode;
    filter;
    brust;
    constructor(cameraMode, filter, brust) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brust = brust;
    }
    getSepia() {
        console.log("get sepiant");
    }
}
const om = new Instagram("t", "", 4);
