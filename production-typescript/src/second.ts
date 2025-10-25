interface TakePhoto {
  cameraMode: string;
  filter: string;
  brust: number;
}

interface Story {
    createStory() : string
}
class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public brust: number
  ) {}
}

class Facebook implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public brust: number,
        public story: string
    ) {}

    createStory(): string {
        return "story is uploaded"
    }
}