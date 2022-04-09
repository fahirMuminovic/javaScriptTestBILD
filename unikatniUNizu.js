/*
Rjesenje za zadatak 2 koje ispisuje samo unikatne brojeve u nizu
tj. samo one elemente koji se ne ponavaljaju (pojavljuju u nizu samo jednom).
*/
let arr = [4, 3, 1, 5, 6, 8, 4, 2, 1, 4, 3, 5, 6, 1];
let arrCopy = arr;
let unikatni = [];
let trigger = false;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (i === j) {
            continue;
        }
        if (arr[i] === arr[j]) {
            trigger = true;
            break;
        }
    }
    if (trigger === false) {
        unikatni.push(arr[i]);
    } else {
        trigger = false;
    }
}

console.log(unikatni);
