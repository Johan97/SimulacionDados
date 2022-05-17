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
  console.log("*************** INICIO EJECUCIÓN ***************");
  console.log("ITERACIÓN PARA "+ num_ite +" LANZAMIENTOS DE UN DADO");
  var _iteracciones = num_ite;
  for (var i_vector = 1; i_vector <= _iteracciones; i_vector++) {
    var _numaleatorio = Math.ceil(Math.random()*(6));
    //console.log("Se crea vector que almacene en memoria 50 numeros aleatorios entre 1 y 6");
    var _Vector = new Array(_iteracciones);
    _Vector[i_vector] = _numaleatorio;
    console.log("ARREGLO UNIDIMENSIONAL, POSICIÓN: " + num_ite + " ITERACCIONES\n VALOR: \n" + _Vector[i_vector]);
    console.log();
  }
  console.log("*************** FIN EJECUCIÓN ***************");
}//FIN FUNCIÓN NumeroAleatorio


