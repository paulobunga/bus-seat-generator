/**
 * AUTHOR: PAUL OBUNGA <paulobunga.one@gmail.com
 * DESCRIPTION: Function generates seats to populate a database :)
 * BUS SEAT GENERATOR
 * TODO: Take care of odd seat numbers
 *
 */
 let busOptions = {
    license: "UBA 100L",
    capacity: 72,
    columns: 3,
    status: "AVAILABLE",
    tooltip: "Seat is available"
  };
  
  let generate = ({ capacity, columns, ...busOptions }) => {
    let sitData = [];
    let rows = capacity / columns;
    let sits = [];
    for (let sit = 1; sit <= capacity; sit++) {
      sits.push({ id: sit, ...busOptions });
  
      if (sits.length == capacity) {
        console.log("Sit iteration complete");
  
        for (let cols = 1; cols <= columns; cols++) {
          let data = sits.slice(rows * cols - rows, rows * cols);
          sitData.push(data);
        }
      }
    }
  
    return sitData;
  };
  
  seatsToGenerate = generate(busOptions);
  
  console.log(seatsToGenerate);
