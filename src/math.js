let Util = {};
Util.factorial = (n) => {
    if (n === 0) {
        return 1;
    }

    if (n >= 3000) {
        throw 'n too large'
    }

    if (n < 0) {
        throw 'n is negative'
    }

    return n * Util.factorial(n - 1);
};

/**
 * Détermine si n est un nombre premier.
 * Util.isPrime(5) => false
 * Util.isPrime(6) => true
 *
 * @param {number} n
 * @returns {boolean}
 */
Util.isPrime = function (n) {
    if (n === 1 || n === 0) {
        return false;
    }
    if (n < 0) {
        throw 'Unable to compute prime for n < 0'
    }
    for (var i = 2; i < n; i++)
        if (n % i === 0) return false;
    return true;

};


/**
 * Additionne l'ensemble des nombres premiers de 2 à n
 *
 * Util.sumPrime(6) = 2 + 3 + 5 = 10
 * Util.sumPrime(8) = 2 + 3 + 5 + 7 = 17
 *
 * @param {number} n
 * @returns {number}
 */
Util.sumPrime = function(n) {
    let total = 0;
    for (let i = 2; i <= n; i++){
        if (Util.isPrime(i)){
            total = total + i;
        }
    }
    return total;
};

/**
 * Cette méthode doit retourner un tableau de 1 à n tel que:
 * - Pour les nombres multiples de 3, les remplacer par "Fizz"
 * - Pour les nombres multiples de 5, les remplacer par "Buzz"
 * - Pour les nombres multiples de 3 et 5, les remplacer par "FizzBuzz"
 *
 * Exp :
 * Util.fizzBuzz(15) => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 *
 * @param {number} n
 * @returns {array}
 */
Util.fizzBuzz = function(n) {
    let Table = [];
    for (let i = 1; i <= n; i++){
        if (i % 3 == 0 && i % 5 == 0) {
            Table.push("FizzBuzz");
        }else if (i % 3 == 0) {
            Table.push("Fizz");
        }else if (i % 5 == 0) {
            Table.push("Buzz");
        } else {
            Table.push(i);
        }
    }
    return Table;
};

/**
 * Chiffre une phrase selon la règle suivante : Les A deviennent des B, les B des C, etc.
 *
 * Exp :
 * Util.cipher("Test Unitaire") => "Uftu Tojubjsf"
 *
 * @param phrase
 * @returns {string}
 */
Util.cipher = function (phrase) {
    let newPhrase = "";
    for(let i = 0; i < phrase.length; i++){
     if(phrase.charCodeAt(i) >= 65 && phrase.charCodeAt(i) <= 89){
        newPhrase += String.fromCharCode((phrase.charCodeAt(i) + 1 - 65) % 26 + 65);
      }else if (phrase.charCodeAt(i) >= 97 && phrase.charCodeAt(i) <= 121){
        newPhrase += String.fromCharCode((phrase.charCodeAt(i) + 1 - 97) % 26 + 97);
    }else if (phrase.charCodeAt(i) == 90){
        newPhrase += String.fromCharCode(65);
    }else if (phrase.charCodeAt(i) == 122){
        newPhrase += String.fromCharCode(97);
     }else newPhrase += phrase[i]
    }
    return newPhrase;
}
    

module.exports = Util;

