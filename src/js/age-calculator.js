export default class ageCalculator {
  constructor(age) {
    this.ageInput = age;
    this.mercAge = 0;
  }

  ageCalc() {
    this.mercAge = Math.round(this.ageInput / (0.24));
    /*let venAge = Math.round(this.ageInput / (0.62));
    let marsAge = Math.round(this.ageInput / (1.88));
    let jupAge = Math.round(this.ageInput / (11.86));
    ageArray.push(mercAge, venAge, marsAge, jupAge);
    return ageArray;*/
  }

  expectCalc() {
    let expectArray = [];
    let lifeExpect = Math.round(70.6 - this.ageInput);
    let mercExpect = 294 - (Math.round(this.ageInput / (0.24)));
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
