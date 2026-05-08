const { SitemapStream, streamToPromise } = require("sitemap")
const { createGzip } = require("zlib")
const fs = require("fs")
const path = require("path")
const matter = require("gray-matter")

async function generateSitemap() {
  const hostname = "https://eamz.netlify.app/"

  const sitemap = new SitemapStream({ hostname })

  sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 })
  sitemap.write({ url: "/about", changefreq: "daily", priority: 0.9 })
  sitemap.write({ url: "/projects", changefreq: "daily", priority: 0.9 })
  sitemap.write({ url: "/projects/archive", changefreq: "daily", priority: 0.7 })

  const projectsDir = path.join(process.cwd(), "src/content/projects")
  if (fs.existsSync(projectsDir)) {
    const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith(".md"))
    files.forEach((file) => {
      const slug = file.replace(".md", "")
      sitemap.write({ url: `/projects/${slug}`, changefreq: "weekly", priority: 0.8 })
    })
  }

  sitemap.end()

  const sitemapXML = (await streamToPromise(sitemap)).toString()
  fs.writeFileSync("./public/sitemap.xml.gz", sitemapXML)
}

generateSitemap()