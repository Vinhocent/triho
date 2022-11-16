import RSS from "rss";
import { getAllPosts } from "../lib/mdx";

import fs from "fs";

export default async function generateRssFeed() {
  const site_url = process.env.NEXT_PUBLIC_VERCEL_URL;
  const allposts = getAllPosts(["title", "slug", "date", "description"]);

  const feedOptions = {
    title: "Blog posts | RSS Feed",
    description: "Welcome to this blog posts!",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/logo.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Ibas`,
  };

  const feed = new RSS(feedOptions);
  allposts.map((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${site_url}/blog/${post.slug}`,
      date: post.date,
    });
  });

  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}
