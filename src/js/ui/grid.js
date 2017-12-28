"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sudoku_1 = require("../core/sudoku");
var checker_1 = require("../core/checker");
require();
from;
'../core/toolkit';
var Grid = /** @class */ (function () {
    function Grid(container) {
        this._$container = container;
    }
    Grid.prototype.build = function () {
        var sudoku = new sudoku_1.default();
        sudoku.make();
        var matrix = sudoku.puzzleMatrix;
        /* 测试用代码，直接完成游戏
         * const matrix = sudoku.soultionMatrix;
         */
        // const generator = new Generator()
        // generator.generate()
        // const matrix = generator.matrix
        var rowGroupClasses = ['row_g_top', 'row_g_middle', 'row_g_bottom'];
        var colGroupClasses = ['col_g_top', 'col_g_center', 'col_g_right'];
        var $cells = matrix.map(function (rowValues) { return rowValues
            .map(function (cellValue, colIndex) {
            return $('<span>')
                .addClass(colGroupClasses[colIndex % 3])
                .addClass(cellValue ? 'fixed' : 'empty')
                .text(cellValue);
        }); });
        var $divArray = $cells.map(function ($spanArray, rowIndex) {
            return $('<div>')
                .addClass('row')
                .addClass(rowGroupClasses[rowIndex % 3])
                .append($spanArray);
        });
        this._$container.append($divArray);
    };
    Grid.prototype.layout = function () {
        var width = $('span:first', this._$container).width();
        $('span', this._$container)
            .height(width)
            .css({
            'line-height': width + "px",
            'font-size': width < 32 ? width / 2 + "px" : ''
        });
    };
    // 检查用户解谜结果
    Grid.prototype.check = function () {
        var data = this._$container.children()
            .map(function (rowIndex, div) {
            return $(div).children()
                .map(function (colIndex, span) { return $parseInt($(span).text()) || 0; });
        })
            .toArray()
            .map(function ($data) { return $data.toArray(); });
        var checker = new checker_1.default(data);
        if (checker.check()) {
            return true;
        }
        var marks = checker.matrixMarks;
        $this._$container.children()
            .each(function (rowIndex, div) {
            $(div).children().each(function (colIndex, span) {
                var $span = $(span);
                if ($span.is('fixed') || marks[rowIndex][colIndex]) {
                    $span.removeClass('error');
                }
                else {
                    $(span).addClass('error');
                }
            });
        });
    };
    // 重置用户输入
    Grid.prototype.reset = function () {
        this._$container.find("span:not(.fixed)")
            .removeClass("error mark1 mark2")
            .addClass("empty")
            .text(0);
    };
    // 推倒重来
    Grid.prototype.clear = function () {
        this._$container.find("span.error")
            .removeClass("error");
    };
    // 重新开始新的一局
    Grid.prototype.rebuild = function () {
        this._$container.empty();
        this.build();
        this.layout();
    };
    Grid.prototype.bindPopup = function (popupNumbers) {
        this._$container.on('click', 'span', function (e) {
            var $cell = $(e.target);
            if ($cell.is(".fixed")) {
                return;
            }
            popupNumbers.popup($cell);
        });
    };
    return Grid;
}());
exports.Grid = Grid;
exports.default = Grid;
