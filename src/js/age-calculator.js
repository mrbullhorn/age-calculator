export default class ageCalculator {
  constructor(age) {
    this.ageInput = age;
  }

  ageCalc() {
    let ageArray = [];
    let mercAge = (this.ageInput * (0.24));
    let venAge = (this.ageInput * (0.62));
    let marsAge = (this.ageInput * (1.88));
    let jupAge = (this.ageInput * (11.86));
    ageArray.push(mercAge, venAge, marsAge, jupAge);
    return ageArray;
  }
}