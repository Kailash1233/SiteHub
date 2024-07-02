import React from "react";
import backgroundImage from "/images/1.jpg";

const Blog = () => {
  const blogPosts = [
    {
      title: "How to Sell Your Website Successfully",
      excerpt:
        "Learn the key steps to successfully sell your website and maximize its value...",
      link: "/blog/how-to-sell-your-website-successfully",
    },
    {
      title: "Website Market Trends in 2024",
      excerpt:
        "Stay ahead of the curve with the latest trends in the website market...",
      link: "/blog/website-market-trends-2024",
    },
    {
      title: "Top Tips for Website Development",
      excerpt:
        "Discover top tips and best practices for developing a high-quality website...",
      link: "/blog/top-tips-for-website-development",
    },
  ];

  return (
    <section className="bg-gray-100 text-center">
      <div
        className="flex items-start justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-3xl font-bold text-white p-20">Blog</h2>
      </div>

      <div className="py-20 max-w-4xl mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">{post.title}</h3>
            <p className="mb-4">{post.excerpt}</p>
            <a
              href={post.link}
              className="text-blue-500 hover:text-blue-600 font-semibold"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
