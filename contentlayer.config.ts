import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import readingTime from 'reading-time'

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `blog/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
        description: { type: 'string', required: true },
        tags: { type: 'list', of: { type: 'string' } },
        imageUrl: { type: 'string' },
        author: { type: 'string', default: 'Ecocea Team' },
    },
    computedFields: {
        slug: {
            type: 'string',
            resolve: (doc) => doc._raw.flattenedPath.replace('blog/', ''),
        },
        url: {
            type: 'string',
            resolve: (doc) => `/blog/${doc._raw.flattenedPath.replace('blog/', '')}/`,
        },
        readingTime: {
            type: 'number',
            resolve: (doc) => Math.ceil(readingTime(doc.body.raw).minutes),
        },
    },
}))

export default makeSource({
    contentDirPath: 'content',
    documentTypes: [Post],
})
