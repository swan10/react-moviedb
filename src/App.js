import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./components/Pages/Movies/Movies";
import Series from "./components/Pages/Series/Series";
import Trending from "./components/Pages/Trending/Trending";
import Favourite from "./components/Pages/Favourite/Favourite";
import Search from "./components/Pages/Search/Search";
import { Container } from "@material-ui/core";
function App() {
  return (  
    <BrowserRouter>  
  <div className="App">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
            <Route path="/favourite" component={Favourite} />
          </Switch>
        </Container>
  </div> 
      <SimpleBottomNavigation />
  </BrowserRouter>
  );
}

export default App;
