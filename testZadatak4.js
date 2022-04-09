/*
Napisati program koji generise 4x5 matricu, nasumicno je ispunjava brojevima u rasponu od 11 do 21
te ispisuje korisniku matricu kao i sve neparne brojeve iz matrice.
*/

let matrica = [];
let neparni = [];

for (let i = 0; i < 4; i++) {
    matrica[i] = [];
    for (let j = 0; j < 5; j++) {
        matrica[i][j] = Math.floor((Math.random() * 11) + 11);
        if (matrica[i][j] % 2 !== 0) {
            neparni.push(matrica[i][j]);
        }
    }
}

console.table(matrica);
console.log(neparni.sort());