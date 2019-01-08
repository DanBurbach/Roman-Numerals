import { Roman } from './../src/roman';

describe('Roman', function() {
  let roman;

  beforeEach(function() {
    roman = new Roman();
  });

   it('should convert 1 to I', function() {
    expect(roman.romanize(1)).toEqual("I");
  });
  it('should convert 3 to III', function() {
   expect(roman.romanize(3)).toEqual("III");
  });
  it('should convert 4 to IV', function() {
   expect(roman.romanize(4)).toEqual("IV");
  });
  it('should convert 8 to VIII', function() {
   expect(roman.romanize(8)).toEqual("VIII");
  });
  it('should convert 9 to IX', function() {
   expect(roman.romanize(9)).toEqual("IX");
  });
  it('should convert 2348 to MMCCCXLVIII', function() {
   expect(roman.romanize(2348)).toEqual("MMCCCXLVIII");
  });
  it('should convert digit 4 into XL', function() {
   expect(roman.convertDigit(4, "X", "L", "C")).toEqual("XL");
  });
});
