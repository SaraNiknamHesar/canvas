let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext("2d");
// طراحی مربع
// // تغییر مبدا از سمت چپ بالا
// c.translate(100, 100);
// // تغییر فونت
// c.font = "30px"
// c.fillText("hello world", 100, 100)
// c.fillStyle = "#27ae60";
// c.fillRect(100, 0, 100, 100);
// c.fillStyle = "#3498db";
// c.fillRect(300, 100, 100, 100);
// c.fillStyle = "#8e44ad";
// c.fillRect(500, 0, 100, 100);
// پایان طراحی مربع

// رسم خط
// c.beginPath();
// c.lineTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "#27ae60";
// c.closePath();
// c.stroke();

// c.fill();
// c.fillStyle="#27ae60";

// خط جدا
// c.beginPath();
// c.lineTo(600, 200);
// c.lineTo(800, 300);
// c.stroke();

// رسم دایره یا نصف دایره که کمان نام دارد
// c.beginPath();
// c.arc(300, 300, 50, Math.PI / 2, 3 * Math.PI);
// c.strokeStyle = "red";
// c.fillStyle = "red";
// c.stroke();
// c.fill();
for (let i = 0; i < 100; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 50, 0, 2 * Math.PI);
    c.strokeStyle = "red";
    c.fillStyle = "red";
    c.stroke();
    c.fill();

}
//  حدف از کنوس به شکل مستطیل مانند اگر بخواهیم کل مرورگر پاک کنیم روش دوم
// در انیمیشن اینا خیلی جوابه
// c.clearRect(100,200,200,200);
// c.clearRect(0, 0, window.innerWidth, window.innerHeight);
// اتمام رسم دایره یا نصف دایره که کمان نام دارد