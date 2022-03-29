export class Time {

    private static startTime = Date.now() / 1000;

    public static get time() {
        return Date.now() / 1000 - this.startTime;
    }
}