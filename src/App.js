import "antd/dist/antd.css"
import {BrowserRouter as Router, Switch, Routr, Route} from "react-router-dom"

import HomePage from "./components/Contents/Homepage"
import NewsFeed from "./components/Contents/NewsFeed";
import NavBar from "./components/Contents/NAvBar";
import StartFundraiser from "./components/Contents/PostScreens/StartFundraiser";
import PostDetail from "./components/Contents/PostScreens/PostDetail";
import Profile from "./components/Contents/PostScreens/Profile";
import PrivateRoute from "./components/Contents/Register/PrivateRoute";
import Register from "./components/Contents/Register/Register";
import { AuthProvider } from "./components/Redux/reducers/AuthState";
import Footer from "./components/Contents/Footer"

function App() {
  return (
    <div>
      <AuthProvider>
     <Router>
       <NavBar/>
       <Switch>
         <Route exact path="/" component={HomePage}/>
         <Route exact path="/newsfeed" component={NewsFeed} />
         <PrivateRoute exact path="/startfundraiser" component={StartFundraiser} />
         <Route exact path="/register" component={Register} />
         <Route exact path="/profile" component={Profile} />
         Profile         
         <Route exact path="/post/:id" component={PostDetail} />
       </Switch>
       <Footer/>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
