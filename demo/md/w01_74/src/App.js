import './App.css';

import Book_74 from './components/Book_74'


const App = () => {
  return (
    <section className='booklist'>
        <Book_74
           img='https://m.media-amazon.com/images/I/81st0M5XcsL._SL1500_.jpg'
           title='哈利·波特与魔法石'
           author='J.K Rowling'
        />
        
        <Book_74
           img='https://m.media-amazon.com/images/S/aplus-media-library-service-media/7a5f87cf-1a24-4fb9-b2e4-d041562e6d20.__CR0,0,300,300_PT0_SX300_V1___.jpg'
           title='Guweiz: The Art of Gu Zheng Wei'
           author='Gu Zheng Wei'
        />
        <Book_74 
            img='https://m.media-amazon.com/images/I/81zsHFC+BML._SL1500_.jpg'
            title='Leonardo da Vinci： The Graphic Work'
            author=' Frank Zöllner'
        />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <img src="https://m.media-amazon.com/images/I/81st0M5XcsL._SL1500_.jpg"></img>
      <h1>哈利·波特与魔法石 </h1>
      <h4>J.K Rowling</h4>
    </article>
  )
}

export default App;
