const iPhoneXS = require('./iphonexr');
const SansungGalaxy  = require('./sansung-gx');

class Phonefactory {
    create(type, serial){
        switch(type){
            case 'iphone': 
                return new iPhoneXS(serial);

            case 'sansung':
                return new SansungGalaxy(serial);

            default: {
                console.log('phone not found.');
            }
        }
    }
}
module.exports = new Phonefactory;