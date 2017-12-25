"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 生成数独解决方案
var toolkit_1 = require("./toolkit");
// const Toolkit = require('./toolkit');
var Generator = /** @class */ (function () {
    function Generator() {
    }
    Generator.prototype.generate = function () {
        while (!this.interenalGenerate()) {
            // TODO
        }
    };
    Generator.prototype.interenalGenerate = function () {
        this.matrix = toolkit_1.default.matrix.makeMatrix();
        this.orders = toolkit_1.default.matrix.makeMatrix()
            .map(function (row) { return row.map(function (v, i) { return i; }); })
            .map(function (row) { return toolkit_1.default.matrix.shuffle(row); });
        for (var n = 1; n <= 9; n++) {
            if (!this.fillNumber(n)) {
                return false;
            }
        }
        return true;
    };
    /* Node 8.0.0 以上系统使用了npm 5.0，会引发内存溢出错误
     * 解决方法：
     * 1.使用node 8以下的版本
     * 2.单独将npm降级到3.xx版本
     * 3.使用尾递归 // TODO
     */
    Generator.prototype.fillNumber = function (n) {
        return this.fillNumber(n, 0);
    };
    Generator.prototype.fillRow = function (n, rowIndex) {
        if (rowIndex > 8) {
            return true;
        }
        var row = this.matrix[rowIndex];
        var order = this.orders[rowIndex];
        for (var i = 0; i < 9; i++) {
            var colIndex = orders[i];
            // 若有值，则跳过
            if (row[colIndex]) {
                continue;
            }
            // 检查是否允许填入n值
            if (!toolkit_1.default.matrix.checkFillable(this.matrix, n, rowIndex, colIndex)) {
                continue;
            }
            row[colIndex] = n;
            // 当前行填写n成功则递归调用
            if (!this.fillRow(n, rowIndex + 1)) {
                row[colIndex] = 0;
                continue;
            }
            return true;
        }
        return false;
    };
    return Generator;
}());
exports.Generator = Generator;
exports.default = Generator;
/* const generator = new Generator();
generator.generate();
console.log(generator.matrix); */ 
