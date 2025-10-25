"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Instagram {
    cameraMode;
    filter;
    brust;
    constructor(cameraMode, filter, brust) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brust = brust;
    }
}
class Facebook {
    cameraMode;
    filter;
    brust;
    story;
    constructor(cameraMode, filter, brust, story) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brust = brust;
        this.story = story;
    }
    createStory() {
        return "story is uploaded";
    }
}
