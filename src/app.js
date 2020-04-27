import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ReactQueryConfigProvider } from "react-query";
import routes from "./config/routes";
import PageWrapper from "./pages";
import GlobalStyles from "./styles";

const queryConfig = {
    suspense: true
};

const App = () => (
    <Router>
        <ReactQueryConfigProvider config={queryConfig}>
            <div>
                {routes.map((route, index) => {
                    const { path, ...restRouteProps } = route;
                    const key = `routes-${index}`;

                    return (
                        <Route path={path} key={key} exact={!!route.exact}>
                            <PageWrapper route={{ ...restRouteProps }} />
                        </Route>
                    );
                })}
            </div>
        </ReactQueryConfigProvider>
        <GlobalStyles />
    </Router>
);

export default hot(App);
