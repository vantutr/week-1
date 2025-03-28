class TV{
    channel;volume;status;

    constructor(channel, volume, status) {
        this.channel = channel;
        this.volume = volume;
        this.status = status;
    }
    getStatus(){
        if(this.status){
            console.log("Tv dang bat");
        }else {
            console.log("Tv dang tat");
        }
    }
    turnOn(){
        return this.status = true;
    }
    turnOff(){
        return this.status = false;
    }
    getChannel(){
        return this.channel;
    }
    getVolume(){
        return this.volume;
    }
    setChannel(new_channel){
        this.channel = new_channel;
    }
    setVolume(new_volume){
        this.volume = new_volume;
    }
}