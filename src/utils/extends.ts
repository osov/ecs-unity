type _marker = {fakeMarker?:true}; 

declare global {
    type float = number & _marker;
}

export type float = number & _marker;


declare global {
    interface Math {
        FloorToInt(val: number): number;
    }
}

if (!Math.FloorToInt) {
    Math.FloorToInt = function <T>(this: T, val: number): number {
        return Number(Math.floor(val));
    }
}