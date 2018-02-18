const classes = props => {
  const classes = [
    'tab-item',
    props.disabled ? 'disabled' : '',
    props.active ? 'active' : ''
  ]

  return classes.join(' ')
}

const onClick = (props, event) => {
  if (props.disabled) {
    return
  }

  props.onClick(event)
}

export default props => (
  <div class={classes(props)} onClick={event => onClick(props, event)}>
    {props.children}
  </div>
)
