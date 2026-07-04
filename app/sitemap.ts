import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [
    { path: "", priority: 1 },
    { path: "/blog", priority: 0.7 },
    { path: "/blog/about-zoumou-extension", priority: 0.75 },
    { path: "/blog/repair", priority: 0.7 },
    { path: "/blog/faq", priority: 0.7 }
  ];

  return paths.map((item) => ({
    url: `${siteUrl}${item.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: item.priority
  }));
}
