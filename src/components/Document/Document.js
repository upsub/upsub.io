import { Component } from 'preact'
import Markdown from 'components/Markdown'


export default class Document extends Component {
  state = {
    text: ''
  }

  componentDidMount () {
    this.fetchDocument()
  }

  componentWillReceiveProps (nextProps) {
    this.props = nextProps
    this.fetchDocument()
  }

  fetchDocument () {
    fetch(`/api/docs/${this.props.path.toLowerCase()}.md`)
      .then(res => res.text())
      .then(text => this.setState({ text }))
  }

  render ({ path }, { text }) {
    return <Markdown text={text} />
  }
}
