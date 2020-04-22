'use strict';

const fibonacci = (max = 350) => {
    const sequence = [0, 1];
    let last = 1;

    while (last <= max) {

        last = sequence[sequence.length - 2] + sequence[sequence.length - 1];

        sequence.push(last);
    }

    return sequence;
}

const defaultType = { sequence = [0, 1], max = 10 };

const fibonacciUseRecursivy = ({ sequence = [0, 1], max = 350 } = defaultType) => {
    const temp = [...sequence];
    const lastElement = temp.pop();
    const penultElement = temp.pop();
    const sum = lastElement + penultElement;

    if (sum > max)
        return [...sequence, sum];

    return fibonacciUseRecursivy({ sequence: [...sequence, sum] });
}

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
    fibonacci,
    fibonacciUseRecursivy,
    isFibonnaci
};
