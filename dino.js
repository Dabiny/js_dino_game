(() => {
    $canvas = document.getElementById("canvas");
    $ctx = $canvas.getContext("2d");

    $canvas.width = window.innerWidth - 100;
    $canvas.height = window.innerHeight - 500;

    class Map {
        constructor() {
            this.x = -100;
            this.y = 300;

            this.width = $canvas.width;
            this.height = 80;
        }

        draw() {
            $ctx.beginPath();
            $ctx.moveTo(this.x, this.y);
            $ctx.lineTo(this.width, this.y);

            $ctx.stroke();
        }
    }

    class Dino {
        constructor() {
            this.x = 20;
            this.y = 210;

            this.collisionX = 20.2;
            this.collisionY = 210;

            this.width = 50;
            this.height = 90;
        }

        draw() {
            $ctx.fillStyle = "orange";
            $ctx.fillRect(this.x, this.y, this.width, this.height);

            $ctx.fillStyle = "blue";
            $ctx.fillRect(this.x, this.y, 10, 10);
        }
    }

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

            $ctx.fillStyle = 'red';
            $ctx.fillRect(this.x, this.y, 10, 10);
        };
    }

    const dino = new Dino();
    const tree1 = new Tree1();
    const map = new Map();

    const move = () => {
        requestAnimationFrame(move);
        $ctx.clearRect(0, 0, $canvas.width, $canvas.height);
        tree1.x--;
        if (tree1.x === 0) tree1.x = $canvas.width;
        if (isCollision(tree1, dino)) return;

        map.draw();
        dino.draw();
        tree1.draw();
    };

    const isCollision = (enemy, player) => {
        return (
            enemy.x < player.x + player.width &&
            enemy.x + enemy.width > player.x &&
            enemy.y < player.y + player.height &&
            enemy.y + enemy.height > player.y
        );
    };

    move();
})();
