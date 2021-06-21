    const fs = require('fs');
    const JSONToFile = (object, filename) => fs.writeFileSync(`${filename}.json`, JSON.stringify(object, null, 2));

    JSONToFile({ test: 'wo ich herrkomm'}, 'visi');

