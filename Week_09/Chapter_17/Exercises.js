  let cx1 = document.getElementById("canvas1").getContext("2d");
  let cx2 = document.getElementById("canvas2").getContext("2d");
  let cx3 = document.getElementById("canvas3").getContext("2d");
  let cx4 = document.getElementById("canvas4").getContext("2d");
  let cx5 = document.getElementById("canvas5").getContext("2d");

  cx1.beginPath();
  cx1.moveTo(25, 0);
  cx1.lineTo(0, 50);
  cx1.lineTo(100, 50);
  cx1.lineTo(75, 0);
  cx1.fillStyle = "lightblue";
  cx1.fill();

  cx2.beginPath();
  cx2.moveTo(0, 50);
  cx2.lineTo(50, 100);
  cx2.lineTo(100, 50);
  cx2.lineTo(50, 0);
  cx2.fillStyle = "red";
  cx2.fill();

  cx3.beginPath();
    for (let y = 0; y < 100; y += 20) {
        cx3.moveTo(0, y);
        cx3.lineTo(100, y+10);
        cx3.lineTo(0, y+20);
    }
    cx3.stroke();

cx4.beginPath();
for (i=0; i< 200; i++) {
    angle = .1 * i;
    x=50+(2*angle)*Math.cos(angle);
    y=50+(2*angle)*Math.sin(angle);
    cx4.lineTo(x, y);
  }
cx4.stroke();

cx5.beginPath();
cx5.moveTo(15, 15);
// control=(60,10) goal=(90,90)
cx5.quadraticCurveTo(50, 50, 50, 0);
cx5.quadraticCurveTo(50, 50, 85, 15);
cx5.quadraticCurveTo(50, 50, 100, 50);
cx5.quadraticCurveTo(50, 50, 85, 85);
cx5.quadraticCurveTo(50, 50, 50, 100);
cx5.quadraticCurveTo(50, 50, 15, 85);
cx5.quadraticCurveTo(50, 50, 0, 50);
cx5.quadraticCurveTo(50, 50, 15, 15);
cx5.fillStyle = "yellow";
cx5.fill();
cx5.stroke();