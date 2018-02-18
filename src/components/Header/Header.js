import Logo from 'components/Logo'
import Icons from 'components/Icons'
import './Header.css'

const renderMenuItem = (path, name, blank) => {
  return (
    <li class={window.location.pathname.includes(path) ? 'active' : ''}>
      <a target={blank ? '_blank' : undefined} href={path}>{name}</a>
    </li>
  )
}

export default () => (
  <header class='nav'>
    <div class='wrapper'>
      <a href='/'><Logo height='30' text /></a>
      <ul>
        {renderMenuItem('/getting-started', 'Getting Started')}
        {renderMenuItem('/docs', 'Documentation')}
        {/* {renderMenuItem('/community', 'Community')} */}
        {renderMenuItem('https://github.com/upsub', <Icons.Github width='28' />, true)}
      </ul>
    </div>
  </header>
)
