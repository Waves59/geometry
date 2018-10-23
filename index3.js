var canvas = document.querySelector("#canvas");
ctx = canvas.getContext('2d');
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let a = 0
class Particle {
    constructor(){
        
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = Math.random() * 5
        this.vy = Math.random() * 5
        this.radius = 5
        this.update = this.update.bind(this)
    }
    
    update(){
        a += 1 / 60 * 5
        this.x += this.vx + Math.sin(a);
        this.y += this.vy + Math.sin(a) ;
        if (this.y > canvas.height || this.y < 0) {
            this.y = 0;
        }
        if (this.x > canvas.width || this.x < 0) {
            this.x = 0;
        }

        this.draw()
        
    }

    draw(){
        ctx.save()
        ctx.translate(this.x,this.y)
        ctx.beginPath()
        ctx.fillStyle = `rgb(128, ${255 -51 * canvas.width/this.x}, ${60 * canvas.height/this.y}`
        //ctx.fillStyle = `rgb(${canvas.width / this.x + 40}, ${canvas.width / this.x+60}, 0)`;
        ctx.arc(0,0,this.radius,0,100)
        ctx.fill()
        ctx.closePath()
        ctx.restore()
    }

    line(targetX, targetY){
        ctx.beginPath();
        ctx.moveTo(this.x,this.y)
        ctx.lineTo(targetX,targetY)
        ctx.setLineDash([5, 15]);
        ctx.strokeStyle = `rgb(${canvas.width / this.x}, ${canvas.width / this.x}, 120)`;
        ctx.stroke()
        ctx.closePath()
    }
}


let point = []

let max = 200;
for(let i = 0; i < max; i++){
    point.push(new Particle())
}   




function update() {

    for(let i=0; i < point.length; i++){
        for(let x=0; x < point.length; x++){
            var a = point[i].x - point[x].x;
            var b = point[i].y - point[x].y;

            var c = Math.sqrt( a*a + b*b );
            if(c < 200  ) {
                point[i].line(point[x].x, point[x].y)

            }
            
        }
        point[i].update()
    }

    requestAnimationFrame(update)
}

update()