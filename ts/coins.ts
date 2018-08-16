let imagePath = "./images/";

export abstract class Coin {
    public value: number;
    constructor(value: number) {
        this.value = value;
    }

    abstract getImageUrl(): string;
}

export class Quarter extends Coin {
    constructor() {
        super(0.25);
    }
    getImageUrl(): string {
        return imagePath + "Quarter.png";
    }
}

export class Dime extends Coin {
    constructor() {
        super(0.1);
    }
    getImageUrl(): string {
        return imagePath + "Dime.png";
    }
}

export class Half extends Coin {
    constructor() {
        super(0.5);
    }
    getImageUrl(): string {
        return imagePath + "Half.png";
    }
}

export class Dollar extends Coin {
    constructor() {
        super(1);
    }
    getImageUrl(): string {
        return imagePath + "Dollar.jpg";
    }
}
