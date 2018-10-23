var canvas = document.querySelector("#canvas");
ctx = canvas.getContext('2d');


canvasWidth = canvas.width;
canvasHeight = canvas.height;

function step() {

    ctx.save()
    ctx.translate(Math.random() * 5 * canvasWidth / 2,Math.random() * 5 * canvasWidth/2)
    ctx.rotate(Math.random() * 5)
    ctx.scale(Math.random()*5,Math.random()*5)
    ctx.beginPath()
    ctx.fillStyle = `rgb(${Math.random() * 50}, ${Math.random() * 50}, ${255})`;
    ctx.moveTo(canvasWidth / 2 - 50, canvasHeight / 2 + 50)
    ctx.lineTo(canvasWidth / 2, canvasHeight / 2 - 50)
    ctx.lineTo(canvasWidth / 2 + 50, canvasHeight / 2 + 50)
    ctx.lineTo(canvasWidth / 2 - 50, canvasHeight / 2 + 50)
    ctx.fill()
    
    ctx.closePath()
    ctx.restore()
    
    
    ctx.save()
    ctx.translate(Math.random() * canvasWidth / 2 * 5, Math.random() * canvasWidth/2 * 5)
    ctx.rotate(Math.random() * 5)
    ctx.scale(Math.random()*5,Math.random()*5)
    ctx.beginPath()
    ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 30}, ${255})`;
    ctx.arc(50, 50, 50, 0, 2 * Math.PI, false);
    ctx.fill()
    
    ctx.closePath()
    ctx.restore()

    requestAnimationFrame(step);
  }
  

  step()