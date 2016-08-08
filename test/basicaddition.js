const expect = require('expect')
const add = require('../lib/add')

describe('add', function() {
  describe('#add()', function() {
    it('should give you the sum of the two numbers entered', function() {
      var firstnumber = 22;
      var secondnumber =  30;
      var sum = add(firstnumber,secondnumber)
      expect(sum).toBe(52);

      var firstnumber = 1000;
      var secondnumber =  1;
      var sum = add(firstnumber,secondnumber)
      expect(sum).toBe(1001);

      var firstnumber = -99;
      var secondnumber =  101;
      var sum = add(firstnumber,secondnumber)
      expect(sum).toBe(2);

      var firstnumber = 2;
      var secondnumber =  -2;
      var sum = add(firstnumber,secondnumber)
      expect(sum).toBe(0);

    });
  });
})