import Layout from 'components/Layout'
import SplitView from 'components/SplitView'
import Document from 'components/Document'
import Clients from './Clients'

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
      content: () => <Document path='getting-started/configuration' />,
      items: []
    },
    {
      path: '/clients',
      title: 'Clients',
      content: () => <Clients />,
      items: []
    },
    {
      path: '/channels',
      title: 'Channels',
      content: () => <Document path='getting-started/channels' />,
      items: []
    },
    {
      path: '/presence',
      title: 'Presence',
      content: () => <Document path='getting-started/presence' />,
      items: []
    }
  ]
}]

export default () => (
  <Layout class='layout'>
    <SplitView basePath='getting-started' menu={menu} />
  </Layout>
)
