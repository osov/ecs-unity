import * as tmp from "./ScreenOrientation";
const _ScreenOrientation = tmp.ScreenOrientation;

type ScreenOrientation = number & { fakeMarker?: true };


export class Screen {
    public static instance: Screen;

    public static get width() {
        return window.innerWidth;
    }

    public static get height() {
        return window.innerHeight;
    }

    public static get orientation(): ScreenOrientation {
        return _ScreenOrientation.Portrait;
    }
}