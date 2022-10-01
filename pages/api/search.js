// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import algoliasearch from 'algoliasearch/lite'

const client = algoliasearch('JGS1Z5Z2KB', '52a6212717375396f5a38c24be55549e');
const index = client.initIndex('prod_comics');


export default async function handler(req, res) {
  const { query: { q } } = req

  const { hits } = await index.search(q, {
    attributesToRetrieve: ['id', 'title', 'img', 'alt'],
    hitsPerPage: 10
  })

  return res.status(200).json(hits)
}
