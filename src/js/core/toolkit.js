"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * 矩阵和数组
 */
var matrixToolkit = {
    makeRow: function (v) {
        if (v === void 0) { v = 0; }
        var array = new Array(9);
        array.fill(v);
        return array;
    },
    makeMatrix: function (v) {
        var _this = this;
        if (v === void 0) { v = 0; }
        return Array.from({ length: 9 }, function () { return _this.makeRow(v); });
    },
    /*
     * Fisher-Yates
     */
    shuffle: function (array) {
        var endIndex = array.length - 2;
        for (var i = 0; i <= endIndex; i++) {
            var j = i + Math.floor(Math.random() * (array.length - i));
            _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
        }
        return array;
        var _a;
    },
    // TODO 检查是否允许填入n
    checkFillable: function (matrix, n, rowIndex, colIndex) {
        var row = matrix[rowIndex];
        var column = this.makeRow().map(function (v, i) { return matrix[i][colIndex]; });
        var boxIndex = boxToolkit.convertToBoxIndex(rowIndex, colIndex).boxIndex;
        var box = boxToolkit.getBoxCells(matrix, boxIndex);
        for (var i = 0; i < 9; i++) {
            if (row[i] === n || column[i] === n || box[i] === n) {
                return false;
            }
            return true;
        }
    }
};
/* 宫坐标系工具 */
var boxToolkit = {
    getBoxCells: function (matrix, boxIndex) {
        var startRowIndex = Math.floor(boxIndex / 3) * 3;
        var startColIndex = boxIndex % 3 * 3;
        var result = [];
        for (var cellIndex = 0; cellIndex < 9; cellIndex++) {
            var rowIndex = startRowIndex + Math.floor(cellIndex / 3);
            var colIndex = startRowIndex + cellIndex % 3;
            result.push(matrix[rowIndex][colIndex]);
        }
        return result;
    },
    convertToBoxIndex: function (rowIndex, colIndex) {
        return {
            boxIndex: Math.floor(rowIndex / 3) * 3 + Math.floor(colIndex / 3),
            cellIndex: rowIndex % 3 * 3 + colIndex % 3
        };
    },
    convertFromBoxIndex: function (boxIndex, cellIndex) {
        return {
            rowIndex: Math.floor(boxIndex / 3) * 3 + Math.floor(cellIndex / 3),
            colIndex: boxIndex % 3 * 3 + cellIndex % 3
        };
    }
};
var Toolkit = /** @class */ (function () {
    function Toolkit() {
    }
    Object.defineProperty(Toolkit, "matrix", {
        // 矩阵和数据相关工具
        get: function () {
            return matrixToolkit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toolkit, "box", {
        // 宫坐标系相关工具
        get: function () {
            return boxToolkit;
        },
        enumerable: true,
        configurable: true
    });
    return Toolkit;
}());
exports.Toolkit = Toolkit;
;
exports.default = Toolkit;
