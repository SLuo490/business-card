import '../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className='footer-container'>
      <ul>
        <li>
          <a href='https://twitter.com/'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href='https://fb.com/'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href='https://instagram.com/'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a href='https://linkedin.com/'>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a href='https://github.com/'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </div>
  );
}
