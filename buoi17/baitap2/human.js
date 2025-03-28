class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    setName(name) {
        this.name = name;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    getGender() {
        return this.gender ? "Giới tính Nam" : "Giới tính Nữ";
    }

    checkApple(apple) {
        return apple.getWeight();
    }

    speak(message) {
        console.log(`${this.name} speaking: ${message}`);
    }

    eat(apple) {
        if (apple.getWeight() > 0) {
            apple.weight--;
            this.weight++;
            console.log(`${this.name} đang ăn, táo còn ${apple.getWeight()} miếng`);
        } else {
            console.log("Đã ăn hết táo");
        }
    }
}


// class Human{
//     constructor(name,gender,weight){
//         this.name = name;
//         this.gender = gender;
//         this.weight = weight;
//     }
//     setName(name){
//         return this.name;
//     }
//     setWeight(weight){
//         return this.weight;
//     }
//     setGender(){
//         if(this.gender == false){
//             console.log("Giới tính Nữ");
//         }else{
//             console.log("Giới tính Nam");
//         }
//     }
//     checkApple(Apple){
//        return  Apple.getWeight;
//     }
//     speak(masege){
//         console.log(`${this.name} speaking ${masege}`);
//     }
//     eat(Apple){
//         if(Apple.weight>0) {
//             console.log(`${this.name} đang ăn, táo còn ${Apple.getWeight()} miếng`);
//             Apple.weight--;
//             this.weight++;
//         } else{
//             console.log("Đã ăn hết")
//         }
//
//     }
// }