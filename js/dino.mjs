// 공룡 객체
class Dino {
    constructor(props) {
        this.x = 30;
        this.y = 40;

        this.collisionX = 20.2;
        this.collisionY = 210;

        this.width = 80;
        this.height = 90;

        this.$ctx = props;
        this.dot = 5;
    }

    draw() {
        // this.$ctx.fillStyle = "orange";
        // this.$ctx.fillRect(this.x, this.y, this.width, this.height);

        this.$ctx.fillStyle = "blue";
        //this.$ctx.fillRect(this.x, this.y, 10, 10);

        this.$ctx.fillStyle = 'rgb(50, 50, 50)';
        // 머리
        for (let i = this.x + 38; i < this.x + 73; i += this.dot) {
            this.$ctx.fillRect(i, this.y, this.dot, this.dot);
        }
        for (let i = this.y + 23; i < this.y + 66; i += this.dot) {
            for (let j = this.x + 13; j < this.x + 29; j += this.dot) {
                this.$ctx.fillRect(i, j, this.dot, this.dot);
            }
        }  
        for (let i = this.y + 23; i < this.y + 43; i += this.dot) {
            for (let j = this.x + 30; j < this.x + 39; j += this.dot) {
                this.$ctx.fillRect(i, j, this.dot, this.dot);
            }
        }
         
        // 몸통
        for (let i = this.x + 33; i < this.x + 73; i += this.dot){
            this.$ctx.fillRect(i, this.y + 29, this.dot, this.dot);
        }
        for (let i = this.y + 19; i < this.y + 40; i += this.dot) {
            for (let j = this.x + 40; j < this.x + 65; j += this.dot) {
                this.$ctx.fillRect(i, j, this.dot, this.dot);
            }
        }
        this.$ctx.fillRect(this.x + 25, this.y + 35, 25, 25);
        this.$ctx.fillRect(this.x + 10, this.y + 40, 25, 20);

        // 꼬리
        this.$ctx.fillRect(this.x + 5, this.y + 35, 10, 20);
        this.$ctx.fillRect(this.x, this.y + 25, 5, 20);

        // 팔
        this.$ctx.fillRect(this.x + 50, this.y + 40, 15, 5);
        this.$ctx.fillRect(this.x + 60, this.y + 45, 5, 5);

        // 오른다리
        this.$ctx.fillRect(this.x + 15, this.y + 60, 15, 5);
        this.$ctx.fillRect(this.x + 15, this.y + 65, 10, 5);
        this.$ctx.fillRect(this.x + 15, this.y + 70, 5, 10);
        this.$ctx.fillRect(this.x + 20, this.y + 75, 5, 5);
        
        // 왼다리
        this.$ctx.fillRect(this.x + 35, this.y + 60, 10, 5);
        this.$ctx.fillRect(this.x + 35, this.y + 65, 5, 10);
        this.$ctx.fillRect(this.x + 35, this.y + 75, 10, 5);
        
        
        // 눈
        this.$ctx.fillStyle = 'white';
        this.$ctx.fillRect (this.x + 43, this.y + 10, this.dot, this.dot);

    }
}

export {Dino};