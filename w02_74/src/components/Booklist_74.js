import {useState} from 'react';
import {books_data} from './books_data';
import Book_74 from './Book_74';
const Booklist_74 = () => {
  console.log('books_data', books_data);
  const [books, setBooks] = useState(books_data);
  return (
    <section className='booklist'>
        {books.map((book)=>{
         const {id, img, title, author} = book;
         return <Book_74 key={id}
            img={img}
            title={title}
            author={author}
          />
        
            })}
         </section> 
  );
}; 

export default Booklist_74;
