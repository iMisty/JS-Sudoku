const toolkit = require('./toolkit')
const matrix = toolkit.makeMatrix()
console.log(matrix)

class Grid {
  constructor (container) {
    this._$container = container
  }
  build () {
    const matrix = toolkit.makeMatrix();

    const rowGroupClasses = ["row_g_top","row_g_middle","row_g_bottom"];
    const colGroupClasses = ["col_g_top","col_g_center","col_g_right"];

    const $cells = matrix.map(rowValues => rowValues
        .map((cellValue, colIndex) => {
            return $("<span>")
                .addClass(colGroupClasses[colIndex % 3])
                .text(cellValue);
        })
    );

    const $divArray = $cells.map(($spanArray, rowIndex) => {
        return $("<div>")
            .addClass("row")
            .addClass(rowGroupClasses[rowIndex % 3])
            .append($spanArray);
    });

    this._$container.append($divArray);
  }
}

new Grid($("#container")).build();