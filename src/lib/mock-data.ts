export const mockData = {
  //////////////////////////////
  ////////////////////// MENU
  /////////////////////////////
  menu: (type: string) => {
    if (type !== "menu") {
      return { status: 200, result: [] };
    }

    return {
      status: 200,
      result: [
        { id: 1, url: "/", lang: [{ vi: "home" }, { en: "home" }], icon: null },
        {
          id: 2,
          url: "/documents",
          lang: [{ vi: "documents" }, { en: "documents" }],
          icon: null,
        },
        {
          id: 5,
          url: "/blogs",
          lang: [{ vi: "blogs" }, { en: "blogs" }],
          icon: null,
        },
      ],
      title: [],
    };
  },

  //////////////////////////////
  ////////////////////// SLUG TYPE
  /////////////////////////////
  slugType: (slug: string) => {
    const map: Record<string, string> = {
      blogs: "page",
      example: "post",
      home: "page",
      documents: "page",
      anime: "category",
      digitalillustration: "category",
      conceptart: "category",
      photography: "category",
      uiuxdesign: "category",
      thirddart: "category",
    };

    return { type: map[slug] ?? null };
  },

  //////////////////////////////
  ////////////////////// PAGE BY SLUG
  /////////////////////////////
  getPageBySlug: (slug: string) => {
    return {
      title: "Hello Welcome to Seo Kit",
      seo_title: `Seo kit ${slug} page`,
      seo_description: "Seo descriptions",
      post_date: "2025-08-05T08:18:04+07:00",
      image: null,
      content: null,
      type: slug,
      ...(slug === "home" && { items: [1, 2, 3] }),
    };
  },

  //////////////////////////////
  ////////////////////// POST BY CATEGORY (normal posts)
  /////////////////////////////
  getPostByCate: ({ post_type = "post" }) => {
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
  ////////////////////// POST BY SLUG
  /////////////////////////////
  getPostBySlug: ({ type, slug }: { type: string; slug: string }) => {
    return {
      title: "This is just example page detail 😄",
      type,
      slug,
    };
  },

  //////////////////////////////
  ////////////////////// Blogs (the tricky one)
  /////////////////////////////
  getArtPinsByCategory: ({
    per_page = 10,
    paged = 1,
  }: {
    per_page?: number;
    paged?: number;
  }) => {
    return {
      total_posts: 20,
      posts: [
        {
          title: "Dreamy Anime Night City",
          featured_image: "/mock/images/art-anime-night-city.webp",
          slug: "dreamy-anime-night-city",
          published_date: "2025-01-01T10:00:00+00:00",
          vn_date: "01-01-2025",
          des: "Aesthetic anime-style illustration inspired by cyberpunk night cities.",
          pin: {
            author_name: "Mock Artist Alpha",
            author_avatar: "/mock/avatars/artist-alpha.webp",
            save_rate: "78",
            like_rate: "65",
            comment_rate: "12",
            created_time: "2025-01-01 18:00:00",
            category: {
              name: "Anime Art",
              cover: "/mock/categories/anime.webp",
              slug: "anime-art",
            },
          },
        },
      ],
      title: null,
      description: null,
      seo_title: null,
      seo_desc: null,
      category_list: [
        {
          name: "Anime",
          logo: "/uploads/2025/09/category-anime.webp",
          slug: "anime",
        },
        {
          name: "Digital Illustration",
          logo: "/uploads/2025/09/category-illustration.webp",
          slug: "digital-illustration",
        },
        {
          name: "Concept Art",
          logo: "/uploads/2025/09/category-concept-art.webp",
          slug: "concept-art",
        },
        {
          name: "Photography",
          logo: "/uploads/2025/09/category-photography.webp",
          slug: "photography",
        },
        {
          name: "UI / UX Design",
          logo: "/uploads/2025/09/category-uiux.webp",
          slug: "ui-ux-design",
        },
        {
          name: "3D Art",
          logo: "/uploads/2025/09/category-3d.webp",
          slug: "thirdd-art",
        },
      ],
    };
  },
};
