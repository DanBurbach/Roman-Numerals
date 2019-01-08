class Roman {
  convertDigit(digit, onesChar, fivesChar, tensChar) {
    var romanDigit = "";
    var numOnes = 0;

    if((digit >= 0) && (digit <= 9)) {
      if (digit === 9) {
        romanDigit += onesChar + tensChar;
      } else if (digit >= 5) {
        numOnes = digit - 5;
        romanDigit += fivesChar;
      } else if (digit === 4) {
        romanDigit += onesChar + fivesChar;
      } else {
        numOnes = digit;
      }

      for (var index = 0; index < numOnes; index++) {
        romanDigit += onesChar;
      }
    }

    return romanDigit;
  }

  romanize(input) {
    var result = "";
    var remainder = (input % 1000);
    var thousands = input - remainder;
    var hundreds = remainder - remainder % 100;
    remainder = remainder - hundreds;
    var tens = remainder - remainder % 10;
    var ones = remainder - tens;

    result += this.convertDigit(thousands / 1000, "M", "e", "e");
    result += this.convertDigit(hundreds / 100, "C", "D", "M");
    result += this.convertDigit(tens / 10, "X", "L", "C");
    result += this.convertDigit(ones, "I", "V", "X");

    return result;
  }
}

export { Roman };
