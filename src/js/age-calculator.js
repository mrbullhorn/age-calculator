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
    this.expectArray = [];
    let lifeExpect = Math.round(70.6 - this.ageInput);
    let mercExpect = 294 - this.mercAge;
    let venExpect = 114 - this.venAge;
    let marsExpect = 38 - this.marsAge;
    let jupExpect = 6 - this.jupAge;
    this.expectArray.push(lifeExpect, mercExpect, venExpect, marsExpect, jupExpect);
    console.log
    if (this.ageInput > 70.6) {
       let surpassArray = [];
       this.expectArray.forEach((e) => {
        surpassArray.push(Math.abs(e))
       });
       console.log(this.expectArray);
       console.log(surpassArray);
       return surpassArray;
      } else {
    return this.expectArray;
    }
  }
};
