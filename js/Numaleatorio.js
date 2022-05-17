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
      //console.log('PROMESA OK en addEventListener');      
    })
    .catch(err =>{
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

//SE PARAMETRIZA Y CREA GRÁFICA DE BARRAS CON LA FRECUENCIA
  var _ctx = document.getElementById("mychart").getContext("2d");
  var mychart = new Chart(_ctx,{
  type:"bar",
  data:{
    labels:['#1','#2','#3','#4','#5','#6'],
    datasets:[{
      label:'FRECUENCIA CON QUE SE REPITE UN NÚMERO ',
      data:[_contar1, _contar2, _contar3, _contar4, _contar5, _contar6]
        }]
    }
});

      console.log("FRECUENCIA NÚMERO (1) ESTÁ: " + _contar1 + " VECES");
      console.log("FRECUENCIA NÚMERO (2) ESTÁ: " + _contar2 + " VECES");
      console.log("FRECUENCIA NÚMERO (3) ESTÁ: " + _contar3 + " VECES");     
      console.log("FRECUENCIA NÚMERO (4) ESTÁ: " + _contar4 + " VECES");
      console.log("FRECUENCIA NÚMERO (5) ESTÁ: " + _contar5 + " VECES");
      console.log("FRECUENCIA NÚMERO (6) ESTÁ: " + _contar6 + " VECES");
      console.log("*************** FIN EJECUCIÓN ValidarNumerosDado ***************");
      FrecuenciaRelativa(_contar1,_contar2,_contar3,_contar4,_contar5,_contar6,_Vector.length);
}


//FUNCIÓN PARA CALCULAR LA FRECUENCIA RELATIVA Y ABSOLUTA
function FrecuenciaRelativa(_FR1, _FR2, _FR3, _FR4, _FR5, _FR6,_TamV){
  console.log("\n*************** INICIO EJECUCIÓN FrecuenciaRelativa ***************");
  var _FR1S1 =_FR1/_TamV, _FR2S2 = _FR2/_TamV, _FR3S3 = _FR3/_TamV, _FR4S4 = _FR4/_TamV, _FR5S5 = _FR5/_TamV, _FR6S6 = _FR6/_TamV;
  console.log("FRECUENCIA RELATIVA (1): " + _FR1S1);
  console.log("FRECUENCIA RELATIVA (2): " + _FR2S2);  
  console.log("FRECUENCIA RELATIVA (3): " + _FR3S3);
  console.log("FRECUENCIA RELATIVA (4): " + _FR4S4);
  console.log("FRECUENCIA RELATIVA (5): " + _FR5S5);
  console.log("FRECUENCIA RELATIVA (6): " + _FR6S6);  
  console.log("*************** FIN EJECUCIÓN FrecuenciaRelativa ***************");
  FrecuenciaAbsoluta(_FR1S1, _FR2S2, _FR3S3, _FR4S4, _FR5S5, _FR6S6);
}


//FUNCIÓN PARA CALCULAR LA FRECUENCIA ABSOLUTA
function FrecuenciaAbsoluta(_FR1S1, _FR2S2, _FR3S3, _FR4S4, _FR5S5, _FR6S6){
  console.log("\n*************** INICIO EJECUCIÓN FrecuenciaAbsoluta ***************");
  var _FA1 = _FR1S1, _FA2 = _FA1 + _FR2S2, _FA3 = _FA2 + _FR3S3, _FA4 = _FA3 + _FR4S4, _FA5 = _FA4 + _FR5S5, _FA6 = _FA5 + _FR6S6;
  console.log("FRECUENCIA ABSOLUTA (1): " + _FA1);
  console.log("FRECUENCIA ABSOLUTA (2): " + _FA2);  
  console.log("FRECUENCIA ABSOLUTA (3): " + _FA3);
  console.log("FRECUENCIA ABSOLUTA (4): " + _FA4);
  console.log("FRECUENCIA ABSOLUTA (5): " + _FA5);
  console.log("FRECUENCIA ABSOLUTA (6): " + Math.ceil(_FA6));  
  console.log("*************** FIN EJECUCIÓN FrecuenciaAbsoluta ***************");
}