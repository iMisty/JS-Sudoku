// 生成游戏

// 1.生成完成的解決方案
// 2.随机去除部分数据

import Generator from "./generator";

export class sudoku {

    constructor() {
        // 完整的解决方案
        const generator = new Generator();
        generator.generate();
        this.solutionMatrix = generator.matrix;
    }

    make(level = 5) {
        // const shouldRid = Math.random() * 9 < level;
        // 生成谜盘
        this.puzzleMatrix = this.solutionMatrix.map(row => {
            return row.map(cell => Math.random() * 9 < level ? 0 : cell);
        });
    }
}

export default Sudoku;