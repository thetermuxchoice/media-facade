const container = document.getElementById("container");
let wasClick = false;
//obtener los hijos de este elemento
/*
const over = function (e) {
  console.log(document.getElementsByClassName('PointIcon_container__vl_Vl'));
  let btn = document.getElementsByClassName('PointIcon_container__vl_Vl');
  for (let index = 0; index < btn.length; index++) {
    //get every btn
    const element = btn[index];
    //set diferent name for the btn
    element.tagName = "btn-"+index;
    console.log(element);
    console.log(element.tagName);
  }
};
*/
//luego de 5horas de ordenar y leer codigo
//heme aqui escribiendo un testamento para solo necesitar 30 lineas para hacer el cambio.
//lo fregado fue enterder como funciona y aplicar lo que necesitaba
const over = function(e){
    //console.log(document.getElementsByClassName('PointIcon_wrapper__KclJA'));
    if(!wasClick){
      const other = document.createElement('div');
      let btn = document.getElementsByClassName('PointIcon_wrapper__KclJA');
          //recorrer y asignar
      Array.from(btn).forEach(element => {
          let number = Math.round(Math.random(10,20)*127);
          other.innerText = "$"+number;
  
          element.innerHTML = other.outerHTML;  
          console.log(element);
      });
      wasClick = true;
    }
}
addEventListener("click", over);

