const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.height = 500;
canvas.width = 500;

let speed=3;

let ball={
    x : height/2,
    y : width -50,
    dx: speed,
    dy: speed +1,
    radius :7,
    draw: function(){
        ctx.beginPath();
        ctx.fillStyle = '#32cd32';
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
        ctx.closePath();
        ctx.fill();
    }
};

let paddle = {
    height: 10,
    width: 76,
    x: canvas.width / 2 - 76 / 2,
    draw: function() {
      ctx.beginPath();
      ctx.rect(this.x, canvas.height - this.height, this.width, this.height);
      ctx.fillStyle = "#230c33";
      ctx.fill();
      ctx.closePath();
    }
  };

