class GameMap {
    constructor($ctx, $canvas) {
        this.x = 0;
        this.y = 150;

        
        this.$ctx = $ctx;
        this.$canvas = $canvas;
        
        this.width = 500;
        this.height = 160;
    }

    startDraw() {}

    gameDraw() {
        this.$ctx.beginPath();
        this.$ctx.moveTo(this.x, this.y);
        this.$ctx.lineTo(this.width, this.y);

        this.$ctx.stroke();
    }
}

export {GameMap};