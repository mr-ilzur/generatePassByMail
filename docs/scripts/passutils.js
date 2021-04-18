export class PasswordGenerator
{
  generate(lenPass, useNum, usePunct, useUppSymbol) {

    if (lenPass < 4 || lenPass > 16) {
      return {
          ok: false,
          errMsg: 'Максимальная длина пароля: 16 | Минимальная длина пароля: 4'
        }
  }

    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let punctuation = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '~', '`', '}', '{', '[', ']'];
    let consonantsLower = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'th', 'kh', 'ch', 'zh', 'sh', 'ph'];
    let vowelsLower= ['a', 'e', 'i', 'o', 'u',];
    let vowelsUpper= ['A', 'E', 'I', 'O', 'U',];

    function shuffle(a, b) {
      return Math.random() - 0.5;
    }

    numbers.sort(shuffle);
    punctuation.sort(shuffle);
    consonantsLower.sort(shuffle);
    vowelsLower.sort(shuffle);
    vowelsUpper.sort(shuffle);

    function mixArrLow(consonantsLower, vowelsLower) {
      let arrLow = [];
      for (let i = 0; i < consonantsLower.length; i++) {
          arrLow.push(consonantsLower[i]);
          let randVow = Math.floor(Math.random() * vowelsLower.length);
          arrLow.push(vowelsLower[randVow]);
      };

      return arrLow;
    };

    let mixLow = mixArrLow(consonantsLower, vowelsLower);



    let password = '';
    let genArr = [];
      let outGen = '';
      genArr = genArr.concat(mixLow);
      genArr.length = lenPass;
      for (let i = 0; i < lenPass; i++) {
        outGen += genArr[i];
      };
      password = outGen;

    if (useNum) {
      let numArr = [];
      let out = '';
      numArr = numArr.concat(numbers[Math.floor(Math.random()*numbers.length)], mixLow);
      numArr.length = lenPass;
      for (let i = 0; i < lenPass; i++) {
        out += numArr[i];
      };
      password = out;
    };

    if (usePunct) {
      let punArr = [];
      let out = '';
      punArr = punArr.concat(punctuation[Math.floor(Math.random()*punctuation.length)], mixLow);
      punArr.length = lenPass;
      for (let i = 0; i < lenPass; i++) {
        out += punArr[i];
      };
      password = out;
    };

    if (useUppSymbol) {
      let uppArr = [];
      let out = '';
      uppArr = uppArr.concat(vowelsUpper[Math.floor(Math.random()*vowelsUpper.length)], mixLow);
      uppArr.length = lenPass;
      for (let i = 0; i < lenPass; i++) {
        out += uppArr[i];
      };
      password = out;
    };

    if (useNum && usePunct) {
      let numPun = [];
      let out = '';
      numPun = numPun.concat(numbers[Math.floor(Math.random()*numbers.length)], punctuation[Math.floor(Math.random()*punctuation.length)], mixLow);
      numPun.length = lenPass;
      for (let i = 0; i < lenPass; i++) {
        out += numPun[i];
      };
      password = out;
    };

    if (usePunct && useUppSymbol) {
      let punUpp = [];
      let out = '';
      punUpp = punUpp.concat(punctuation[Math.floor(Math.random()*punctuation.length)], vowelsUpper[Math.floor(Math.random()*vowelsUpper.length)], mixLow);
      punUpp.length = lenPass;
      for (let i = 0; i < lenPass; i++) {
        out += punUpp[i];
      };
      password = out;
    };

    if (useNum && useUppSymbol) {
      let numUpp = [];
      let out = '';
      numUpp = numUpp.concat(numbers[Math.floor(Math.random()*numbers.length)], vowelsUpper[Math.floor(Math.random()*vowelsUpper.length)], mixLow);
      numUpp.length = lenPass;
      for (let i = 0; i < lenPass; i++) {
        out += numUpp[i];
      };
      password = out;
    };

    if (useNum && usePunct && useUppSymbol) {
      let numPunUpp = [];
      let outNPU = '';
      numPunUpp = numPunUpp.concat(numbers[Math.floor(Math.random()*numbers.length)], punctuation[Math.floor(Math.random()*punctuation.length)], vowelsUpper[Math.floor(Math.random()*vowelsUpper.length)], mixLow);
      numPunUpp.length = lenPass;
      for (let i = 0; i < lenPass; i++) {
        outNPU += numPunUpp[i];
      };
      password = outNPU;
    };

    return {
        ok: true,
        password: password
    };
  };
}
