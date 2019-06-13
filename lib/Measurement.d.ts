declare class Measurement {
    canvas: HTMLCanvasElement;
    context: any;
    constructor(canvas: HTMLCanvasElement);
    ellipse({ x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise }: {
        x: number;
        y: number;
        radiusX: number;
        radiusY: number;
        rotation: number;
        startAngle: number;
        endAngle: number;
        anticlockwise?: boolean;
    }): void;
    circle({ x, y, radius, startAngle, endAngle, anticlockwise }: {
        x: number;
        y: number;
        radius: number;
        startAngle: number;
        endAngle: number;
        anticlockwise?: boolean;
    }): void;
    rectangle({ x, y, width, height }: {
        x: number;
        y: number;
        width: number;
        height: number;
    }): void;
    square({ x, y, side }: {
        x: number;
        y: number;
        side: number;
    }): void;
    line({ from, to }: {
        from: {
            x: number;
            y: number;
        };
        to: {
            x: number;
            y: number;
        };
    }): void;
}
