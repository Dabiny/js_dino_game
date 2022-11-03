import { Dino } from "./js/dino.mjs";
import { Tree1 } from "./js/tree.mjs";
import { GameMap } from "./js/gamemap.mjs";

(() => {
    const $canvas = document.getElementById('canvas');
    const $ctx = $canvas.getContext("2d");

    const $startH3 = document.querySelector('.start-h3');

    $canvas.width = 436;
    $canvas.height = 170;

    let isStart = false; // 스타트를 했는지 안했는지 
    let isJump = false;
    let isCollision = false;

    const onKeydown = (e) => {
        if (e.keyCode !== 32) return; 

        isStart = true;
        $startH3.style.display = 'none';
        if (isStart) move();
    }

    const move = () => {
        
    }

    const init = () => {
        window.addEventListener("DOMContentLoaded", () => {
            const dino = new Dino($ctx);
            const gameMap = new GameMap($ctx, $canvas);
            
            gameMap.gameDraw();
            dino.draw();
            
            window.addEventListener('keydown', onKeydown);
        });
    };
    init();
})();

