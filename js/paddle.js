"use strict";
export class Paddle {
    /**x軸 */
    X;
    /*y軸*/ 
    y;
    /*横幅*/ 
    width;
    /** 縦 */
    height;
    dx;
    speed;

    constructor(context,x,y,width,height,speed) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.dx = 0;
        this.speed = speed;
    }
    move() {
        this.x += this.dx;
    }

    draw() {
        this.context.beginPath();
        this.context.rect(this.x,this.y,this.width,this.height);
        this.context.fillStyle = "green";
        this.context.fill();
        this.context.closePath();
    }
}