
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
