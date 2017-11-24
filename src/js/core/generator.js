// 生成数独解决方案
const Toolkit = require('./toolkit');

class Generator {
  generate(){
      while (!this.interenalGenerate()) {
        // TODO
      }
  }

  interenalGenerate () {
    this.matrix = Toolkit.matrix.makeMatrix();
    this.orders = Toolkit.matrix.makeMatrix()
        .map(row => row.map((v, i) => i))
        .map(row => Toolkit.matrix.shuffle(row));

    for (let n = 1; n <= 9; n++) {
      if (!this.fillNumber(n)){
        return false;
      }
    }
    return true;
  }
  /* Node 8.0.0 以上系统使用了npm 5.0，会引发内存溢出错误 
   * 解决方法：
   * 1.使用node 8以下的版本
   * 2.单独将npm降级到3.xx版本
   */
  fillNumber (n) {
    return this.fillNumber(n, 0);
  }

  fillRow (n, rowIndex) {
    if (rowIndex > 8) {
      return true;
    }

    const row = this.matrix[rowIndex];
    const order = this.orders[rowIndex];

    for (let i = 0; i < 9; i++) {
      const colIndex = orders[i];
      // 若有值，则跳过
      if (row[colIndex]) {
        continue;
      }

      // 检查是否允许填入n值
      if (!Toolkit.matrix.checkFillable(this.matrix, n, rowIndex, colIndex)) {
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
  }
}

const generator = new Generator();
generator.generate();
console.log(generator.matrix);