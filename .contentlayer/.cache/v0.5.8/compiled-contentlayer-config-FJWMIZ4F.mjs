// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import readingTime from "reading-time";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" } },
    imageUrl: { type: "string" },
    author: { type: "string", default: "Ecocea Team" }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("blog/", "")
    },
    url: {
      type: "string",
      resolve: (doc) => `/blog/${doc._raw.flattenedPath.replace("blog/", "")}/`
    },
    readingTime: {
      type: "number",
      resolve: (doc) => Math.ceil(readingTime(doc.body.raw).minutes)
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post]
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-FJWMIZ4F.mjs.map
