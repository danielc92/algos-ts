interface ToyBox {
    name:string
    hasKey: boolean
    boxes: ToyBox[]
}

const toybox: ToyBox = {
  name: 'toys',
  hasKey: false,
  boxes: [
    {
      name: 'A',
      hasKey: false,
      boxes: [],
    },
    {
      name: 'B',
      hasKey: false,
      boxes: [
        {
          name: 'C',
          hasKey: true,
          boxes: [
            {
              name: 'D',
              hasKey: true,
              boxes: [],
            },
          ],
        },
      ],
    },
  ],
};

const findKeys = (data: ToyBox) => {
  // console.log("[STARTED]", data.name)
  data.boxes.forEach((box) => {
    if (box.hasKey) {
      console.log('Found a key in box', box.name);
      findKeys(box);
    } else {
      findKeys(box);
    }
  });
};

findKeys(toybox);
