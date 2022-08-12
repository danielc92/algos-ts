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

const searchWebPages = (data: IWebPageData) => {
  if (data.title.indexOf('Gravel') > -1) {
    console.log(data.title);
  }
  data.hrefs.forEach((x) => searchWebPages(x));
};

searchWebPages(website);
