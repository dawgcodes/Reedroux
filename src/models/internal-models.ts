
// This class is used to store and pass data along in events
export class EventData {
    // TODO: Add any data you want to store
    constructor(
        public args: any,
        public prefix: string,
        public lang: string
    ) {}
}
