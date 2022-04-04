// помечаем метод не переводить в c# код
export function noTranslit() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) { };
}

// помечаем класс не переводить в c# код
export function noTranslitClass() {
    return function _DecoratorName<T extends { new(...args: any[]): {} }>(constr: T) { }
}

// не вызываемый метод, ничего не делает
export function noCallable() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.value = function () {
            return;
        }
    };
}


