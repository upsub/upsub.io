import { Component } from 'preact'
import Document from 'components/Document'
import TabBar, { TabItem } from 'components/TabBar'

export default class Clients extends Component {

  languages = [
    ['JavaScript', false],
    ['php', false],
    ['Go', true],
    ['Java', true],
    ['Python', true],
    ['Swift', true],
    ['C#', true],
  ]

  state = {
    currentLang: null,
  }

  render ({}, { currentLang }) {
    return (
      <div>
        <h1>Clients</h1>
        <p>
          UpSub actively maintains client libraries for the languages below, if
          your language are missing a client, send us a suggestion on GitHub.
          Your are also welcome to make your own client implementation.
        </p>
        <h3>Select a language:</h3>
        <TabBar>
          {this.languages.map(([lang, disabled]) => this.renderTabItem(lang, disabled))}
        </TabBar>

        {currentLang && (
          <Document path={`getting-started/clients/${currentLang.toLowerCase()}`} />
        )}

        <p>
          <a href='/getting-started/channels'>>> Continue with Channels</a>
        </p>
      </div>
    )
  }

  renderTabItem (title, disabled = false) {
    return (
      <TabItem
        active={this.state.currentLang === title}
        disabled={disabled}
        onClick={() => this.setState({ currentLang: title })}
      >
        {title}
      </TabItem>
    )
  }

}
