import { Surface } from "./surface";

const width = 32;
const height = 16;
const scaleFactor = 24;

const paletteColors = ["white", "black"];
const paletteSwatchSize = 32;
var currentColor = paletteColors[1];

const leftClick = 1;

document.addEventListener("DOMContentLoaded", function () {
    let screen = new Surface(width, height, "screen");
    document.body.appendChild(screen.canvas);
    screen.scale(scaleFactor);
    screen.canvas.addEventListener("mousemove", (event) => paint(event, screen));
    screen.canvas.addEventListener("mousedown", (event) => paint(event, screen));

    let palette = new Surface(paletteSwatchSize * 2, paletteSwatchSize, "palette");
    document.body.appendChild(palette.canvas);
    palette.fillRect(paletteColors[0], 0, 0, paletteSwatchSize, paletteSwatchSize);
    palette.fillRect(paletteColors[1], paletteSwatchSize, 0, paletteSwatchSize, paletteSwatchSize);
    palette.canvas.addEventListener("mousedown", (event) => pickColor(event, palette));
});

function paint(event: MouseEvent, surface: Surface) {
    if (event.buttons != leftClick) return;
    let coords = surface.clientToCanvasCoordinates(event.clientX, event.clientY);
    surface.putPixel(currentColor, coords.x, coords.y);
}

function pickColor(event: MouseEvent, paletteSurface: Surface) {
    if (event.buttons != leftClick) return;
    let coords = paletteSurface.clientToCanvasCoordinates(event.clientX, event.clientY);
    currentColor = paletteSurface.getPixel(coords.x, coords.y);
}
