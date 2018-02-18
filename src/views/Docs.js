import Layout from 'components/Layout'
import Markdown from 'components/Markdown'
import SplitView from 'components/SplitView'

const menu = [{
  title: 'Dispatcher',
  items: [
    {
      path: '/',
      title: 'Installation',
      content: null,
      items: []
    }
  ]
},{
  title: 'Client',
  items: []
},{
  title: 'Adapter',
  items: []
}]

export default () => (
  <Layout class='layout'>
    <SplitView basePath='docs' menu={menu} />
  </Layout>
)
