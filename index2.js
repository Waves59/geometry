var canvas = document.querySelector("#canvas");
ctx = canvas.getContext('2d');

class Rectangle {
    constructor(){
        
        this.x = 100
        this.y = 100
        this.vx = Math.random() * 10
        this.vy = Math.random() * 10
        this.radius = 50
        this.update = this.update.bind(this)

        console.log(this)
    }
    
    update(){
        
        this.x += this.vx;
        this.y += this.vy;
        if (this.y > canvas.height - this.radius || this.y < 0 + this.radius) {
            this.vy = -this.vy;
        }
        if (this.x > canvas.width - this.radius || this.x < 0 + this.radius) {
            this.vx = -this.vx;
        }
        

        this.draw()
        
    }

    draw(){
        ctx.save()
        ctx.translate(this.x,this.y)
        ctx.beginPath()
        ctx.fillStyle = 'green'
        ctx.rect(0, 0, 100, 100)
        ctx.fill()
        ctx.closePath()
        ctx.restore()
    }
}


let rect = []

let max = 20;
for(let i = 0; i < max; i++){
    rect.push(new Rectangle())
}   




function update() {

    ctx.clearRect(0,0, canvas.width, canvas.height)

    for(let i=0; i < rect.length; i++){
        rect[i].update()
    }
    requestAnimationFrame(update)
}

update()