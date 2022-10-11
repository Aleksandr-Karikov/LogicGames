export const getSumFromExpression = (dataArr, expr, start  = 0, end = dataArr.length) => {
    let sum = 0;

    for (let i = start; i < end; i++) {
        sum += expr(dataArr[i], i, end);
    }
    return sum;
}

export function getFunction(data) {
    const n = data.length;
    const a = (n * getSumFromExpression(data, it=> it.x * it.y) - getSumFromExpression(data, it => it.y) * getSumFromExpression(data, it=> it.x))/(n * getSumFromExpression(data, it => it.x * it.x) - Math.pow(getSumFromExpression(data, it=> it.x),2));
    const b = (1 / n) * (getSumFromExpression(data, (item)=>item.y) -  a * getSumFromExpression(data, it=> it.x))

    return `y = 1 / (${a}x ${b>0 ? `+${b}` : `-${b}`} )`
}