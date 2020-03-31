import React from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import routes from './routes/routes';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {
    return (
        <ErrorBoundary>
            {routes().map(
                ({ path, exact, component: C, ...rest }) => (
                    <Route
                        key={path}
                        path={path}
                        exact={exact}
                        render={props => (
                            <C {...props} />
                        )}
                    />
                )
            )}
        </ErrorBoundary>
    );
}

export default withRouter(App);
