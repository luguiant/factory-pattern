const Phone = require('./phone');

class iPhoneXS {
    constructor(serial){
        return new Phone(serial,'iPhone XS', '828 x 1792', '8GB', 76, 150, 8.5, 'Intel core I9', 2);
    }
}

module.exports = iPhoneXS;
