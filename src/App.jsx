import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import SearchResult from './pages/SearchResult'

function App() {
  const [page, setPage] = useState("search");  // home | search
  let pageView;

  switch(page) {
    case "home":
      pageView = <Content />;
      break;
    case "search":
      pageView = <SearchResult keyword="Some Keyword" />;
      break;
  }
  return (
    <>
      <div className='container pt-3'>
        <Header />
        {pageView}
      </div>
    </>
  )
}

export default App
