// radio station problem

interface Stations {
    [key:string] : Set<string>
}
const stations: Stations = {};

stations.one = new Set(['id', 'nv', 'ut']);
stations.two = new Set(['wa', 'id', 'mt']);
stations.three = new Set(['or', 'nv', 'ca']);
stations.four = new Set(['nv', 'ut']);
stations.five = new Set(['ca', 'az']);

const statesNeeded = new Set<string>();
statesNeeded.add('ca');
statesNeeded.add('ut');

const finalStations = new Set<string>();

while (statesNeeded.size) {
  let bestStation: null | string = null;
  let statesCovered = new Set<string>();

  Object.entries(stations).forEach((entry) => {
    const stationName = entry[0];
    const statesForStation = entry[1];

    // is there intersection between sets?
    const covered = new Set([...statesNeeded].filter((i) => statesForStation.has(i)));

    if (covered.size > statesCovered.size) {
      bestStation = stationName;
      statesCovered = covered;
    }
  });

  statesCovered.forEach((value) => {
    statesNeeded.delete(value);
  });
  if (bestStation) {
    finalStations.add(bestStation);
  }
}

console.log(finalStations);
