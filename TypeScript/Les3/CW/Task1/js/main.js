class Cat {
    constructor(iter_) {
        this.iter_ = iter_;
        this.iter = iter_;
    }
    *getValues() {
        if (typeof this.iter === 'string') {
            yield this.iter;
        }
        else {
            console.log('Error');
        }
    }
}
console.log(new Cat("Hello").getValues().next());
console.log(new Cat("hi hi").getValues().next());
console.log(new Cat(1).getValues().next());
//# sourceMappingURL=main.js.map