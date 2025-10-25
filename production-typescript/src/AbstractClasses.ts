 abstract class Takephoto {
    constructor(
        public cameraMode: string,
        public filter: string,
    ) {

    }

    abstract getSepia(): void
    getReelTime(): number {
        return 4 
    }
 }

 class Instagram extends Takephoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public brust: number
    ) {
        super(cameraMode,filter)
    }

    getSepia(): void {
        console.log("get sepiant")
    }

 }

 const om = new Instagram("t","", 4);
 