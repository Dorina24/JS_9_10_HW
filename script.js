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

// >=100
let numarX = 95;
let numarY = 100;
let numarComparat = numarX >= numarY;
console.log(`${numarX} >= ${numarY} => ${numarComparat}`);

//conversie in mile
let numarKm = 18;
console.log(`Distanta de ${numarKm} km convertita in mile este: ${numarKm*0.621371} mile.`);

//null
let numarNul = null;
console.log(typeof numarNul); 

//declarare si comparatie 2 numere
let num1 = 5;
let num2 = 7;
let comparatieNumere = num1 == num2;
console.log(`Numerele ${num1} si ${num2} sunt egale => ${comparatieNumere}`);

// discount
let pretInitial = 35;
let discount = 0.2;   //reprezinta 10%
let pretRedus = pretInitial - (pretInitial*discount)
console.log(`Pretul produsului dupa aplicarea reducerii este de ${pretRedus} de lei.`);


//////////   JS 10  ///////////

//Creează două array-uri: fructe = ['măr', 'portocală'] și 
//legume = ['morcov', 'broccoli']. Concatenează-le într-un singur array numit alimente;
let fructe = ['măr', 'portocală'];
let legume = ['morcov', 'broccoli']; 
let alimente = fructe+legume;
alimente =fructe.concat(legume);
console.log(alimente);

// Creează un array de cuvinte: fructe = ['măr', 'portocală', 'banana'] 
//verifica dacă ‘struguri’ se regaseste in array (indexOf) ;
fructe = ['măr', 'portocală', 'banana'];
let index = fructe.indexOf('struguri');
console.log(index);

// Creează un obiect Date și afișează anul curent în consolă;
let currentDate = new Date();
let year = currentDate.getFullYear();
console.log(year);

// Creează un obiect Date și adaugă 5 zile la data curentă. Afișează noua dată în consolă;
let dataCurenta = new Date();
let data =currentDate.getDate();
let viitor = data + 5;
console.log(`Peste 5 zile va fi data de ${viitor}`);

//Creează două obiecte Date reprezentând două momente în timp (timestamp).
//Calculează diferența dintre ele în milisecunde și afișează rezultatul în consolă
let timestamp1 = new Date('2023-08-12').getTime();
let timestamp2 = new Date('2024-08-12').getTime();
let diferentaInMilisecunde = timestamp2 - timestamp1;
console.log(diferentaInMilisecunde);


//Creează un obiect cu informații despre tine: 
//persoana = { nume: 'NumeleTau', varsta: 25, oras: 'OrasulTau' }. 
//Afiseaza-l in consola;
let andra = {
    numeleMeu: "Dorina",
    varstaMea: 34,
    oras: "Cluj-Napoca",
    }
console.log(andra);

//Modifică vârsta persoanei din obiectul creat anterior. 
//Afișează obiectul modificat în consolă.
andra.varstaMea = 18;
console.log(andra.varstaMea);

//Creează un array de obiecte, fiecare reprezentând o carte: 
//carti = [{ titlu: 'Carte1', autor: 'Autor1', anPublicare: 2000 }, { titlu: 'Carte2', autor: 'Autor2', anPublicare: 1995 }]. 
//Folosește o metoda a array-ului pentru a adauga încă un obiect reprezentand o carte.
let carti = [{ titlu: 'Carte1', autor: 'Autor1', anPublicare: 2000 }, { titlu: 'Carte2', autor: 'Autor2', anPublicare: 1995 }];
carti.push({titlu: 'Carte3', autor: 'Autor3', anPublicare: 2024 });
console.log(carti);








