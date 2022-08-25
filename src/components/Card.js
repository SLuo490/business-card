import Image from './Image';
import Main from './Main';
import Footer from './Footer';
import '../style.css';

export function Card() {
  return (
    <div className='card-container'>
      <Image />
      <Main />
      <Footer />
    </div>
  );
}
