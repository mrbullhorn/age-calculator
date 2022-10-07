import { TestScheduler } from 'jest'
import ageCalculator from './../src/js/age-calculator.js'

describe ('ageCalculator', () => {
  test('should create a calculator object with an age property', ()=> {
    const myAgeCalculator = new ageCalculator(36);
    expect(myAgeCalculator.ageInput).toEqual(36);
  });

  test('should return users age in Mercury years', ()=> {
    const myAgeCalculator = new ageCalculator(36);
    expect(myAgeCalculator.ageCalc()[0]).toEqual(150);
  });

  test('should return users age in Mercury years and Venus years', ()=> {
    const myAgeCalculator = new ageCalculator(36);
    expect(myAgeCalculator.ageCalc()[0, 1]).toEqual((150, 58));
  });

  test('should return users age in an array in Mercury, Venus, Mars and Jupiter years', ()=> {
    const myAgeCalculator = new ageCalculator(36);
    expect(myAgeCalculator.ageCalc()).toEqual([150, 58, 19, 3])
  });

  test('should return users life expectancy based on average male life expectancy', ()=> {
    const myAgeCalculator = new ageCalculator(36);
    expect(myAgeCalculator.expectCalc()[0]).toEqual(35);
  });
  
  test ('should return users life expectancy on Mercury based on average male life expectancy', ()=> {
  const myAgeCalculator = new ageCalculator(36);
  expect(myAgeCalculator.expectCalc()[1]).toEqual(144);
  });

  test('should return users life expectancy on all planets based on average male life expectancy', ()=> {
    const myAgeCalculator = new ageCalculator(36);
    expect(myAgeCalculator.expectCalc().toEqual([144, 56, 19, 3]))
  })
});

