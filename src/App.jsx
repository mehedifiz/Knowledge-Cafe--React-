
import { useState } from 'react';
import './App.css'
import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Header from './Components/Header/Header';

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleMarkAsRead = (time , id) => {

    setReadingTime(readingTime + time);
    
    //remove the read blog from bookmark

    // console.log("remove id " ,id)

    const remaingBooks = bookmarks.filter(bookmark => bookmark.id !== id);

    setBookmarks(remaingBooks)


  }

  const handleBoomaek = blog => {
    
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);


  } 

  return (
    <>
      <Header></Header>

      <div className="md:flex max-w-7xl  ml-32">
        <Blogs
          handleMarkAsRead={handleMarkAsRead}
          handleBoomaek={handleBoomaek}
        ></Blogs>

        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App
