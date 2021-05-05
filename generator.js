class Generator {
    generate(capacity, columns, license = 'UBA 100L') {
        let sitData = [];
        let rows = capacity/columns;
        let sits = [];
        for (let sit = 1; sit <= capacity; sit++) {
            sits.push({ id: sit, license: license, status: 'empty'});

            if(sits.length == capacity) {
                console.log('Sit iteration complete');
                
                for (let cols = 1; cols <= columns; cols++) {
                    let data = sits.slice(rows*cols - rows, rows*cols);
                    sitData.push(data);
                }
            }
        }

        console.log('===>', sitData);
        
    }
}

module.exports = new Generator();