import { Route, Switch } from 'react-router-dom';
import { Home } from '../components/User/Home';
import { About } from '../components/User/About';
import { Contact } from '../components/User/Contact';
import { NotFound } from '../components/User/NotFound';


export function Router() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </div>
  );
};