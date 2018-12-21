/**
 * A surface is a canvas and related drawing methods.
 */
export class Surface {
    readonly canvas: HTMLCanvasElement;
    readonly context: CanvasRenderingContext2D;
    
    constructor(width: number, height: number, canvasId?: string) {
      this.canvas = document.createElement("canvas");
      this.canvas.width = width;
      this.canvas.height = height;
      if (canvasId) this.canvas.id = canvasId;
      this.context = this.canvas.getContext("2d");
    }
    
    /**
     * Scales the canvas by the given factor.
     * @param scale The amount by which to scale the canvas.
     */
    scale(scale: number) {
      this.canvas.style.width = this.canvas.width * scale + "px";
      this.canvas.style.height = this.canvas.height * scale + "px";
    }
    
    /**
     * Draws a pixel of the given color at the given coordinates.
     * @param color The color of the pixel to draw. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle for valid formats.
     * @param x The x coordinate of the pixel to draw.
     * @param y The y coordinate of the pixel to draw.
     */
    putPixel(color: string, x: number, y: number) {
      this.fillRect(color, x, y, 1, 1);
    }

    fillRect(color: string, x: number, y: number, width: number, height: number) {
      this.context.fillStyle = color;
      this.context.fillRect(x, y, width, height);
    }

    getPixel(x: number, y: number) : string {
      return Surface.toRgba(this.context.getImageData(x, y, 1, 1).data);
    }

    static toRgba(color: Uint8ClampedArray) : string {
      return "rgba(" + color[0] + ", " + color[1] + ", " + color[2] + ", " + color[3] / 255 + ")";
    }
  }