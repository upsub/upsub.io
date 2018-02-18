import './Button.css'

const btnClasses = ({ color, borderless, transparent, large, small }) => {
  const classes = [
    'btn',
    color,
    borderless && 'borderless',
    transparent && 'transparent',
    large && 'large',
    small && 'small'
  ]

  return classes.join(' ')
}

const button = props => (
  <button class={btnClasses(props)} disabled={props.disabled}>
    {props.text}
  </button>
)

const link = (button, props) => (
  <a href={props.href}>{button}</a>
)

export default props => {
  if (props.href) {
    return link(button(props), props)
  }


  return button(props)
}
