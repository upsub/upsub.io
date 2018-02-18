import './Section.css'

const wrapperClasses = ({ center, full }) => {
  const classes = [
    'wrapper',
    center && 'center',
    full && 'full'
  ]

  return classes.join(' ')
}

const sectionClasses = ({ color, vfull }) => {
  const classes = [
    color,
    vfull && 'vfull'
  ]

  return classes.join(' ')
}

export default props => (
  <section style={props.style} height={props.height} class={sectionClasses(props)}>
    <div class={wrapperClasses(props)}>
      {props.children}
    </div>
  </section>
)
