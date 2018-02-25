import Section from 'components/Section'

export default () => (
  <Section center>
    <h2>Use Cases</h2>
    <div class='index grid'>
      <div class='item'>
        <h4 class='communication'>Communication</h4>
        <p>Establish real-time event based communication between services or applications with ease. It could be a chat or an embedded IoT system, doesn't matter UpSub got you covered.</p>
      </div>
      <div class='item'>
        <h4 class='collaboration'>Collaboration</h4>
        <p>Create real-time collaboration software like a live text editing tool, where multiple people can contribute at the same time and see each others contributions be syncronized in real-time.</p>
      </div>
      <div class='item'>
        <h4 class='notifications'>Notifications</h4>
        <p>Notify a service or send notifications to users when interesting things happens. This is a great way to keep your users engaged with your application.</p>
      </div>
      <div class='item'>
        <h4 class='location'>Location</h4>
        <p>Keep track of device locations in real-time, it could be a fleet of cars, your friends geolocation or notify a service when you reached a specific destination.</p>
      </div>
    </div>
  </Section>
)
