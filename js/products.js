// /// <reference path="productCategory.ts" />
define(["require", "exports", "./productCategory"], function (require, exports, categories) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var InitialProduct = /** @class */ (function () {
        function InitialProduct() {
            this.name = "Please select a product";
            this.price = 0;
        }
        return InitialProduct;
    }());
    exports.InitialProduct = InitialProduct;
    var CocaCola = /** @class */ (function () {
        function CocaCola() {
            this.name = "Coca-Cola";
            this.price = 2.3;
            this.category = new categories.SodaCategory();
        }
        return CocaCola;
    }());
    exports.CocaCola = CocaCola;
    var Fanta = /** @class */ (function () {
        function Fanta() {
            this.name = "Fanta";
            this.price = 2;
            this.category = new categories.SodaCategory();
        }
        return Fanta;
    }());
    exports.Fanta = Fanta;
    var Sprite = /** @class */ (function () {
        function Sprite() {
            this.name = "Sprite";
            this.price = 1.8;
            this.category = new categories.SodaCategory();
        }
        return Sprite;
    }());
    exports.Sprite = Sprite;
    var Peanuts = /** @class */ (function () {
        function Peanuts() {
            this.name = "Peanuts";
            this.price = 1.5;
            this.category = new categories.NutsCategory();
        }
        return Peanuts;
    }());
    exports.Peanuts = Peanuts;
    var Cashews = /** @class */ (function () {
        function Cashews() {
            this.name = "Cashews";
            this.price = 2.8;
            this.category = new categories.NutsCategory();
        }
        return Cashews;
    }());
    exports.Cashews = Cashews;
    var Plain = /** @class */ (function () {
        function Plain() {
            this.name = "Plain";
            this.price = 2;
            this.category = new categories.PotatoChipsCategory();
        }
        return Plain;
    }());
    exports.Plain = Plain;
    var Cheddar = /** @class */ (function () {
        function Cheddar() {
            this.name = "Cheddar";
            this.price = 2;
            this.category = new categories.PotatoChipsCategory();
        }
        return Cheddar;
    }());
    exports.Cheddar = Cheddar;
    var Mints = /** @class */ (function () {
        function Mints() {
            this.name = "Mints";
            this.price = 1.3;
            this.category = new categories.CandyCategory();
        }
        return Mints;
    }());
    exports.Mints = Mints;
    var Gummies = /** @class */ (function () {
        function Gummies() {
            this.name = "Gummies";
            this.price = 1.9;
            this.category = new categories.CandyCategory();
        }
        return Gummies;
    }());
    exports.Gummies = Gummies;
    var Hersey = /** @class */ (function () {
        function Hersey() {
            this.name = "Hersey's";
            this.price = 1.3;
            this.category = new categories.CandyBarCategory();
        }
        return Hersey;
    }());
    exports.Hersey = Hersey;
    var MilkyWay = /** @class */ (function () {
        function MilkyWay() {
            this.name = "Milky Way";
            this.price = 1.8;
            this.category = new categories.CandyBarCategory();
        }
        return MilkyWay;
    }());
    exports.MilkyWay = MilkyWay;
});
//# sourceMappingURL=products.js.map