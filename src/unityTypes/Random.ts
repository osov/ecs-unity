export class Random {

    public static Range(inclusiv:number, exclusive:number)
    {
        return Math.floor(Math.random() * (exclusive - inclusiv)) + inclusiv;
    }

    
}