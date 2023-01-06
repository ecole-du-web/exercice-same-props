function sameProps(obj, source){

}


/* ÉNONCÉ 📚 */


/* 
  Créez une fonction qui vérifie si le premier objet passé en argument contient au moins les propriétés du second et que ces propriétés ont également les mêmes valeurs.
  Retournez true ou false.
*/


/* Tests à passer 🧪 */

console.log(sameProps({age: 44, taille: 188}, { age: 44, taille: 188 })); // true 
console.log(sameProps({age: 44, taille: 188}, { age: 44, taille: 189 })); // false 
console.log(sameProps({age: 44, taille: 188}, { age: 40, taille: 188 })); // false 




