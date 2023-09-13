import logo from './logo.svg';
import './App.css';


const App = () => {
  return (
    <section className="booklist">
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
    </article>
  )
}

export default App;
