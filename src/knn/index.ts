// k nearest neighbours can be used to build recommendation engines
// following two points on a graph, the distance can be calculate between them
// this idea can be expanded to many features

// weather 0 bad - 5 good
// weekend 1 / 0

const items = [
  {
    id: 1,
    weather: 0,
    weekend: 1,
    loavesSold: 48,
  },
  {
    id: 2,
    weather: 0,
    weekend: 1,
    loavesSold: 52,
  },
  {
    id: 3,
    weather: 5,
    weekend: 1,
    loavesSold: 14,
  },
  {
    id: 10,
    weather: 5,
    weekend: 1,
    loavesSold: 18,
  },
  {
    id: 4,
    weather: 4,
    weekend: 0,
    loavesSold: 12,
  },
  {
    id: 5,
    weather: 0,
    weekend: 0,
    loavesSold: 45,
  },
];

// suppose its a weekend
// weather is bad
// and loaves must be predicted

const data = {
  weather: 4,
  weekend: 1,
};

items.forEach((i) => {
  const distance = Math.sqrt((data.weather - i.weather) ** 2 + (data.weekend - i.weekend) ** 2);
  console.log(distance, 'ID: ', i.id);
});
