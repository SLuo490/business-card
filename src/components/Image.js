import portfolio from '../assets/images/1.jpg';
import '../style.css';

export default function Image() {
  return (
    <div>
      <img src={portfolio} alt='portfolio' />
    </div>
  );
}
