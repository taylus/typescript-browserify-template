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
    let screenBounds = screen.canvas.getBoundingClientRect();
    screen.canvas.addEventListener("mousemove", (event) => paint(event, screen, screenBounds));
    screen.canvas.addEventListener("mousedown", (event) => paint(event, screen, screenBounds));

    let palette = new Surface(paletteSwatchSize * 2, paletteSwatchSize, "palette");
    document.body.appendChild(palette.canvas);
    let paletteBounds = palette.canvas.getBoundingClientRect();
    palette.fillRect(paletteColors[0], 0, 0, paletteSwatchSize, paletteSwatchSize);
    palette.fillRect(paletteColors[1], paletteSwatchSize, 0, paletteSwatchSize, paletteSwatchSize);
    palette.canvas.addEventListener("mousedown", (event) => pickColor(event, palette, paletteBounds));
});

function paint(event: MouseEvent, surface: Surface, surfaceBounds: ClientRect) {
    if (event.buttons != leftClick) return;
    let coords = clientToCanvasCoordinates(surfaceBounds, event.clientX, event.clientY, scaleFactor);
    surface.putPixel(currentColor, coords.x, coords.y);
}

function pickColor(event: MouseEvent, paletteSurface: Surface, paletteBounds: ClientRect) {
    if (event.buttons != leftClick) return;
    let coords = clientToCanvasCoordinates(paletteBounds, event.clientX, event.clientY);
    currentColor = paletteSurface.getPixel(coords.x, coords.y);
}

//https://stackoverflow.com/questions/17130395/real-mouse-position-in-canvas
function clientToCanvasCoordinates(bounds: ClientRect, x: number, y: number, scaleFactor: number = 1) {
    return {
        x: Math.floor((x - bounds.left) / scaleFactor),
        y: Math.floor((y - bounds.top) / scaleFactor)
    }
}
