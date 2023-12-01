export default async function sitemap() {
  try {
    const currentDate = new Date().toISOString();

    return [
      {
        url: "https://www.digital-army.org/",
        lastModified: currentDate,
        changeFrequency: "yearly",
        priority: 1,
      },
      {
        url: "https://www.digital-army.org/about",
        lastModified: currentDate,
        changeFrequency: "yearly",
        priority: 0.9,
      },
      {
        url: "https://www.digital-army.org/portfolio",
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: "https://www.digital-army.org/blogs",
        lastModified: currentDate,
        changeFrequency: "weekly",
        priority: 0.7,
      },
      {
        url: "https://www.digital-army.org/contact",
        lastModified: currentDate,
        changeFrequency: "yearly",
        priority: 0.6,
      },
    ];
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
}
