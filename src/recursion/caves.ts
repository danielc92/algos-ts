// Recursion example #1: Finding the total depth and length of a cave system
interface ICaveData {
    length: number;
    depth: number;
    id: string;
    branches: ICaveData[]
}

const caves: ICaveData = {
  length: 4.5,
  depth: 2.4,
  id: '001',
  branches: [
    {
      length: 4.5,
      depth: 2.4,
      id: '005',
      branches: [

      ],
    },
    {
      length: 41.5,
      depth: 23.4,
      id: '006',
      branches: [

      ],
    },
    {
      length: 7.5,
      depth: 6.4,
      id: '007',
      branches: [
        {
          length: 8.5,
          depth: 8.4,
          id: '008',
          branches: [

          ],
        },
        {
          length: 88.5,
          depth: 23.4,
          id: '009',
          branches: [
            {
              length: 848.5,
              depth: 233.4,
              id: '010',
              branches: [

              ],
            },
          ],
        },
      ],
    },
  ],
};

let totalDepth = 0;
let totalLength = 0;

const getTotalDepthAndLength = (data: ICaveData) => {
  totalDepth += data.depth;
  totalLength += data.length;

  if (!data.branches.length) {
    console.log(`${data.id} has no more sub caves.`);
  }
  data.branches.forEach((branch) => getTotalDepthAndLength(branch));
};

getTotalDepthAndLength(caves);

console.log('TOTAL CAVE DEPTH (m)', totalDepth);
console.log('TOTAL CAVE LENGTH (m)', totalLength);


