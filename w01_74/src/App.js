import logo from './logo.svg';
import './App.css';


const App = () => {
  return (
    <section className="booklist">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
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
