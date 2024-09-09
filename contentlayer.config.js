// contentlayer.config.js
import { defineDocumentType, makeSource } from "@contentlayer/source-files";
import readingTime from "reading-time";

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
