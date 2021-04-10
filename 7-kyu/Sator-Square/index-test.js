const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample Tests", () => {

  const tests = [
    [[['P', 'E', 'R'],
      ['E', 'V', 'E'],
      ['R', 'E', 'P']], true],

    [[['K', 'N', 'I', 'T'],          // warning:
      ['N', 'O', 'R', 'I'],          // O and 0 look similar
      ['I', 'R', '0', 'N'],          // but are not the same
      ['T', 'I', 'N', 'K']], false],
      
    [[['S', 'A', 'T', 'O', 'R'],
      ['A', 'R', 'E', 'P', 'O'],
      ['T', 'E', 'N', 'E', 'T'],
      ['O', 'P', 'E', 'R', 'A'],
      ['R', 'O', 'T', 'A', 'S']], true]
  ]

  const read =(title, tablet, test)=> `: ${title} Test Tablet #${test}\n:\n:   ${tablet.map(row=>row.join` `).join`\n:   `}\n:\n`

  for(let i in tests){
    it(`Tablet ${(i*1+1)}`, () => {
      let tablet = tests[i][0];
      let copy = tablet.map(row=>row.map(char=>char));
      let expected = tests[i][1];
      let submitted = isSatorSquare(tablet);
      let mutated = tablet+''!=copy+'';
      let message = read('Sample', tablet, i*1+1);
      if(mutated) {
        message = ': the function is not permitted to mutate the input\n';
        submitted = 'mutated';
        expected = 'unchanged';
      }
      else if(i === '1'){
        message += ': Reminder ~ some chars closely resemble other chars!\n';
      }
      assert.deepEqual(submitted, expected, message);
    });