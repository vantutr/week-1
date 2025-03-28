class Switch {
    constructor(){
        this.status = false;
    }
    connectLight(light){
        if(this.status && light.status) {
            console.log("Đèn đang bật");
        } else {
            console.log("Chưa bật đèn");
        }
    }
    switchOn(){
        this.status = true;
    }
    switchOff(){
        this.status = false;
    }
}