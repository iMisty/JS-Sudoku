"use strict";
// 生成游戏
Object.defineProperty(exports, "__esModule", { value: true });
// 1.生成完成的解決方案
// 2.随机去除部分数据
var generator_1 = require("./generator");
var sudoku = /** @class */ (function () {
    function sudoku() {
        // 完整的解决方案
        var generator = new generator_1.default();
        generator.generate();
        this.solutionMatrix = generator.matrix;
    }
    sudoku.prototype.make = function (level) {
        if (level === void 0) { level = 5; }
        // const shouldRid = Math.random() * 9 < level;
        // 生成谜盘
        this.puzzleMatrix = this.solutionMatrix.map(function (row) {
            return row.map(function (cell) { return Math.random() * 9 < level ? 0 : cell; });
        });
    };
    return sudoku;
}());
exports.sudoku = sudoku;
exports.default = Sudoku;
