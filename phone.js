class Phone{
    constructor(
        serial='0100000',
        model='Generic',
        resolution='750x1334',
        ram='2 GB',
        width=67.5,
        height=138.9,
        depth=7.3,
        processor='Generic',
        camare=2
    ){
        this.serial = serial;
        this.configuration = {
            model,
            processor,
            ram,
            resolution,
            width,
            depth,
            height,
            camare,
            serial
        }
    }

    dial(num){
        console.log(num);
    }

    displayConfig(){
        console.log(this.configuration);
    }
}

module.exports = Phone;