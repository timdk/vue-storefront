import { SearchQuery } from 'storefront-query-builder'

const createSingleBlockQuery = ({ key, value }): SearchQuery => {
  let query = new SearchQuery()

  if (value) {
    query = query.applyFilter({ key, value: { eq: value } })
  }

  return query
}

export default createSingleBlockQuery
