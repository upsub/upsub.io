import Layout from 'components/Layout'
import Markdown from 'components/Markdown'
import SplitView from 'components/SplitView'
import Document from 'components/Document'

const menu = [{
  title: 'Getting Started',
  items: [
    {
      path: '/',
      title: 'Intro',
      content: () => <Document path='getting-started/intro' />,
      items: []
    },
    {
      path: '/installation',
      title: 'Installation',
      content: () => <Document path='getting-started/installation' />,
      items: []
    },
    {
      path: '/configuration',
      title: 'Configuration',
      content: () => <h1>Testing</h1>,
      items: []
    },
    {
      path: '/clients',
      title: 'Clients',
      content: null,
      items: []
    },
    {
      path: '/adapters',
      title: 'Adapters',
      content: null,
      items: []
    },
    {
      path: '/production',
      title: 'In production',
      content: null,
      items: []
    }
  ]
}]

export default () => (
  <Layout class='layout'>
    <SplitView basePath='getting-started' menu={menu} />
  </Layout>
)
