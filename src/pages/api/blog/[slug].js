// src/pages/api/blog/[slug].js
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { slug } = req.query;
  const blogPath = path.join(process.cwd(), "blog", `${slug}.md`);

  try {
    const fileContent = fs.readFileSync(blogPath, "utf-8");
    const frontMatterRegex = /^---\s([\s\S]*?)\s---/;
    const frontMatterMatch = fileContent.match(frontMatterRegex);
    const frontMatter = frontMatterMatch ? frontMatterMatch[1] : "";
    const content = fileContent.replace(frontMatterRegex, "").trim();

    const frontMatterObject = frontMatter
      .split("\n")
      .reduce((acc, line) => {
        const [key, value] = line.split(": ");
        if (key && value) {
          acc[key.trim()] = value.trim();
        }
        return acc;
      }, {});

    res.status(200).json({
      ...frontMatterObject,
      content,
    });
  } catch (error) {
    res.status(404).json({ message: "Blog not found." });
  }
}
