import './style.css';
import Header from './Header.js';
import Background from './grayBackground.jpg';

function App() {
  return (
    <div>
      <Header></Header>

      <section className='subHeader rounded'>
        <img className='h-20 w-full bg-cover 'src={Background} alt=''></img>
      </section>

    </div>
  );
}

export default App;
