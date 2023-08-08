alert("Bienvenido a nuestra tienda. Por favor, indiquenos su nombre.");

let usuario = prompt("Ingrese su nombre");

for (let i = 0; i <= 100; i++) {
  if (usuario == "") {
    alert(
      "Usted no ha ingresado ningún nombre. Por favor, ingrese un nombre válido."
    );
    usuario = prompt("Ingrese su nombre");
  } else {
    alert("Un gusto, " + usuario + ". Sea bienvenido a nuestra tienda");
    break;
  }
}

let seguir;

for (let i = 0; i <= 100; i++) {
  seguir = prompt(
    "A continuación, se le hará una lista de nuestros productos y se le dirá los codigos de los mismos. \n(1)Monitores \n(2)Memorias RAM \n(3) Placas de video \n(4)Procesadores \n(5)Fuentes \n\n Si quiere salir, no debe introducir nada."
  );

  if (seguir == 1) {
    alert("Tenemos una amplia variedad de monitores");
  } else if (seguir == 2) {
    alert("Tenemos varios tipos de memorias RAM, desde 4 GB hasta 16");
  } else if (seguir == 3) {
    alert("Vendemos placas de video NVIDIA y RADEON");
  } else if (seguir == 4) {
    alert("Vendemos procesadores tanto Ryzen como Intel");
  } else if (seguir == 5) {
    alert("Vendemos fuentes de alimemntacion de distinto voltaje");
  } else if (seguir == "") {
    alert("Usted no ha escrito ningún código de producto");
  } else if (seguir == 0) {
    alert("Por favor, vuelva a visitarnos");
    break;
  } else {
    alert("Usted no ha escrito nada válido");
  }
}

let tienda = prompt(
  "Le gustaría entrar a la tienda virtual? \n\nSi quiere, introduzca 1. \n\nSi no quiere, introduzca0"
);

while (tienda == 1) {
  alert(
    "Gracias por entrar a nuestra tiena virtual. A continuación le pasaremos los precios de nuestros productos"
  );
  alert(
    "\n(1)Monitores...$30000  \n(2)Memorias RAM...($20000) \n(3)Placas de video...$90000 \n(4)Procesadores...$70000 \n(5)Fuentes...$50000"
  );
  tienda = prompt(
    "Quiere comprar algo? Si quiere ingrese 1, si no quiere ingrese 0."
  );
  if (tienda == 1) {
    alert("Gracia, pronto nos contactaremos con usted via mail");
    let email = prompt("Ingrese su mail");
    if(email= ""){
        alert("Usted no ha introducido nada")
    }
    else{
        alert("Gracias por propocionarnos su correo electrónico")
        break
    }
  } else if (tienda == 0) {
    alert("Gracias por visitar nuestra página");
    break;
  }
}
