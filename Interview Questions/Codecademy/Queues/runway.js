const Queue = require("./Queue");

const load = (flights) => {
  //create a const runway with a queue of maxsize 3
  const runway = new Queue(3);
  flights.forEach((flight) => {
    //enqueue flight to runway
    //within a try catch block
    try {
      runway.enqueue(flight);
      console.log(`${flight} taxi to runway.`);
    } catch (e) {
      console.log("Runway full!");
    }
  });
  return runway;
};

const clear = (runway) => {
  while (!runway.isEmpty()) {
    console.log("\nFlights wait...\n");
    //store dequeued head in const
    const cleared = runway.dequeue();
    console.log(`${cleared}, is cleared for takeoff!\n${cleared} in air.`);
  }

  console.log("\nAll planes took off, runway clear.");
};

module.exports = { load, clear };
