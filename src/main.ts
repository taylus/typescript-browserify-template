import { Surface } from "./surface";

const width = 32;
const height = 16;
const scaleFactor = 24;

document.addEventListener("DOMContentLoaded", function () {
    let screen = new Surface(width, height, "screen");
    document.body.appendChild(screen.canvas);
    screen.scale(scaleFactor);
    let screenBounds = screen.canvas.getBoundingClientRect()
    screen.canvas.addEventListener("mousemove", (event) => paint(event, screen, screenBounds));
    screen.canvas.addEventListener("mousedown", (event) => paint(event, screen, screenBounds));
});

function paint(event: MouseEvent, surface: Surface, surfaceBounds: ClientRect) {
    if (event.buttons != 1) return;
    let coords = clientToCanvasCoordinates(surfaceBounds, event.clientX, event.clientY);
    surface.putPixel("black", coords.x, coords.y);
}

//https://stackoverflow.com/questions/17130395/real-mouse-position-in-canvas
function clientToCanvasCoordinates(bounds: ClientRect, x: number, y: number) {
    return {
        x: Math.floor((x - bounds.left) / scaleFactor),
        y: Math.floor((y - bounds.top) / scaleFactor)
    }
}
