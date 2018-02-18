import { Component } from 'preact'
import Logo from 'components/Logo'
import Button from 'components/Button'
import './Introdoction.css'

const random = (min, max) => Math.floor(Math.random() * max) + min

export default class Introduction extends Component {

  planes = 20
  colors = ['primary', 'primary-light', 'info', 'info-light', 'danger', 'danger-light', 'dark-light', 'grey', 'grey-light']

  render ({ children }) {
    return (
      <div class='intro'>
        <div class='planes'>
          {this.renderPlanes(1)}
          {this.renderPlanes(2)}
          {this.renderPlanes(3)}
          {this.renderPlanes(4)}
        </div>
        <div class='content'>
          <div class='wrapper'>
            {children}
          </div>
        </div>
      </div>
    )
  }

  renderPlane(color, x, y, heading, animation) {
    const style = {
      transform: `translate(${x}px, ${y}px) rotate(${heading}deg)`,
    }

    animation = `trail animation-${animation}`

    return (
      <div class={animation} style={style}>
        <Logo color={color} />
      </div>
    )
  }

  renderPlanes(animation) {
    const planes = []

    for (let i = 0; i < (this.planes / 4) + 1; i++) {
      planes.push(this.renderPlane(
        this.colors[random(0, this.colors.length - 1)],
        random(0, window.innerWidth),
        random(-window.innerHeight * 1.5, window.innerHeight * 1.5),
        random(0, 359),
        animation
      ))
    }

    return planes
  }

}
