export const mockData = {
  //////////////////////////////
  //////////////////////MENU
  /////////////////////////////
  menu: (type: string) => {
    if (type !== "menu")
      return {
        status: 200,
        result: [],
      };
    return {
      status: 200,
      result: [
        {
          id: 1,
          url: "/",
          lang: [
            {
              vi: "home",
            },
            {
              en: "home",
            },
          ],
          icon: null,
        },
        {
          id: 2,
          url: "/service",
          lang: [
            {
              vi: "service",
            },
            {
              en: "service",
            },
          ],
          icon: null,
        },
        {
          id: 3,
          url: "/pricing",
          lang: [
            {
              vi: "pricing",
            },
            {
              en: "pricing",
            },
          ],
          icon: null,
        },
        {
          id: 4,
          url: "/contact",
          lang: [
            {
              vi: "contact",
            },
            {
              en: "contact",
            },
          ],
          icon: null,
        },
        {
          id: 5,
          url: "/blogs",
          lang: [
            {
              vi: "blogs",
            },
            {
              en: "blogs",
            },
          ],
          icon: null,
        },
      ],
      title: [], //// it does have object too :D
    };
  },
  //////////////////////////////
  //////////////////////get page type
  /////////////////////////////
  slugType: (slug) => {
    switch (slug) {
      case "service":
        return {
          type: "category",
        };
      case "pricing":
        return {
          type: "page",
        };
      case "contact":
        return {
          type: "page",
        };
      case "blogs":
        return {
          type: "page",
        };
      case "example":
        return {
          type: "post",
        };
      case "home":
        return {
          type: "page",
        };
      default:
        return {
          type: null,
        };
    }
  },
  //////////////////////////////
  //////////////////////get page by slug
  /////////////////////////////
  getPageBySlug: (slug) => {
    switch (slug) {
      case "service":
        return {
          title: "Hello Welcome to Seo Kit",
          seo_title: "Seo kit service page",
          seo_description: "Seo descriptions",
          post_date: "2025-08-05T08:18:04+07:00",
          image: null,
          content: null,
          type: "service",
        };
      case "contact":
        return {
          title: "Hello Welcome to Seo Kit",
          seo_title: "Seo kit contact page",
          seo_description: "Seo descriptions",
          post_date: "2025-08-05T08:18:04+07:00",
          image: null,
          content: null,
          type: "contact",
        };
      case "blogs":
        return {
          title: "Hello Welcome to Seo Kit",
          seo_title: "Seo kit blogs page",
          seo_description: "Seo descriptions",
          post_date: "2025-08-05T08:18:04+07:00",
          image: null,
          content: null,
          type: "default",
        };
      case "pricing":
        return {
          title: "Hello Welcome to Seo Kit",
          seo_title: "Seo kit pricing page",
          seo_description: "Seo descriptions",
          post_date: "2025-08-05T08:18:04+07:00",
          image: null,
          content: null,
          type: "pricing",
        };
      case "home":
        return {
          title: "Hello Welcome to Seo Kit",
          seo_title: "Seo kit home page",
          seo_description: "Seo descriptions",
          post_date: "2025-08-05T08:18:04+07:00",
          image: null,
          content: null,
          type: "home",
          items: [1, 2, 3, 4, 5],
        };
    }
  },
  //////////////////////////////
  //////////////////////get post by category
  /////////////////////////////
  getPostByCate: ({
    type = "category",
    slug = "",
    post_type = "post",
    per_page = 5,
    paged = 1,
  }) => {
    if (post_type === "post") {
      return {
        total_post: 15,
        posts: [
          {
            id: 1,
            slug: "example",
            title: "example seo kit data :D",
          },
        ],
        title: null,
        description: null,
        seo_title: null,
        seo_desc: null,
      };
    }
  },
  //////////////////////////////
  //////////////////////get post by slug
  /////////////////////////////
  getPostBySlug: ({ type, slug }) => {
    return {
      title:
        "this is just example of page detail that getting by type and slug :D",
      type,
      slug,
    };
  },
};
