import { Suspense } from 'react';
import { HashRouter as Router, useRoutes } from 'react-router-dom';
import Loading from 'components/Loading';
import routes from './routes';

const AllRouter = () => {
  let isLoggedIn = false;
  if (localStorage.token) {
    isLoggedIn = true;
  } else {
    isLoggedIn = false;
  }
  const Routes = () => useRoutes(routes(isLoggedIn));
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes />
      </Suspense>
    </Router>
  );
};

export default AllRouter;
