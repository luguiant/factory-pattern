const Phone = require('./phone');

class SansungGalaxy {
    constructor(serial){
        return new Phone(serial, 'Sansung Galaxy 10', '828 x 4000', '20GB', 76, 150, 8.5, 'Intel core I10', 2);
    }
}

module.exports = SansungGalaxy;