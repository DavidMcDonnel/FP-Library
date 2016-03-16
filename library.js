//(function(){

//_container to wrap a variable
function _container(val){
  this.val = val;
}

//_container map
_container.prototype.map = function(f){
  return container(f(this.val));
};

var Container = function(x){
  return new _container(x);
};

var map = curry(function(f,obj){
  return obj.map(f);
});

//compose :: (b -> c) -> (a -> b) -> (a -> c)
//This function is used to write
// function compositions like f of g of x
var compose=function(g,f){
  return function(x){
    return g(f(x));
  };
};

//id :: a -> a
//Identity function
function id(a){
  return a;
}

//curry :: (* -> a) -> (* -> a)
//This function is used to save a function and it's arguments
//until all arguments of a function are supplied.
function curry(fn){
  return function(){
    if(fn.length > arguments.length){
      var slice = Array.prototype.slice;
      var args = slice.apply(arguments);
      return function(){
        return fn.apply(
          null,args.concat(slice.apply(arguments)));
      };
    }
    return fn.apply(null,arguments);
  };
}

//log :: * -> String
//This function is used for debugging
//It outputs the console.log of the supplied object and the object
var log = function(){
  console.log(obj)
  return obj;
}

//map :: (a -> b) -> [a] -> [b]
//This function is used to apply a function over a list
// function map(f,list){
//   var concatList = function()
// }

//fork :: (* -> a) (* -> b)
function fork (lastly,f,g,x){
  curry(function(lastly,f,g,x){
    return lastly(f(x),g(x));
  });
}

//});