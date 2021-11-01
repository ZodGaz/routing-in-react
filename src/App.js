import { Route, Switch, Redirect } from 'react-router-dom';

//PAGES
import Quotes from './pages/Quotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
//LAYOUT
import Layout from './components/layout/Layout';
function App() {
  return (
    <Layout>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to="/quotes/" />
          </Route>
          <Route path="/quotes/" exact>
            <Quotes />
          </Route>
          <Route path="/quotes/:quoteId/">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote/">
            <NewQuote />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </main>
    </Layout>
  );
}

export default App;
