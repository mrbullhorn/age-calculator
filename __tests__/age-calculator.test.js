import { TestScheduler } from 'jest'
import ageCalculator from './../src/js/age-calculator.js'

describe ('ageCalculator', () => {
  test('should create a calculator object with an age property', ()=> {
    const myAgeCalculator = new ageCalculator(36);
    expect(myAgeCalculator.ageInput).toEqual(36);
  });
});