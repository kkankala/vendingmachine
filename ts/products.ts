// /// <reference path="productCategory.ts" />

import * as categories from "./productCategory";

export interface Product {
    name: string;
    price: number;
    category?: categories.ProductCategory;
}

export class InitialProduct implements Product {
    name = "Please select a product";
    price = 0;
}

export class CocaCola implements Product {
    name: string = "Coca-Cola";
    price = 2.3;
    category = new categories.SodaCategory();
}

export class Fanta implements Product {
    name: string = "Fanta";
    price = 2;
    category = new categories.SodaCategory();
}

export class Sprite implements Product {
    name: string = "Sprite";
    price = 1.8;
    category = new categories.SodaCategory();
}

export class Peanuts implements Product {
    name: string = "Peanuts";
    price = 1.5;
    category = new categories.NutsCategory();
}

export class Cashews implements Product {
    name: string = "Cashews";
    price = 2.8;
    category = new categories.NutsCategory();
}

export class Plain implements Product {
    name: string = "Plain";
    price = 2;
    category = new categories.PotatoChipsCategory();
}

export class Cheddar implements Product {
    name: string = "Cheddar";
    price = 2;
    category = new categories.PotatoChipsCategory();
}

export class Mints implements Product {
    name: string = "Mints";
    price = 1.3;
    category = new categories.CandyCategory();
}

export class Gummies implements Product {
    name: string = "Gummies";
    price = 1.9;
    category = new categories.CandyCategory();
}

export class Hersey implements Product {
    name: string = "Hersey's";
    price = 1.3;
    category = new categories.CandyBarCategory();
}

export class MilkyWay implements Product {
    name: string = "Milky Way";
    price = 1.8;
    category = new categories.CandyBarCategory();
}
