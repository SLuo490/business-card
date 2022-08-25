import '../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Main() {
  return (
    <div className='main-container'>
      <h1>Laura Smith</h1>
      <h2>Frontend Developer</h2>
      <h3>laurasmith.website</h3>

      <a href='sluo5991@gmail.com'>
        <FontAwesomeIcon className='fa-icon' icon={faEnvelope} />
        Email
      </a>

      <div className='info'>
        <div className='about'>
          <h2>About</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            id possimus, harum eaque obcaecati voluptate ullam velit corporis!
            Blanditiis sit neque veritatis quaerat magni saepe qui! Incidunt
            assumenda animi omnis? Adipisci ipsa tempore animi unde nesciunt
            voluptates temporibus ad suscipit maxime exercitationem, voluptate
            laudantium neque explicabo facere fugiat a eaque est incidunt alias
            assumenda odit iste in vitae expedita. Consectetur!
          </p>
        </div>
        <div className='interests'>
          <h2>Interests</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            nobis ullam accusantium facilis sed eum adipisci explicabo
            cupiditate nemo alias, laboriosam quos, voluptates necessitatibus et
            est quibusdam delectus placeat saepe.
          </p>
        </div>
      </div>
    </div>
  );
}
