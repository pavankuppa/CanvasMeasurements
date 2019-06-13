class Measurement {
    public canvas: HTMLCanvasElement;
    public context: any;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
    }

    public ellipse({
        x,
        y,
        radiusX,
        radiusY,
        rotation,
        startAngle,
        endAngle,
        anticlockwise = false,
    }: {
        x: number;
        y: number;
        radiusX: number;
        radiusY: number;
        rotation: number;
        startAngle: number;
        endAngle: number;
        anticlockwise?: boolean;
    }) {
        this.context.beginPath();
        this.context.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
        this.context.stroke();
    }

    public circle({
        x,
        y,
        radius,
        startAngle,
        endAngle,
        anticlockwise = false,
    }: {
        x: number;
        y: number;
        radius: number;
        startAngle: number;
        endAngle: number;
        anticlockwise?: boolean;
    }) {
        this.context.beginPath();
        this.context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        this.context.stroke();
    }

    public rectangle({ x, y, width, height }: { x: number; y: number; width: number; height: number }) {
        this.context.beginPath();
        this.context.rect(x, y, width, height);
        this.context.stroke();
    }

    public square({ x, y, side }: { x: number; y: number; side: number }) {
        this.context.beginPath();
        this.context.rect(x, y, side, side);
        this.context.stroke();
    }

    public line({
        from,
        to,
    }: {
        from: {
            x: number;
            y: number;
        };
        to: {
            x: number;
            y: number;
        };
    }) {
        this.context.beginPath();
        this.context.moveTo(from.x, from.y);
        this.context.lineTo(to.x, to.y);
        this.context.stroke();
    }
}
