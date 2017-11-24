/* 
 * 矩阵和数组
 */
const matrixToolkit = {
    makeRow (v = 0) {
    const array = new Array(9)
    array.fill(v)
    return array
    },

    makeMatrix(v = 0) {
        return Array.from({ length: 9 }, () => this.makeRow(v));
    },
/* 
 * Fisher-Yates
 */
    shuffle(array) {
        const endIndex = array.length - 2;
        for (let i = 0; i <= endIndex; i++) {
            const j = i + Math.floor(Math.random() * (array.length - i));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
};

/* 宫坐标系工具 */
const boxToolkit = {
    // TODO
};

module.exports = class Toolkit {
    // 矩阵和数据相关工具
    static get matrix() {
        return matrixToolkit;
    }
    // 宫坐标系相关工具
    static get box() {
        return boxToolkit;
    }
};