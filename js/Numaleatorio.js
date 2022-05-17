//EVENTO PARA BOTON
document.getElementById('btn_calcular').addEventListener('click',e =>{

    var valoractual = document.getElementById('txt_lanzamientos').value;
    
    //Promesa
    let p = new Promise((resolve,reject) =>{
      if (valoractual!=false) {
        //resolve(console.log('Resolve PROMESA OK addEventListener'));
        NumeroAleatorio(valoractual);
      } else {
        //reject(console.log('Reject PROMESA addEventListener'));
      }
    })
    p.then(res =>{
      cf.getapi(valoractual);
      //console.log('PROMESA OK en addEventListener');      
    })
    .catch(err =>{
      //alert('CAMPO LANZAMIENTOS ESTÁ VACIO');
      //console.log('PROMESA no OK en addEventListener');
    });
    
});//FIN EVENTO PARA BOTON addEventListener


//FUNCIÓN QUE PERMITE GENERAR NUMEROS ALEATORIOS Y CARGARLOS EN UN ARREGLO UNIDIMENSIONAL
function NumeroAleatorio(num_ite){
  console.log("*************** INICIO EJECUCIÓN NumeroAleatorio ***************");
  console.log("ITERACIÓN PARA "+ num_ite +" LANZAMIENTOS DE UN DADO");
  var _iteracciones = num_ite;
  _Vector = new Array(_iteracciones);
  for (var i_vector = 1; i_vector <= _iteracciones; i_vector++) {  
    var _numaleatorio = Math.ceil(Math.random()*(6));  
    _Vector[i_vector] = _numaleatorio;
    console.log("ARREGLO UNIDIMENSIONAL, POSICIÓN: " + i_vector + "\n VALOR: " + _Vector[i_vector]);
  }
  console.log("*************** FIN EJECUCIÓN NumeroAleatorio ***************");
  ConsultarArreglo(_Vector);
  ValidarNumerosDado(_Vector);
}//FIN FUNCIÓN NumeroAleatorio


//FUNCIÓN QUE PERMITE CONSULTAR EL ARREGLO UNIDIMENSIONAL
function ConsultarArreglo(_Vector){
  console.log("\n*************** INICIO EJECUCIÓN ConsultarArreglo ***************");
  let num = _Vector.length;
    for (var i = 1; i <= num; i++) {
       console.log(_Vector[i]);
     } 
  console.log("*************** FIN EJECUCIÓN ConsultarArreglo ***************");
}


//FUNCIÓN PARA VALIDAR REPETICIÓN DE UN NÚMERO DE N CARA DEL DADO
function ValidarNumerosDado(_Vector){
  console.log("\n*************** INICIO EJECUCIÓN ValidarNumerosDado ***************");
  //let num = _Vector.length;
  let _contar1 = 0, _contar2 = 0, _contar3 = 0, _contar4 = 0, _contar5 = 0, _contar6 = 0;
    for (var i = 1; i <= _Vector.length; i++) {
       if (1 == _Vector[i]) {
            _contar1 += 1;
       } 
          if (2 == _Vector[i]) {
            _contar2 += 1;
          } 
            if (3 == _Vector[i]) {
            _contar3 += 1;
            } 
              if (4 == _Vector[i]) {
              _contar4 += 1;
              } 
                if (5 == _Vector[i]) {
                _contar5 += 1;
                }
                  if (6 == _Vector[i]) {
                  _contar6 += 1;
                  } 
                    else{console.log("NÚMERO NO EXISTE DENTRO DEL ARREGLO");} 
  }
      console.log("EL NÚMERO (1) ESTÁ: " + _contar1 + " VECES");
      console.log("EL NÚMERO (2) ESTÁ: " + _contar2 + " VECES");
      console.log("EL NÚMERO (3) ESTÁ: " + _contar3 + " VECES");     
      console.log("EL NÚMERO (4) ESTÁ: " + _contar4 + " VECES");
      console.log("EL NÚMERO (5) ESTÁ: " + _contar5 + " VECES");
      console.log("EL NÚMERO (6) ESTÁ: " + _contar6 + " VECES");
      console.log("*************** FIN EJECUCIÓN ValidarNumerosDado ***************");
      FrecuenciaRelativa(_contar1,_contar2,_contar3,_contar4,_contar5,_contar6,_Vector.length);
}


//FUNCIÓN PARA CALCULAR LA FRECUENCIA RELATIVA Y ABSOLUTA
function FrecuenciaRelativa(_FR1, _FR2, _FR3, _FR4, _FR5, _FR6,_TamV){
  var _FR1S1 =_FR1/_TamV, _FR2S2 = _FR2/_TamV, _FR3S3 = _FR3/_TamV, _FRS4 = _FR4/_TamV, _FRS5 = _FR5/_TamV, _FRS6 = _FR6/_TamV;
  console.log("\n*************** INICIO EJECUCIÓN FrecuenciaRelativa ***************");
  console.log("CARA DEL DADO (1): " + _FR1S1);
  console.log("CARA DEL DADO (2): " + _FR2S2);  
  console.log("CARA DEL DADO (3): " + _FR3S3);
  console.log("CARA DEL DADO (4): " + _FRS4);
  console.log("CARA DEL DADO (5): " + _FRS5);
  console.log("CARA DEL DADO (6): " + _FRS6);  
  console.log("*************** FIN EJECUCIÓN FrecuenciaRelativa ***************");
}



//FUNCIÓN PARA CALCULAR LA FRECUENCIA ABSOLUTA
function FrecuenciaAbsoluta(_F1, _F2, _F3, _F4, _F5, _F6){
  console.log("\n*************** INICIO EJECUCIÓN FrecuenciaAbsoluta ***************");
  console.log("CARA DEL DADO (1): " + _F1/_TamV);
  console.log("CARA DEL DADO (2): " +_F2/_TamV);  
  console.log("CARA DEL DADO (3): " +_F3/_TamV);
  console.log("CARA DEL DADO (4): " +_F4/_TamV);
  console.log("CARA DEL DADO (5): " +_F5/_TamV);
  console.log("CARA DEL DADO (6): " +_F6/_TamV);  
  console.log("*************** FIN EJECUCIÓN FrecuenciaAbsoluta ***************");
}