import Algolia from 'algoliasearch'

const client = Algolia('6L4BP18C7G', '59e5d053f16aa77c6b7cd94ccb83746a')
const index = client.initIndex('jokes')

export default index
