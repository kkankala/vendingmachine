//  import { Quarter } from "./coin";
// /// <reference path="./coins.ts" />
// /// <reference path="./products.ts" />
// /// <reference path="./ProductFactory.ts" />
define(["require", "exports", "./coins", "./products", "./ProductFactory"], function (require, exports, Coins, products_1, ProductFactory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var VendingMachineSize;
    (function (VendingMachineSize) {
        VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
        VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
        VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
    })(VendingMachineSize = exports.VendingMachineSize || (exports.VendingMachineSize = {}));
    var Cell = /** @class */ (function () {
        function Cell(product) {
            this.product = product;
            this.stock = ko.observable(3);
            this.sold = ko.observable(false);
        }
        return Cell;
    }());
    var VendingMachine = /** @class */ (function () {
        function VendingMachine() {
            var _this = this;
            this.paid = ko.observable(0);
            this.cells = ko.observableArray([]);
            this.acceptedCoins = [
                new Coins.Dime(),
                new Coins.Quarter(),
                new Coins.Half(),
                new Coins.Dollar()
            ];
            this.selectedCell = ko.observable(new Cell(new products_1.InitialProduct()));
            this.canPay = ko.pureComputed(function () { return _this.paid() - _this.selectedCell().product.price >= 0; });
            this.select = function (cell) {
                cell.sold(false);
                _this.selectedCell(cell);
            };
            this.acceptCoin = function (coin) {
                var oldTotal = _this.paid();
                _this.paid(oldTotal + coin.value);
            };
            this.pay = function () {
                if (_this.selectedCell().stock() < 1) {
                    alert("I'm sorry, we're out of them!");
                    return;
                }
                var currentPayed = _this.paid();
                _this.paid(Math.round((currentPayed - _this.selectedCell().product.price) * 100) / 100);
                var currentStock = _this.selectedCell().stock();
                _this.selectedCell().stock(currentStock - 1);
                _this.selectedCell().sold(true);
            };
        }
        Object.defineProperty(VendingMachine.prototype, "size", {
            set: function (givenSize) {
                this.cells([]);
                for (var index = 0; index < givenSize; index++) {
                    var product = ProductFactory_1.default();
                    this.cells.push(new Cell(product));
                }
            },
            enumerable: true,
            configurable: true
        });
        return VendingMachine;
    }());
    exports.VendingMachine = VendingMachine;
});
//# sourceMappingURL=vendingMachine.js.map