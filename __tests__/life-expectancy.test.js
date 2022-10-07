import { TestScheduler } from 'jest'
import ageCalculator from './../src/js/age-calculator.js'

describe ('expectCalc', ()=> {
  test('should calculate remaining years in a persons life based on average life expectancy', ()=> {
    const myAgeCalculator = new ageCalculator(36);
    expect(myAgeCalculator.expectCalc()).toEqual(34.6);
  });
});