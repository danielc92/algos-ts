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

// Recursion example #2: Adding numbers from array (without reduce)

const sumNumbers = (numbers: number[], base: number): number => {
  if (numbers.length) {
    const newBase = base + numbers[numbers.length - 1];
    const newNumbers = numbers.slice(0, numbers.length - 1);
    return sumNumbers(newNumbers, newBase);
  }
  return base;
};

console.log(sumNumbers([1, 2, 10], 0));
console.log(sumNumbers([], 0));
console.log(sumNumbers([10, 12], 0));

console.log(sumNumbers([1, 2, 3, 4, 5, 6, 7, 8], 0));

interface IWebPageData {
    title:string
    author:string
    hrefs: IWebPageData[]
}

const website: IWebPageData = {
  title: 'XYZ Warehouse home page',
  author: 'Jim',
  hrefs: [
    {
      title: 'XYZ Warehouse - Products',
      author: 'Jim',
      hrefs: [
        {
          title: 'XYZ Warehouse - Shovels',
          author: 'Jim',
          hrefs: [],
        },
        {
          title: 'XYZ Warehouse - Lawn mowers',
          author: 'Jim',
          hrefs: [
            {
              title: 'XYZ Warehouse - Electric lawn mowers',
              author: 'Jim',
              hrefs: [],
            },

            {
              title: 'XYZ Warehouse - Gas lawn mowers',
              author: 'Jim',
              hrefs: [],
            },
          ],
        },

        {
          title: 'XYZ Warehouse - Soil',
          author: 'Jim',
          hrefs: [],
        },
        {
          title: 'XYZ Warehouse - Gravel',
          author: 'Jim',
          hrefs: [],
        },
      ],
    },
    {
      title: 'XYZ Warehouse - Contact',
      author: 'Jim',
      hrefs: [],
    },
    {
      title: 'XYZ Warehouse - About us',
      author: 'Jim',
      hrefs: [],
    },

  ],
};

let pageName = '';

const searchWebPages = (data: IWebPageData) => {
  if (data.title.indexOf('Gravel') > -1) {
    pageName = data.title;
  }
  data.hrefs.forEach((x) => searchWebPages(x));
};

const searchWebPagesV2 = (data:IWebPageData, searchToken: string) => {
  let searchResult = '';
  if (data.title.indexOf(searchToken) > -1) {
    searchResult = data.title;
    return searchResult;
  }
  data.hrefs.forEach((x) => searchWebPagesV2(x, searchToken));
  return undefined;
};

searchWebPages(website);
console.log(searchWebPagesV2(website, 'Gravel'));
console.log(pageName);
