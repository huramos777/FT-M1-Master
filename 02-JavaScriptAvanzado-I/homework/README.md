
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; 
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);// 10 es la variable declarada en su contexto
  console.log(a);// 8 , porque es el argumento "a" que se pasa en c(8,9,10)
  var f = function(a, b, c) {
    b = a;
    console.log(b); // es 8 porque b pasa a valer lo mismo q a 
    b = c;// b = 10
    var x = 5;
  }
  f(a,b,c); //(8,10,10)
  console.log(b);// 10 mi rta , pero vale 9 porque recibe el parametro puro, ya que la funcion f ya finalizo
}
c(8,9,10);
console.log(b); // 10 porque es b = 10 arriba de la funcion
console.log(x); // 1 es x = 1 arriba de la funcion
```

```javascript
console.log(bar); // es undefined porque el hoisting solo se lleva el nombre en la primera ppasada.
console.log(baz); // UNDEFINED por lo mismo que la de arriba
foo(); // hola
function foo() { console.log('Hola!'); } 
var bar = 1,
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // es franco, porque al estar en true se ejecuta el IF, y como esta en el mismo contexto se modifica
```

```javascript
var instructor = "Tony";
console.log(instructor);// tony porque es del global
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // franco porque esta dentro de su contexto
   }
})();
console.log(instructor); // tony porque pertenece al contexto global
```

```javascript
var instructor = "Tony"; 
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);// the flash
    console.log(pm);// reverse flash
}
console.log(instructor);//  seria the flash
console.log(pm); //  franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"  // 2 tipo number
"2" * "3" // 6 tipo number
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45"
"4" - 2 // 2 tipo number
"4px" - 2 // NaN 
7 / 0 // infinity 
{}[0] //  [ 0 ]  
parseInt("09") // 9 number
5 && 2 // 2 porque devuelve el ultimo true
2 && 5 // 5 porque devuelve el ultimo true
0 || 5 // 5 devuelve el primero que sea true
[3]+[3]-[10] // 23 number
3>2>1 // false 
[] == ![] // true, es para mostrar que compara el valor pero no el tipo de datos, si fuera === ahi si daria false
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undefined xq el hoisting solo se lleva de la declaracion de la variable
   console.log(foo()); // retorna 2 porque a la funcion si la ejecuta con su contenido

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); // meow mix porque al ser false el arg no se ejecuta el if y no se modifica snack
               // DA UNDEFINED PORQUE??????????
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // retorna aurelio de rosa porque el this hace referencia al obj donde se encuentra

var test = obj.prop.getFullname;

console.log(test());  //reorna juan perez porque al pasarla a una variable y consologuear usa la funcion extraida y se aplica en el contexto fuera de la funcion
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();// 1 --> 4 --> 3 --> 2  //  las que tienen set time out las delega y las trae al final de todo, por mas de que sea 0 el set.
```
