let circle = document.querySelector("circle");
circle.setAttribute("fill", "cyan");


let canvas = document.getElementById("canvas1");
let context = canvas.getContext("2d");
context.fillStyle = "red";
context.fillRect(10, 10, 100, 50);

let cx1 = document.getElementById("canvas2").getContext("2d");
    cx1.strokeStyle = "blue";
    cx1.strokeRect(5, 5, 50, 50);
    cx1.lineWidth = 5;
    cx1.strokeRect(135, 5, 50, 50);

let cx2 = document.getElementById("canvas3").getContext("2d");
    cx2.beginPath();
    for (let y = 10; y < 100; y += 10) {
        cx2.moveTo(10, y);
        cx2.lineTo(90, y);
    }
    cx2.stroke();

    
let cx3 = document.getElementById("canvas4").getContext("2d");
    cx3.beginPath();
    cx3.moveTo(75, 0);
    cx3.lineTo(0, 100);
    cx3.lineTo(150, 100);
    // cx3.moveTo(50, 10);
    // cx3.lineTo(10, 70);
    // cx3.lineTo(90, 70);
    cx3.fill();
    
  let cx4 = document.getElementById("canvas5").getContext("2d");
    cx4.beginPath();
    cx4.moveTo(0, 100);
    // control=(60,10) goal=(90,90)
    cx4.quadraticCurveTo(75, 0, 150, 100);
    cx4.lineTo(75, 0);
    cx4.closePath();
    cx4.stroke();

    
  let cx5 = document.getElementById("canvas6").getContext("2d");
    cx5.beginPath();
    cx5.moveTo(10, 90);
    // control1=(10,10) control2=(90,10) goal=(50,90)
    cx5.bezierCurveTo(10, 10, 90, 10, 50, 90);
    cx5.lineTo(90, 10);
    cx5.lineTo(10, 10);
    cx5.closePath();
    cx5.stroke();

    
  let cx6 = document.getElementById("canvas7").getContext("2d");
  cx6.beginPath();
  // center=(50,50) radius=40 angle=0 to 7 (2π = full circle)
  cx6.arc(50, 50, 40, 0, 6.283);
  // center=(150,50) radius=40 angle=0 to ½π
  cx6.arc(150, 50, 40, 0, 0.5 * Math.PI);
  cx6.stroke();

  const results = [
    {name: "Satisfied", count: 1043, color: "blue"},
    {name: "Neutral", count: 563, color: "green"},
    {name: "Unsatisfied", count: 510, color: "red"},
    {name: "No comment", count: 175, color: "black"}
  ];


  let cx7 = document.getElementById("canvas8").getContext("2d");
  let total = results
    .reduce((sum, {count}) => sum + count, 0);
  // Start at the top
  let currentAngle = -0.5 * Math.PI;
  for (let result of results) {
    let sliceAngle = (result.count / total) * 2 * Math.PI;
    cx7.beginPath();
    // center=100,100, radius=100
    // from current angle, clockwise by slice's angle
    cx7.arc(100, 100, 100,
           currentAngle, currentAngle + sliceAngle);
    currentAngle += sliceAngle;
    cx7.lineTo(100, 100);
    cx7.fillStyle = result.color;
    cx7.fill();
  }

  
  let cx8 = document.getElementById("canvas9").getContext("2d");
  cx8.font = "28px Georgia";
  cx8.fillStyle = "fuchsia";
  cx8.fillText("I can draw ", 10, 50);
  cx8.fillStyle = "lime";
  cx8.fillText("text, too!", 146, 50);

  
  let cx9 = document.getElementById("canvas10").getContext("2d");
  let img1 = document.createElement("img");
  img1.src = "hat.png";
  img1.addEventListener("load", () => {
    for (let x = 10; x < 200; x += 30) {
        cx9.drawImage(img1, x, 10);
    }
  });

  
  let cx10 = document.getElementById("canvas11").getContext("2d");
  let img2 = document.createElement("img");
  img2.src = "player.png";
  let spriteW = 24, spriteH = 30;
  img2.addEventListener("load", () => {
    let cycle = 0;
    setInterval(() => {
        cx10.clearRect(0, 0, spriteW, spriteH);
        cx10.drawImage(img2,
            // source rectangle
            cycle * spriteW, 0, spriteW, spriteH,
            // destination rectangle
            0, 0, spriteW, spriteH);
      cycle = (cycle + 1) % 8;
    }, 160);//120
  });

  //flipped sprite (better performance)
  let cx11 = document.getElementById("canvas12").getContext("2d");
  let img3 = document.createElement("img");
  img3.src = "player2.png";
  let spriteW2 = 24, spriteH2 = 30;
  img3.addEventListener("load", () => {
    let cycle2 = 0;
    setInterval(() => {
        cx11.clearRect(0, 0, spriteW2, spriteH2);
        cx11.drawImage(img3,
            // source rectangle
            cycle2 * spriteW2, 0, spriteW2, spriteH2,
            // destination rectangle
            0, 0, spriteW2, spriteH2);
            cycle2 = (cycle2 + 1) % 8;
    }, 160);//120
  });

  
  let cx12 = document.getElementById("canvas13").getContext("2d");
  cx12.scale(3, .5);
  cx12.beginPath();
  cx12.arc(50, 50, 40, 0, 7);
  cx12.lineWidth = 3;
  cx12.stroke();

  function flipHorizontally(context, around) {
    context.translate(around, 0);
    context.scale(-1, 1);
    context.translate(-around, 0);
  }

  let cx13 = document.getElementById("canvas14").getContext("2d");
  let img4 = document.createElement("img");
  img4.src = "player.png";
  let spriteW3 = 24, spriteH3 = 30;
  img4.addEventListener("load", () => {
    flipHorizontally(cx13, 100 + spriteW3 / 2);
    cx13.drawImage(img4, 0, 0, spriteW3, spriteH3,
                 100, 0, spriteW3, spriteH3);
  });  

  //flipped canvas (worse performance)
  let cx14 = document.getElementById("canvas15").getContext("2d");
  let img5 = document.createElement("img");
  img5.src = "player.png";
  let spriteW4 = 24, spriteH4 = 30;
  img5.addEventListener("load", () => {
    let cycle = 0;
    setInterval(() => {
        cx14.clearRect(0, 0, spriteW4, spriteH4);
        flipHorizontally(cx14, 0 + spriteW4 / 2);
        cx14.drawImage(img5,
            // source rectangle
            cycle * spriteW4, 0, spriteW4, spriteH4,
            // destination rectangle
            0, 0, spriteW4, spriteH4);
        flipHorizontally(cx14, 0 + spriteW4 / 2);
      cycle = (cycle + 1) % 8;
    }, 160);//120
  });

  
  let cx15 = document.getElementById("canvas16").getContext("2d");
  function branch(length, angle, scale) {
    cx15.fillRect(0, 0, 1, length);
    if (length < 8) return;
    cx15.save();
    cx15.translate(0, length);
    cx15.rotate(-angle);
    branch(length * scale, angle, scale);
    cx15.rotate(2 * angle);
    branch(length * scale, angle, scale);
    cx15.restore();
  }
  cx15.translate(300, 0);
  branch(60, 0.5, 0.8);

  class CanvasDisplay {
    constructor(parent, level) {
      this.canvas = document.createElement("canvas");
      this.canvas.width = Math.min(600, level.width * scale);
      this.canvas.height = Math.min(450, level.height * scale);
      parent.appendChild(this.canvas);
      this.cx = this.canvas.getContext("2d");
  
      this.flipPlayer = false;
  
      this.viewport = {
        left: 0,
        top: 0,
        width: this.canvas.width / scale,
        height: this.canvas.height / scale
      };
    }
  
    clear() {
      this.canvas.remove();
    }
  }

  CanvasDisplay.prototype.syncState = function(state) {
    this.updateViewport(state);
    this.clearDisplay(state.status);
    this.drawBackground(state.level);
    this.drawActors(state.actors);
  };

  CanvasDisplay.prototype.updateViewport = function(state) {
    let view = this.viewport, margin = view.width / 3;
    let player = state.player;
    let center = player.pos.plus(player.size.times(0.5));
  
    if (center.x < view.left + margin) {
      view.left = Math.max(center.x - margin, 0);
    } else if (center.x > view.left + view.width - margin) {
      view.left = Math.min(center.x + margin - view.width,
                           state.level.width - view.width);
    }
    if (center.y < view.top + margin) {
      view.top = Math.max(center.y - margin, 0);
    } else if (center.y > view.top + view.height - margin) {
      view.top = Math.min(center.y + margin - view.height,
                          state.level.height - view.height);
    }
  };

  CanvasDisplay.prototype.clearDisplay = function(status) {
    if (status == "won") {
      this.cx.fillStyle = "rgb(68, 191, 255)";
    } else if (status == "lost") {
      this.cx.fillStyle = "rgb(44, 136, 214)";
    } else {
      this.cx.fillStyle = "rgb(52, 166, 251)";
    }
    this.cx.fillRect(0, 0,
                     this.canvas.width, this.canvas.height);
  };

  let otherSprites = document.createElement("img");
  otherSprites.src = "sprites.png";
  
  CanvasDisplay.prototype.drawBackground = function(level) {
    let {left, top, width, height} = this.viewport;
    let xStart = Math.floor(left);
    let xEnd = Math.ceil(left + width);
    let yStart = Math.floor(top);
    let yEnd = Math.ceil(top + height);
  
    for (let y = yStart; y < yEnd; y++) {
      for (let x = xStart; x < xEnd; x++) {
        let tile = level.rows[y][x];
        if (tile == "empty") continue;
        let screenX = (x - left) * scale;
        let screenY = (y - top) * scale;
        let tileX = tile == "lava" ? scale : 0;
        this.cx.drawImage(otherSprites,
                          tileX,         0, scale, scale,
                          screenX, screenY, scale, scale);
      }
    }
  };

  let playerSprites = document.createElement("img");
  playerSprites.src = "player.png";
  const playerXOverlap = 4;
  
  CanvasDisplay.prototype.drawPlayer = function(player, x, y,
                                                width, height){
    width += playerXOverlap * 2;
    x -= playerXOverlap;
    if (player.speed.x != 0) {
      this.flipPlayer = player.speed.x < 0;
    }
  
    let tile = 8;
    if (player.speed.y != 0) {
      tile = 9;
    } else if (player.speed.x != 0) {
      tile = Math.floor(Date.now() / 60) % 8;
    }
  
    this.cx.save();
    if (this.flipPlayer) {
      flipHorizontally(this.cx, x + width / 2);
    }
    let tileX = tile * width;
    this.cx.drawImage(playerSprites, tileX, 0, width, height,
                                     x,     y, width, height);
    this.cx.restore();
  };

  CanvasDisplay.prototype.drawActors = function(actors) {
    for (let actor of actors) {
      let width = actor.size.x * scale;
      let height = actor.size.y * scale;
      let x = (actor.pos.x - this.viewport.left) * scale;
      let y = (actor.pos.y - this.viewport.top) * scale;
      if (actor.type == "player") {
        this.drawPlayer(actor, x, y, width, height);
      } else {
        let tileX = (actor.type == "coin" ? 2 : 1) * scale;
        this.cx.drawImage(otherSprites,
                          tileX, 0, width, height,
                          x,     y, width, height);
      }
    }
  };