import * as fs from "fs";
import { NextApiResponse } from "next";

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }: { res: NextApiResponse; }) => {

  const BASE_URL = (process && process.env.NODE_ENV === 'development')
    ? "http://localhost:3000"
    : "https://www.hermesolutions-llc.com/";

  const staticPaths = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "api",
        "_app.tsx",
        "_document.tsx",
        "_base.tsx",
        "404.tsx",
        "sitemap.xml.tsx",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath}`;
    });

  // TODO: Change to normal code
  const allPaths = [...staticPaths].map((path) => path.replace('.tsx', '').replace('index', ''));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${(allPaths).map((url) => {
    return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
  }).join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
