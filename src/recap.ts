const myName = `Nicolas`;
const myAge = 12;
const suma = (a: number, b: number) => {
  return a + b;
};
myName.toUpperCase(); //?
myAge.toFixed(2); //?
suma(1, 2); //?

class Persona {
  constructor(
    private age: number,
    private name: string,
  ) {}
  getSummary() {
    return `My name is ${this.name}, ${this.age}`;
  }
}

const nicolas = new Persona(12, 'Nicolas');

nicolas.getSummary(); //?
