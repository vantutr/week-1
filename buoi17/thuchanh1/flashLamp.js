class FlashLamp {
    constructor() {
        this.status = false;
        this.battery = null;
    }

    setBattery(battery) {
        this.battery = battery;
    }

    getBatteryInfo() {
        return this.battery ? this.battery.getEnergy() : "No battery";
    }

    light() {
        if (this.status && this.battery && this.battery.getEnergy() > 0) {
            alert("Lighting");
            this.battery.decreaseEnergy(); // Giảm pin khi đèn sáng
        } else {
            alert("Not lighting");
        }
    }

    turnOn() {
        this.status = true;
    }

    turnOff() {
        this.status = false;
    }
}