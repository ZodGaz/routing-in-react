// import React, {useContext} from 'react';
import './App.css';
import { Route , Switch, Redirect} from 'react-router-dom';

//AuthContext
// import AuthContext from './context/auth-context';

//Components
// import Login from './components/Login/Login';
// import Home from './components/Home/Home';


//ROUTING COMPONENTS
import Welcome from './pages/Welcome';
import Product from './pages/Product';
import ProductDetails from './pages/ProductDetails';



import MainHeader from './otherComponents/MainHeader';



function App() {
  // const { isLoggedIn} = useContext(AuthContext);
  return (
     <div>
       <MainHeader />
       <main>
       <Switch>
       <Route path="/" exact>
          <Redirect to="/welcome/"/>
       </Route>

       <Route path="/welcome/">
            <Welcome />
        </Route>

        <Route path="/products" exact>
          <Product />
        </Route>
        
        <Route path="/products/:productId">
          <ProductDetails />
        </Route>

       
       </Switch>
       </main>
        
     </div>
  );
}

export default App;



// our-damain.com/welcome ==> Welcome Component
// our-domain.com/products  ==> Product Component
// our-domani.com/product-details/0.343434
