import './App.css';

import Book_74 from './components/Book_74'


const App = () => {
  return (
    <section className="booklist">
        <Book_74
           key='1'
           img="https://m.media-amazon.com/images/I/81st0M5XcsL._SL1500_.jpg"
           title="哈利·波特与魔法石"
           author="J.K Rowling"
        />
        
        <Book
          key='2'
          img="https://m.media-amazon.com/images/I/81st0M5XcsL._SL1500_.jpg"
           title="哈利·波特与魔法石"
           author="J.K Rowling"
        />
        <Book 
           key='3'
           img="https://m.media-amazon.com/images/I/81st0M5XcsL._SL1500_.jpg"
            title="哈利·波特与魔法石"
            author="J.K Rowling"
        />
    </section>
  );
}

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
