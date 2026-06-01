/* 
	Создать класс Point, который принимает координаты точки либо отдельно (по оси X и Y), либо сразу массивом координат [X,Y,Z].
*/

export class Point {
    coords: number[];
    constructor(x: number, y: number);   // Конструктор с двумя числами
    constructor(coords: [number, number]);       // Конструктор с массивом чисел
    constructor(...args: any[]) {
        if (args.length === 1 && Array.isArray(args[0])) {
            this.coords = [...args[0]];
        } else if (args.length === 2 && typeof args[0] === 'number' && typeof args[1] === 'number') {
            this.coords = [args[0], args[1]];
        } else {
            this.coords = [];
        }
    }
}
