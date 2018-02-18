import { Component } from 'preact'
import Markdown from 'components/Markdown'
import './SplitView.css'

function join (...paths) {
  let newPath = ''

  for (const path of paths) {
    if (path[0] === '/') {
      newPath += path.replace(/\/$/, '')
    } else {
      newPath += '/' + path
    }
  }

  return newPath.replace(/\/$/, '')
}


export default class SplitView extends Component {

  componentDidUnmount () {
    document.title = 'UpSub'
  }

  componentDidUpdate () {
    window.scrollTo(0, 0)
  }

  render ({ menu }) {
    return (
      <div class='split-view'>
        <menu>
          {menu.map(menu => this.renderMenu(menu, true))}
        </menu>
        <section class='content'>
          {menu.map(menu => this.renderContent(menu))}
        </section>
      </div>
    )
  }

  renderMenu (menu, parent) {
    return (
      <span>
        {parent && (<h6>{menu.title}</h6>)}
        <ul>
          {menu.items.map(item => this.renderMenuItem(item))}
        </ul>
      </span>
    )
  }

  renderMenuItem (item) {
    const path = join(this.props.basePath, item.path)

    if (path === window.location.pathname) {
      document.title = item.title + ' - UpSub';
    }

    return (
      <li class={path === window.location.pathname ? 'active' : ''}>
        <a href={path}>{item.title}</a>
      </li>
    )
  }

  renderContent (menu) {
    const item = menu.items.find(
      item => join(this.props.basePath, item.path) === window.location.pathname
    )

    if (!item || !item.content) {
      return null
    }

    if (typeof item.content === 'function') {
      return item.content()
    }

    return item.content
  }
}
