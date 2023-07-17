class Appliance {
    constructor(name, brand, power) {
        this.name = name
        this.brand = brand
        this.power = power
        this.isPlugged = false
    }

    plugIn = function () {
        console.log(this.name + " is plugged!")
        this.isPlugged = true
    }

    unplug = function () {
        console.log(this.name + " is unplugged!")
        this.isPlugged = false
    }
}

class Conditioner extends Appliance {
    constructor(name, brand, power, maxAirVolumePerMin) {
        super(name, brand, power)
        this.maxAirVolumePerMin = maxAirVolumePerMin
    }
}

class Tv extends Appliance {
    constructor(name, brand, power, displayExtension) {
        super(name, brand, power)
        this.displayExtension = displayExtension
    }
}

const conditioner = new Conditioner("UltraCond", "Xiaomi", 500, 50)
const tv = new Tv("UltraTV", "LG", 120, "2560x1440")

conditioner.plugIn()
tv.plugIn()
tv.unplug()

console.log(conditioner)
console.log(tv)
