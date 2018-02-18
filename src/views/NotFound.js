import Layout from 'components/Layout'
import Introduction from 'components/Introduction'
import Section from 'components/Section'
import Button from 'components/Button'

export default () => (
  <Layout class='layout'>
    <Introduction>
      <h1>404, Whoops...</h1>
      <h2>
        Looks like the page you are looking for doesn't exists.
      </h2>
      {/* <Button href='/getting-started' color='primary' large text='Get Started' />
      <Button href='/docs' color='white' borderless transparent large text='Documentation' /> */}
    </Introduction>
  </Layout>
)
