/*
Napisati program koji za bilo koji cijeli pozitivni broj ispisuje sumu cifara tog broja. Za broj: 341
Output: Zbir cifara broja 341 je 8.
*/


let cijeliBroj = 341;
let string = String(cijeliBroj);
let suma = 0;

for (let i = 0; i < string.length; i++) {
    suma += Number(string.charAt(i));
}

console.log(`Zbir cifara broja ${cijeliBroj} je ${suma}`);