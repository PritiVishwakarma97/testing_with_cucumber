export class Calculator{

    result!: number;

    add(num1: number, num2: number){
        this.result = num1 + num2;
    }

    subtract(num1: number, num2: number){
        this.result = num1 - num2;
    }

    multiply(num1: number, num2: number){
        this.result = num1 * num2;
    }

    getResult(): number{
        return this.result;
    }
}