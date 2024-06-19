import './App.css';
import NavBar from './components/NavBar/NavBar';
import SearcherContainer from './components/ProductSearcher/SearcherContainer';


function App() {
  return (
    <div className="App">
      <h1>RCS - React Clothing Store</h1>

      <NavBar/>

      <header id="home-header">HEADER</header>

      <SearcherContainer id={"searcher"} />

      <section id="about">ABOUT</section>

      <footer>
        FOOTER
      </footer>


    </div>
  );
}

export default App;
