// Esto es lo mas basico de JS, en la linea 2 se JS selecciona un elemento de HTML usando su ID muy parecido a como lo hace css, cuando JS logra "localizar" el elemento lo guarda en
// la variable buttonTest y nos permite acceder a las funcionalidades que tiene.
let buttonTest = document.getElementById('test-button');

// Esto es un eventListener nos permite agregar una funcion que "escucha" a ese botton, y reacciona cuando "escucha" lo que le pedimos que escuche, en este caso es un click.
// 'click' especifica que tiene que reaccionar a un click y despues sigue la funcion() y hacer un console.log
// esto se va a disparar cada vez que se haga click en el boton
buttonTest.addEventListener('click', function () {
  console.log('asd');
});
