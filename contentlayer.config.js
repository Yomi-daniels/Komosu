// contentlayer.config.js
import { defineDocumentType, makeSource } from "@contentlayer/source-files";
import readingTime from "reading-time";
import GithubSlugger from "github-slugger";
export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "date", required: true },
    updatedAt: { type: "date", required: true },
    description: { type: "string", required: true },
    image: { type: "image", required: false },
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
      resolve: (doc) => `/blog/${doc._raw.flattenedPath}`,
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
    toc: {
      type: "json",
      resolve: async (doc) => {
        const regExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger();
        const headings = Array.from(doc.body.raw.matchAll(regExp)).map(
          ({ groups }) => {
            const flag = groups?.flag;
            const content = groups?.content;

            return {
              level:
                flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
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

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  // mdx: {
  //   remarkPlugins: [remarkGfm],
  //   rehypePlugins: [
  //     rehypeSlug,
  //     [
  //       rehypePrettyCode,
  //       {
  //         onVisitLine(node) {
  //           if (node.children.length === 0) {
  //             node.children = [{ type: "text", value: "" }];
  //           }
  //         },
  //       },
  //     ],
  //   ],
  // },
});
