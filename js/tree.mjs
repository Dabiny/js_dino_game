// 장애물 객체
class Tree1 {
    constructor() {
        this.x = $canvas.width;
        this.y = 210;
        this.width = 50;
        this.height = 90;
    }

    draw = () => {
        $ctx.fillStyle = "green";
        $ctx.fillRect(this.x, this.y, this.width, this.height);

        $ctx.fillStyle = "red";
        $ctx.fillRect(this.x, this.y, 10, 10);
    };
}

export {Tree1};