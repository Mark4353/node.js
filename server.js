console.log('Hello, world!');

const validator = require("validator");
const validatorEmail = email =>{
    return validator.isEmail(email);

};

console.log("is mango@mail.com a valid email&"
    ,validatorEmail("mango@mail.com")
);

console.log("Is Mangozedog.com a a valid email&"
    ,validatorEmail("Mangozedog.com")
);