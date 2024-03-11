console.log(`Hello, ladies!`)   // test consola

let varsta = 34;
console.log(`Varsta mea este ${varsta} de ani.`);

//suma a doua numere
let numarA = 12;
let numarB = 7;
let suma = numarA + numarB;
console.log(`Suma dintre ${numarA} si ${numarB} este ${suma}.`);

//temperatura
let temperaturaCelsius = 15;
let temperaturaFahrenheit = temperaturaCelsius * 9/5 + 32;
console.log(`Temperatura de ${temperaturaCelsius} grade Celsius este echivalenta cu temperatura de ${temperaturaFahrenheit}.`);

// Hello + nume
const numeleMeu = 'Andra';
console.log(`Hello, ${numeleMeu}!`);

// verificare numar par sau impar 
let numarVerificat = 13;
let rest = numarVerificat %2;
let estePar = rest === 0;
console.log(`Numarul ${numarVerificat} este par: ${estePar}.`);

//variabila booleana
let suntStudenta = false;
console.log(`Sunt studenta = ${suntStudenta}`);

//concatenare 2 siruri de caractere
let primulSir = 'Cluj';
let alDoileaSir = "Napoca";
let liniuta = '-';
console.log(`Exemplu concatenare siruri de caractere: ${sum=primulSir+liniuta+alDoileaSir}`);

// afisare restul impartirii
let restImpartire = numarA % numarB;
console.log(`Restul impartirii lui ${numarA} la ${numarB} este ${restImpartire}.`);

//declararea unei variabile undefined
let neInitializat;
console.log(`neInitializat = ${neInitializat}`);

//aria unui dreptunghi
let latime = 3;
let lungime = 5;
let aria = latime * lungime;
console.log(`Aria dreptunghiului cu latimea de 3 si lungimea de 5 este ${aria}.`);

//comparatie 2 siruri de caractere

let sir1 = 'xyzq';
let sir2 = 'xyzq';       //identice
console.log(`Sirurile sunt identice: ${sir1===sir2}`);

sir2='xyz';              //neidentice
console.log(`Sirurile sunt identice: ${sir1===sir2}`);

//operatii cu variabile booleene

let suntAngajata = true;
let suntSomera = false;
let rezultatSiLogic = suntAngajata && suntSomera;            
console.log(`${suntAngajata} && ${suntSomera} => ${rezultatSiLogic}`);
rezultatSiLogic = suntAngajata && suntAngajata;
console.log(`${suntAngajata} && ${suntAngajata} => ${rezultatSiLogic}`);
rezultatSiLogic = suntSomera && suntSomera;     
console.log(`${suntSomera} && ${suntSomera} => ${rezultatSiLogic}`);
let rezultatSauLogic = suntAngajata || suntSomera;
console.log(`${suntAngajata} || ${suntSomera} => ${rezultatSauLogic}`);


//calcul varsta
let an = 1990;
let anCurent = 2024;
varsta = anCurent - an;
console.log(`Varsta mea actuala este ${varsta}`);

//concatenare + convertire in majuscule
let nume1= 'Andra';
let nume2 = 'Eusei';
let sumNume = nume1+' '+nume2;
let majuscula = sumNume.toUpperCase();
console.log(`Numele intreg este: ${sumNume}, iar convertit in majuscule este: ${majuscula}`);

//




