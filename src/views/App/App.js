import {useReducer} from "react";
import {ThemeProvider} from "@material-ui/core";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import theme from "../../shared/theme";
import {routes} from '../../shared/routes'
import {AppContext, reducer, initialState} from "../../shared/reducer";
import {log} from "../../shared/utils/logger";

export const RouteWithSubRoutes = route => {
  return <Route path={route.path} render={(props ) => (
    <route.component {...props} routes={route.routes}/>
  )}/>
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  log(state);

  return (
    <AppContext.Provider value={{ reducer: { state, dispatch }}}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Switch>
            {routes.map(route => (
              <RouteWithSubRoutes key={route.path} {...route}/>
            ))}
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
