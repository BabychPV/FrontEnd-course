interface IAnimals<T> {
    iter: T;
}

class Cat  implements IAnimals<any>{

     readonly iter: any;

    constructor(public iter_: any) {
        this.iter = iter_;
    }

    * getValues() {
        if (typeof this.iter === 'string') {
            yield this.iter;
        } else {
            console.log('Error')
        }

    }


}


console.log(new Cat("Hello").getValues().next());
console.log(new Cat("hi hi").getValues().next());

console.log(new Cat(1).getValues().next());