import Layout from 'components/Layout'
import Markdown from 'components/Markdown'
import SplitView from 'components/SplitView'
import Document from 'components/Document'

const menu = [{
  title: 'Community',
  items: [
    {
      path: '/code-of-conduct',
      title: 'Code of conduct',
      content: () => <Document path='community/code-of-conduct' />,
      items: []
    }, {
      path: '/contributors',
      title: 'Contributors',
      content: () => <h1>Contributors</h1>,
      items: []
    }, {
      path: '/license',
      title: 'MIT License',
      content: () => <Document path='community/license' />,
      items: []
    }
  ]
}, {
  title: 'Project',
  items: [{
    path: '/about',
    title: 'About',
    content: () => <h1>About</h1>,
    items: []
  }]
}]

export default () => (
  <Layout class='layout'>
    <SplitView basePath='community' menu={menu} />
  </Layout>
)
