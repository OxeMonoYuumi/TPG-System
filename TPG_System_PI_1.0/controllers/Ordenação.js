function ordenacao(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1]
    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= pivot) { 
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [...ordenacao(leftArr), arr[arr.length - 1], ...ordenacao(rightArr)];
}

export default ordenacao;