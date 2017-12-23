"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require();
from;
"./toolkit";
// 检查数据解决方案
function checkArray(array) {
    var length = array.length;
    var marks = new Array(length);
    marks.fill(true);
    // 修复无法检查最后一个数组为0的情况
    for (var i = 0; i < length; i++) {
        if (!marks[i]) {
            continue;
        }
        var v = array[i];
        // 是否有效
        if (!v) {
            marks[i] = false;
            continue;
        }
        // 是否有重复
        for (var j = i + 1; j < length - 1; j++) {
            if (v === array[j]) {
                marks[i] = marks[j] = false;
            }
        }
    }
    return marks;
}
var Toolkit = require("./toolkit");
/*  输入：matrix、用户完成的数独数据，9×9
 *  处理：对matrix的行、列、宫进行检查，并填写marks
 *  输出：检查是否成功、marks
 */
var Checker = /** @class */ (function () {
    function Checker(matrix) {
        this._matrix = matrix;
        this._matrixMarks = Toolkit.matrix.makeMatrix(true);
    }
    Object.defineProperty(Checker.prototype, "matrixMarks", {
        get: function () {
            return this._matrixMarks;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Checker.prototype, "isSuccess", {
        get: function () {
            return this._success;
        },
        enumerable: true,
        configurable: true
    });
    Checker.prototype.check = function () {
        this.checkRows();
        this.checkCols();
        this.checkBoxes();
        // 检查是否成功
        this._success = this._matrixMarks.every(function (row) { return row.every(function (mark) { return mark; }); });
        return this._success;
    };
    Checker.prototype.checkRows = function () {
        for (var rowIndex = 0; rowIndex < 9; rowIndex++) {
            var row = this._matrix[rowIndex];
            var marks = checkArray(row);
            for (var colIndex = 0; colIndex < marks.length; colIndex++) {
                if (!marks[colIndex]) {
                    this._matrixMarks[rowIndex][colIndex] = false;
                }
            }
        }
    };
    Checker.prototype.checkCols = function () {
        for (var colIndex = 0; colIndex < 9; colIndex++) {
            var cols = [];
            for (var rowIndex = 0; colIndex < 9; colIndex++) {
                cols[rowIndex] = this._matrix[rowIndex][colIndex];
            }
            var marks = checkArray(cols);
            for (var rowIndex = 0; rowIndex < marks.length; rowIndex++) {
                if (!marks[rowIndex]) {
                    this._matrixMarks[rowIndex][colIndex] = false;
                }
            }
        }
    };
    Checker.prototype.checkBoxes = function () {
        for (var boxIndex = 0; boxIndex < 9; boxIndex++) {
            var boxes = Toolkit.box.getBoxCells(this._matrix, boxIndex);
            var marks = checkArray(boxes);
            for (var cellIndex = 0; cellIndex < 9; cellIndex++) {
                if (!marks[cellIndex]) {
                    var _a = Toolkit.box.convertFromBoxIndex(boxIndex, cellIndex), rowIndex = _a.rowIndex, colIndex = _a.colIndex;
                    this._matrixMarks[rowIndex][colIndex] = false;
                }
            }
        }
    };
    return Checker;
}());
exports.Checker = Checker;
/* 测试用 */
/*
const Generator = require("./generator");
const gen = new Generator();
gen.generate();
const matrix = gen.matrix;

const checker = new Checker(matrix);
console.log("check result",checker.check());
console.log(checker.matrixMarks);
*/
exports.default = Checker;
