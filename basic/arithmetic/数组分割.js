function solution(n, k, a) {


    return [];
}

function main() {
    console.log(JSON.stringify(solution(5, 2, [1, 4, 2, 9, 4])) === JSON.stringify([1, 3, 5, 4, 2]));
    console.log(JSON.stringify(solution(3, 2, [1, 2, 3])) === JSON.stringify([1, 3, 2]));
    console.log(JSON.stringify(solution(4, 3, [3, 1, 2, 1])) === JSON.stringify([2, 1, 3, 4]));
    console.log(JSON.stringify(solution(5, 1, [2, 2, 3, 1, 2])) === JSON.stringify([4, 1, 2, 5, 3]));
}

main()