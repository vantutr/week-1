// Khởi tạo đối tượng Battery & FlashLamp
let battery = new Battery(10); // Pin khởi tạo 10%
let flashLamp = new FlashLamp();

flashLamp.setBattery(battery);

// Hiển thị thông tin pin
document.write("Battery info: " + flashLamp.getBatteryInfo() + "<br/>");
flashLamp.light(); // Đèn tắt nên báo "Not lighting"

document.write("Turn on<br/>");
flashLamp.turnOn();
flashLamp.light(); // Đèn sáng -> "Lighting"
document.write("Battery info: " + flashLamp.getBatteryInfo() + "<br/>"); // Pin giảm

document.write("Turn off<br/>");
flashLamp.turnOff();
flashLamp.light(); // Đèn tắt -> "Not lighting"