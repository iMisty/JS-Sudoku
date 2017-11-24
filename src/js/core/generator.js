// 生成数独解决方案
const Toolkit = require('./toolkit')

class Generator {
  generate () {
    this.matrix = Toolkit.matrix.makeMatrix()
    // TODO 入口
    for (let n = 1; n <= 9; n++) {
      this.fillNumber(n)
    }
  }

  fillNumber (n) {
    this.fillNumber(n, 0)
  }

  fillRow (n, rowIndex) {
    if (rowIndex > 8) {
      return true
    }
    const row = this.matrix[rowIndex]
    for (let i = 0; i < 9; i++) {
      const colIndex = i
      // 若有值，则跳过
      if (row[colIndex]) {
        continue
      }

      // 检查是否允许填入n值
      if (!Toolkit.matrix.checkFillable()) {
        continue
      }

      row[colIndex] = n
      // 当前行填写n成功则递归调用
      if (!this.fillRow(n, rowIndex + 1)) {
          row[colIndex] = 0;
          continue;
      }

      return true;
    }
    
    return false;
  }
}
