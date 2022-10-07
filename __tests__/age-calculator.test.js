import { TestScheduler } from 'jest'
import ageCalculator from './../src/js/age-calculator.js'

describe ('ageCalculator', () => {
  test('should create a calculator object with an age property', ()=> {
    const myAgeCalculator = new ageCalculator(36);
    expect(myAgeCalculator.ageInput).toEqual(36);
  });

  test('should return users age in Mercury years', ()=> {
    const myAgeCalculator = new ageCalculator(36);
    expect(myAgeCalculator.ageCalc()[0]).toEqual(8.64);
  });

  test('should return users age in Mercury years and Venus years', ()=> {
    const myAgeCalculator = new ageCalculator(36);
    expect(myAgeCalculator.ageCalc()[0, 1]).toEqual((8.64, 22.32));
  });

  test('should return users age in an array in Mercury, Venus, Mars and Jupiter years', ()=> {
    const myAgeCalculator = new ageCalculator(36);
    expect(myAgeCalculator.ageCalc()).toEqual([8.64, 22.32, 67.67999999999999, 426.96])
  });
});