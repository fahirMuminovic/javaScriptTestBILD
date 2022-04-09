/*
Napisati program da dati niz ispisuje sve unikatne brojeve iz datog niza.
Koristiti niz: [4, 3, 1, 5, 6, 8, 4, 2, 1, 4, 3, 5, 6, 1]
Output: Unikatni brojevi u datom nizu su: 4, 3, 1, 5, 6, 8, 2
*/

let arr = [4, 3, 1, 5, 6, 8, 4, 2, 1, 4, 3, 5, 6, 1];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (i === j) {
            continue;
        }
        if (arr[i] === arr[j]) {
            arr.splice(j, 1);
        }
    }
}

console.log(arr);