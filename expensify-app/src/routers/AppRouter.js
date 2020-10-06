import React from 'react';
import { BrowserRouter, Route, Switch, NavLink, Link } from 'react-router-dom';

const ExpenseDashboardPage = () => (
  <div>
    This is from my <code>ExpenseDashboardPage</code> component
  </div>
);

const AddExpensePage = () => (
  <div>
    This is from my <code>AddExpensePage</code> component
  </div>
);

const EditExpensePage = () => (
  <div>
    This is from my <code>EditExpensePage</code> component
  </div>
);

const HelpPage = () => (
  <div>
    This is from my <code>HelpPage</code> component
  </div>
);

const NotFoundPage = () => (
  <div>
    404! - <Link to="/">← Back to Home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <nav>
      <NavLink exact to="/" activeClassName="is-active">Dashboard</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
      <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </nav>
  </header>
);

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
