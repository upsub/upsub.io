import Section from 'components/Section'
import Button from 'components/Button'

const code = `client.on('event', msg => {
  console.log(msg)
})

client.send('event', 'Hello world!')`

export default () => (
  <Section center color='grey-transparent'>
    <h2>Built with <i class='fa fa-heart text-danger' /> by developers for developers</h2>
  </Section>
)
