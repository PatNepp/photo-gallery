
import './App.css'


const App = () => {
  return (
    <div className="App">
      <div className="banner">
        <div className="banner-content">
          <h1 className="banner-header">PNPhotography</h1>
          <p className="banner-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum perspiciatis, illo nulla placeat nesciunt sed distinctio sint qui, quas dolorum quae consequatur asperiores commodi vel odit soluta cumque omnis aut!</p>
          <ul className="banner-actions">
            <li><a href="#"></a>.banner-action</li>
          </ul>
        </div>
        <div className="banner-img">
          <img src={require("./images/banner-img.jpg")} alt="person kayaking" />
        </div>
      </div>
    </div>
  );
}

export default App;
