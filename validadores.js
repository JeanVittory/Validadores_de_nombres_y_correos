/*19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/

const NAMEVALIDATION =(name = undefined) => {

    if (name === undefined) return console.warn("Debes ingresar un nombre.");
    if (typeof name !== "string") return console.error("Has ingresado un nombre invalido.");

    let regularExp = /^[a-zA-Z\sÑñÁáÉéÍíÓóÚúÜü]+$/g.test(name)

    return (regularExp)
    ? console.log("Bienvenido")
    : console.log("Nombre Invalido.")
}

NAMEVALIDATION("Andrés");


/*20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */

const EMAILVALIDATOR = function (mail= undefined){
    if(mail === undefined) return console.warn("No has ingresado ningún e-mail.");
    if(typeof mail !== "string") return console.error("correo invalido.");

    let upperRegExp = /[A-Z]/g;

    (mail.search(upperRegExp) !== -1)
    ? console.error("No puedes usar mayusculas en el correo.")
    : (mail.search(/[^\w]/g) === 0 || mail.search(/\d/g) === 0)
    ? console.log("No puedes iniciar un correo con simbolos o números.")
    : (/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(mail) === true) 
    ? console.log("Bienvenido")
    : console.log("correo incorrecto");
}


EMAILVALIDATOR("hola_m.und0@gmail.com");