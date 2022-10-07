export default class ageCalculator {
  constructor(age) {
    this.ageInput = age;
  }

  ageCalc() {
    let mercAge = (this.ageInput * (.24));
    return mercAge;
  }
}