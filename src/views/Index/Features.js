import Section from 'components/Section'

export default () => (
  <Section center>
    <h2>Features</h2>
    <div class='index grid'>
      <div class='item'>
        <h4 class='authentication'>Authentication</h4>
        <p>Secure your message stream on a per app basis and ensure nobody catches your messages. Available through the authentication configuration.</p>
      </div>
      <div class='item'>
        <h4 class='integration'>Integration</h4>
        <p>Easy to integrate into existing development and production environments. UpSub has webhooks and a simple API for sending and receiving messages.</p>
      </div>
      <div class='item'>
        <h4 class='presence'>Presence</h4>
        <p>Get real-time feadback about client connection states, useful for monitoring when clients connects or disconnects from the server. </p>
      </div>
      <div class='item'>
        <h4 class='wildcard'>Wildcard subscription</h4>
        <p>Query messages flowing through the stream, with channel wildcards. Enables the developer to have flexible channel listeners.</p>
      </div>
    </div>
  </Section>
)
