const validator = require('validator')


console.log(validator.isEmail('test@email.com'))
console.log(validator.isEmail('test=email.com'))


console.log(validator.isUppercase('HI DARLING'))
console.log(validator.isUppercase('hi darling'))