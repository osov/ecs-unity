export interface TextAsset {
    text: string;
}

interface IResourceSystem {
    getTextData(p: string): string;
}

export class Resources {
    private static _rs: IResourceSystem;

    constructor(rs: IResourceSystem) {
        Resources._rs = rs;
    }

    public static Load<T>(path: string) {
        var tmp = this._rs.getTextData(path);
        if (!tmp)
            tmp = '{}';
        var ret: TextAsset = { text: tmp };
        return ret;
    }
}