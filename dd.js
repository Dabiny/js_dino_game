// import {Dino} from './js/dino.mjs';

(() => {
    $canvas = document.getElementById("canvas");
    $ctx = $canvas.getContext("2d");

    $canvas.width = window.innerWidth - 100;
    $canvas.height = window.innerHeight - 500;

    // const dino = new Dino;

    const move = () => {
        requestAnimationFrame(move);
        $ctx.clearRect(0, 0, $canvas.width, $canvas.height);
        tree1.x--;
        if (tree1.x === 0) tree1.x = $canvas.width;
        if (isCollision(tree1, dino)) return;

        map.gameDraw();
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


    // const init = () => {
    //     window.addEventListener('DOMContentLoaded', () => {
    //         const map = new GameMap();
    //         map.startDraw();

    //     })
    // };

    // init();
})();
