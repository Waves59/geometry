var canvas = document.querySelector("#canvas");
ctx = canvas.getContext('2d');
canvas.width = window.innerWidth
canvas.height = window.innerHeight
mouseX = 0
mouseY = 0

document.addEventListener('mousemove', function(event){
  mouseX = event.pageX
  mouseY = event.pageY  
});


class Triangle {
    constructor(){
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.speed = 0.01
    }

    draw(){
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.beginPath();
        ctx.moveTo(25, 25);
        ctx.lineTo(105, 25);
        ctx.lineTo(25, 105);
        ctx.fill();
    
        // Triangle filaire
        ctx.beginPath();
        ctx.moveTo(125, 125);
        ctx.lineTo(125, 45);
        ctx.lineTo(45, 125);
        ctx.closePath();
        ctx.stroke();
    }

    update(){
        let distX = mouseX - this.x
        let distY = mouseY - this.y

        this.x += distX;
        this.y += distY;


    }
}

let triangle = []
let max = 20

for(let i=0; i < max; i++){
    triangle.push(new Triangle())
}


triangle.forEach(element => {
    element.draw();
});

function animate(){

    triangle.forEach(element => {
        element.update()
    });

    requestAnimationFrame(animate)
}

animate()