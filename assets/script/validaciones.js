//*----para vereficar que la fecha que ingresa el usurio sea mayo de edad-------

export function valida(input) {
  //.dataset.tipo estamos obteniendo tosa la coleccion de data-tipo
  const tipoInput = input.dataset.tipo;
  //verifcar si el tipo de imput existe en validadores
  if (validadores[tipoInput]) {
    validadores[tipoInput](input);
  }
  //*----------------------------------------mensajes de error---------------
  //para mostrar mensaje de error
  if (input.validity.valid) {
    //ingresamos al padre y le quitamos o agregamos
    input.parentElement.classList.remove("inputs__container--invalid");
    input.parentElement.querySelector(".inpust__error").innerHTML = "";
  } else {
    input.parentElement.classList.add("inputs__container--invalid");
    input.parentElement.querySelector(".inpust__error").innerHTML =
      mensajeDeError(tipoInput, input);
  }
}

const tiposErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const mensajeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacio.",
  },
  textarea: {
    valueMissing: "El campo nombre no puede estar vacio.",
  },
  email: {
    valueMissing: "El campo correo no puede estar vacio.",
    typeMismatch: "El coreo no es valido.",
  },
  password: {
    valueMissing: "El campo contraseña no puede estar vacio.",
    patternMismatch:
      "Al menos 6 caracteres, un máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
  },
  nacimiento: {
    valueMissing: "Este campo no puede estar vacio.",
    customError: "Deves tener almenos 18 años de edad.",
  },
  numero: {
    valueMissing: "Este campo no puede estar vacio.",
    patternMismatch: "El formato requerido es xxxxxxxxxx 9-10 números",
  },
  direccion: {
    valueMissing: "El campo contraseña no puede estar vacio.",
    patternMismatch: "La direcion debe tener entre 10 a 40 carecteres.",
  },
  ciudad: {
    valueMissing: "El campo contraseña no puede estar vacio.",
    patternMismatch: "La ciudad debe tener entre 3 a 30 carecteres.",
  },
  provincia: {
    valueMissing: "El campo contraseña no puede estar vacio.",
    patternMismatch: "La provincia debe tener entre 3 a 30 carecteres.",
  },
};

const validadores = {
  nacimiento: (input) => validarNacimiento(input),
};

//generando el mensaje de error
function mensajeDeError(tipoInput, imput) {
  let mensaje = "";
  tiposErrores.forEach((error) => {
    if (imput.validity[error]) {
      mensaje = mensajeError[tipoInput][error];
    }
  });
  return mensaje;
}
//*----------------------------------------------------------------------------------------

// const $inputNacimiento = document.querySelector("#birth");
// //evento para cuando salga, cuando quite el foco del input
// $inputNacimiento.addEventListener("blur", (e) => {
//   validarNacimiento(e.target);
// });

// function validarNacimiento(input) {
//   //para ceder al valor
//   const fechaUsuario = new Date(input.value);

//   let mensaje = "";

//   if (!mayorEdad(fechaUsuario)) {
//     mensaje = "Deves tener almenos 18 años de edad.";
//   }
//   //verificar si es mayo de edad o no atraves de lo que nos esta regresando
//   /**.setCustomValidity define el mensaje de validacionpersonalizado para el
//    * elemnto seleccionado, es una funcion que va recibir un mensaje*/
//   input.setCustomValidity(mensaje); //para definir un mensaje de error customizado.
// }

// //para verificar si es mayo de edad
// function mayorEdad(fecha) {
//   //vamos a tenr que hacer la compracion de la fecha de hoy y la fecha que ingresa el usurio
//   const fechaActual = new Date();
//   const diferenciaFecha = new Date(
//     fecha.getUTCFullYear() + 18,
//     fecha.getUTCMonth(),
//     fecha.getUTCDate()
//   );
//   return diferenciaFecha <= fechaActual;
// }
