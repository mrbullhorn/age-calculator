export default class ageCalculator {
  constructor(age) {
    this.ageInput = age;
  }

  ageCalc() {
    this.mercAge = Math.round(this.ageInput / (0.24));
    this.venAge = Math.round(this.ageInput / (0.62));
    this.marsAge = Math.round(this.ageInput / (1.88));
    this.jupAge = Math.round(this.ageInput / (11.86));
  }

  expectCalc() {
    let expectArray = [];
    let lifeExpect = Math.round(70.6 - this.ageInput);
    let mercExpect = 294 - this.mercAge;
    let venExpect = 114 - (Math.round(this.ageInput / (0.62)));
    let marsExpect = 38 - (Math.round(this.ageInput / (1.88)));
    let jupExpect = 6 - (Math.round(this.ageInput / (11.86)));
    expectArray.push(lifeExpect, mercExpect, venExpect, marsExpect, jupExpect);
    if (this.ageInput > 70.6) {
       let surpassArray = [];
       expectArray.forEach((e) => {
        surpassArray.push(Math.abs(e))
       });
       return surpassArray;
      } else {
    return expectArray;
    }
  }
};
