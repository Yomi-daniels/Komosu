// contentlayer.config.cjs
import { makeSource, defineDocumentType } from "contentlayer2/source-files";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import GithubSlugger from "github-slugger";

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/**/*.md", // Make sure files are in .md format
  contentType: "md", // For .md files, contentType should be "md"
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "date",
      required: true,
    },
    updatedAt: {
      type: "date",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    image: { type: "string" },
    isPublished: {
      type: "boolean",
      default: true,
    },
    author: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`,
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
    imagePath: {
      type: "string",
      resolve: (doc) => doc.image || null,
    },
    toc: {
      type: "json",
      resolve: async (doc) => {
        const regularExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger();
        const headings = Array.from(doc.body.raw.matchAll(regularExp)).map(
          ({ groups }) => {
            const flag = groups?.flag;
            const content = groups?.content;

            return {
              level:
                flag?.length === 1
                  ? "one"
                  : flag?.length === 2
                  ? "two"
                  : "three",
              text: content,
              slug: content ? slugger.slug(content) : undefined,
            };
          }
        );

        return headings;
      },
    },
  },
}));

const codeOptions = {
  theme: "github-dark",
  grid: false,
};

export default makeSource({
  contentDirPath: "content", // Ensure 'content' folder is in the root
  documentTypes: [Blog],
  mdx: { // For markdown files, ensure this part is configured correctly
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        { behavior: "append", properties: { className: ["anchor"] } },
      ],
      [rehypePrettyCode, codeOptions],
    ],
  },
});
npm run 