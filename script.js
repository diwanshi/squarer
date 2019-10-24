let squarer;

function loadWebAssembly(fileName) {
  return fetch(fileName)
    .then(response => response.arrayBuffer())
    .then(buffer => WebAssembly.compile(buffer))
    .then(module => {return new WebAssembly.Instance(module) });
};
  
loadWebAssembly('squarer.wasm')
  .then(instance => {    
    squarer = instance.exports.squarer;
    console.log('Finished compiling! Ready when you are...');
  });

function squareTheValue() {
  let num = document.getElementById('num').value;  
  const squaredValue = squarer(num);  
  document.getElementById('value').innerHTML = squaredValue;
}