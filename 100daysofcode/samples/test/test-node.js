const http = require('node:http');
const { AsyncLocalStorage } = require('node:async_hooks');

const storage = new AsyncLocalStorage();
storage.enterWith({
    name: 'Visi',
    field: 'Web Developer',
    yearsofex:6
})
function logWithId(msg) {
  const id = storage.getStore();
  console.log(id);
  console.log(`${id !== undefined ? id : '-'}:`, msg);
}

let idSeq = 0;
http.createServer((req, res) => {
  storage.run(idSeq++, () => {
    logWithId('start');
    // Imagine any chain of async operations here
    setImmediate(() => {
      logWithId('finish');
      res.end('Hallo fucking ');
    });
  });
}).listen(8080);

http.get('http://localhost:8080');
http.get('http://localhost:8080');
// Prints:
//   0: start
//   1: start
//   0: finish
//   1: finish