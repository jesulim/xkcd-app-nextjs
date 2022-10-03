import algoliasearch from 'algoliasearch/lite'

const client = algoliasearch('JGS1Z5Z2KB', '52a6212717375396f5a38c24be55549e');
const index = client.initIndex('prod_comics');

const CACHE = {}

export const search = async ({ query }) => {
  if(CACHE[query]) return { results: CACHE[query]}

  const { hits } = await index.search(query, {
    attributesToRetrieve: ['id', 'title', 'img', 'alt'],
    hitsPerPage: 10
  })

  CACHE[query] = hits

  return { results: hits }
}