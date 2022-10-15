import ageCalculator from './../src/js/age-calculator.js'

describe ('ageCalculator', () => {
  let myAgeCalculator;

  beforeEach(() => {
    myAgeCalculator = new ageCalculator(36);
  });

  test('should create a calculator object with an age property', ()=> {
    expect(myAgeCalculator.ageInput).toEqual(36);
  });

  test('should return users age in Mercury years', ()=> {
    myAgeCalculator.ageCalc();
    expect(myAgeCalculator.mercAge).toEqual(150);
  });

  test('should add properties for users age in Mercury years and Venus years', ()=> {
    myAgeCalculator.ageCalc();
    expect(myAgeCalculator.mercAge).toEqual(150);
    expect(myAgeCalculator.venAge).toEqual(58);
  });

test('should add properties for users age in Mercury, Venus, Mars and Jupiter years', ()=> {
    myAgeCalculator.ageCalc();
    expect(myAgeCalculator.mercAge).toEqual(150);
    expect(myAgeCalculator.venAge).toEqual(58);
    expect(myAgeCalculator.marsAge).toEqual(19);
    expect(myAgeCalculator.jupAge).toEqual(3);
  });

    /*test('should return users life expectancy based on average male life expectancy', ()=> {
    const myAgeCalculator = new ageCalculator(36);
    expect(myAgeCalculator.expectCalc()[0]).toEqual(35);
  });
  
  test ('should return users life expectancy on Mercury based on average male life expectancy', ()=> {
  const myAgeCalculator = new ageCalculator(36);
  expect(myAgeCalculator.expectCalc()[1]).toEqual(144);
  });

  test('should return users life expectancy on all planets based on average male life expectancy', ()=> {
    const myAgeCalculator = new ageCalculator(36);
    expect(myAgeCalculator.expectCalc()).toEqual([35, 144, 56, 19, 3]);
  });

  test('should determine if input has surpassed life expectancy', ()=> {
    const myAgeCalculator = new ageCalculator(100);
    expect(myAgeCalculator.expectCalc()[0]).toEqual(29);
  });

  test('if users age surpassed life expectancy should return array of values of years lived past life expectancy', ()=> {
    const myAgeCalculator = new ageCalculator(100);
    expect(myAgeCalculator.expectCalc()).toEqual([29, 123, 47, 15, 2]);
  });*/
});

