// 检查数据解决方案

function checkArray(array) {
    const length = array.length;
    const marks = new Array(length);
    marks.fill(true);
    for (let i = 0; i < length-1; i++) {
        if (!marks[i]){
            continue;
        }
        const v = array[i];
        // 是否有效
        if (!v) {
            marks[i] = false;
            continue;
        }
        // 是否有重复
        for (let j = i + 1;j < length;j++) {
            if (v === array[j]) {
                marks[i] = marks[j] = false;
            }
        }
    }
    return marks;
}
/* 测试用代码 */
// console.log(checkArray([2,3,3,4,5,6,7,8,9]));
// console.log(checkArray([1,2,3,4,5,6,7,8,9]));