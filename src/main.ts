import { Surface } from "./surface";

const width = 64;
const height = 32;
const scaleFactor = 6;

document.addEventListener("DOMContentLoaded", function () {
    let screen = new Surface(width, height, "screen");
    document.body.appendChild(screen.canvas);
    screen.scale(scaleFactor);

    //fill the screen with random coAlors
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            screen.putPixel(getRandomColor(), x, y);
        }
    }
});

function getRandomColor(): string {
    let letters = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
