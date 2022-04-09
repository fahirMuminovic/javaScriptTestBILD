/*
Napisati program koji za proizvoljan string, dodaje crtice(-) sa lijeve i desne strane svakog samoglasnika(a e i o u).
Za string: "Carpe Diem"
Output: C-a-rp-e-D-i--e-m
*/

let recenica = 'Carpe Diem';
let samoglasnici = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
let novaRecenica = '';
let trigger = false;


for (let i = 0; i <= recenica.length; i++) {
    for (let j = 0; j < samoglasnici.length; j++) {
        if (recenica.charAt(i) === samoglasnici[j]) {
            let element = '';
            element += '-' + recenica.charAt(i) + '-';
            novaRecenica += element;
            trigger = true;
        }
    }
    if (trigger !== true) {
        novaRecenica += recenica.charAt(i);
    } else {
        trigger = false;
    }
}

console.log(novaRecenica);
