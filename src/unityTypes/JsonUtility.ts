
export class JsonUtility {
    public static ToJson<T>(data: T) {
        return JSON.stringify(data);
    }
}