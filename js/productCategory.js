var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ProductCategory = /** @class */ (function () {
        function ProductCategory() {
            this.imgPath = "./images/";
            this.name = "";
        }
        return ProductCategory;
    }());
    exports.ProductCategory = ProductCategory;
    var SodaCategory = /** @class */ (function (_super) {
        __extends(SodaCategory, _super);
        function SodaCategory() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = "Soda";
            return _this;
        }
        SodaCategory.prototype.getImageUrl = function () {
            return this.imgPath + "SodaCan.png";
        };
        return SodaCategory;
    }(ProductCategory));
    exports.SodaCategory = SodaCategory;
    var CandyCategory = /** @class */ (function (_super) {
        __extends(CandyCategory, _super);
        function CandyCategory() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = "Candy";
            return _this;
        }
        CandyCategory.prototype.getImageUrl = function () {
            return this.imgPath + "Candy.png";
        };
        return CandyCategory;
    }(ProductCategory));
    exports.CandyCategory = CandyCategory;
    var CandyBarCategory = /** @class */ (function (_super) {
        __extends(CandyBarCategory, _super);
        function CandyBarCategory() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = "Candy Bar";
            return _this;
        }
        CandyBarCategory.prototype.getImageUrl = function () {
            return this.imgPath + "CandyBar.png";
        };
        return CandyBarCategory;
    }(ProductCategory));
    exports.CandyBarCategory = CandyBarCategory;
    var NutsCategory = /** @class */ (function (_super) {
        __extends(NutsCategory, _super);
        function NutsCategory() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = "Nuts";
            return _this;
        }
        NutsCategory.prototype.getImageUrl = function () {
            return this.imgPath + "Nuts.png";
        };
        return NutsCategory;
    }(ProductCategory));
    exports.NutsCategory = NutsCategory;
    var ChipsCategory = /** @class */ (function (_super) {
        __extends(ChipsCategory, _super);
        function ChipsCategory() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = "Chips";
            return _this;
        }
        ChipsCategory.prototype.getImageUrl = function () {
            return this.imgPath + "Chips.png";
        };
        return ChipsCategory;
    }(ProductCategory));
    exports.PotatoChipsCategory = ChipsCategory;
});
//# sourceMappingURL=productCategory.js.map