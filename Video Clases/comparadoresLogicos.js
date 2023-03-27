//AND
function mayorYMenorYPar(num) {
	if( num > 5 && num < 10  && num  % 2 === 0 ) console.log(true);
	else console.log(false);
};
mayorYMenorYPar(7);
//false
mayorYMenorYPar(8); 
//true


// OR
function operadorOr(str) {
   if (str === 'Henry' || str.length < 2) console.log(true);
   else console.log(false);
}
operadorOr('Henry')
//true
operadorOr('Javascript')
//false
operadorOr('H')
//true


// NOT
function negacion(permiso) {
   if (permiso) console.log('Tiene permiso');
}
negacion(true);
//"Tiene permiso"
negacion(false);
//
function negacion(permiso) {
    if (permiso === true) console.log('Tiene permiso');
 }
 negacion(true);
 //"Tiene permiso"
 negacion(false);
 //
 function negacion(permiso) {
    if (permiso !== true) console.log('Tiene permiso');
 }
 negacion(true);
 //
 negacion(false);
 //"Tiene permiso"


 function condicionCompleja(num){
    if(num > 9 && num % 2 === 0 || num === 3) console.log(true);
    else console.log(false)
 }
 condicionCompleja(10)
 //true
 condicionCompleja(6)
 //false
 condicionCompleja(3)
 //true
 condicionCompleja(5)
 //false