function Appliance(name, brand, power) {
    this.name = name
    this.brand = brand
    this.power = power
}
Appliance.prototype.isPlugged = false
Appliance.prototype.plugIn = function() {
    console.log(this.name + " is plugged!")
    this.isPlugged = true
}
Appliance.prototype.unplug = function() {
    console.log(this.name + " is unplugged!")
    this.isPlugged = false
}

function Conditioner(name, brand, power, maxAirVolumePerMin) {
    Appliance.call(this, name, brand, power)
    this.maxAirVolumePerMin = maxAirVolumePerMin
}
Conditioner.prototype = Object.create(Appliance.prototype)

function Tv(name, brand, power, displayExtension) {
    Appliance.call(this, name, brand, power)
    this.displayExtension = displayExtension
}
Tv.prototype = Object.create(Appliance.prototype)

const conditioner = new Conditioner("UltraCond", "Xiaomi", 500, 50)
const tv = new Tv("UltraTV", "LG", 120, "2560x1440")

conditioner.plugIn()
tv.plugIn()
tv.unplug()

console.log(conditioner)
console.log(tv)
