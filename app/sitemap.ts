import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "")

  const routes = [
    "",
    "/about",
    "/services",
    "/contact",
  ]

  const now = new Date()

  return routes.map((route) => ({
    url: `${baseUrl}${route || "/"}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }))
}


