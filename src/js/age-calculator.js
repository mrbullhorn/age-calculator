export default class ageCalculator {
  constructor(age) {
    this.ageInput = age;
  }

  ageCalc() {
    let ageArray = [];
    let mercAge = Math.round(this.ageInput / (0.24));
    let venAge = Math.round(this.ageInput / (0.62));
    let marsAge = Math.round(this.ageInput / (1.88));
    let jupAge = Math.round(this.ageInput / (11.86));
    ageArray.push(mercAge, venAge, marsAge, jupAge);
    return ageArray;
  }

  expectCalc() {
    let expectArray = [];
    let lifeExpect = Math.round(70.6 - this.ageInput);
    let mercExpect = 294 - (Math.round(this.ageInput / (0.24)));
    let venExpect = 114 - Math.round(this.ageInput / (0.62));
    let marsExpect = 38 - Math.round(this.ageInput / (1.88));
    let jupExpect = 6 - Math.round(this.ageInput / (11.86));
    expectArray.push(lifeExpect, mercExpect, venExpect, marsExpect, jupExpect);
    return expectArray;
  }
}