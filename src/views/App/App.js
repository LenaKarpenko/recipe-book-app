import './App.css';
import {ThemeProvider} from "@material-ui/core";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import theme from "../../shared/theme";
import {routes} from '../../shared/routes'

export const RouteWithSubRoutes = route => {
  return <Route path={route.path} render={(props ) => (
    <route.component {...props} routes={route.routes}/>
  )}/>
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          {routes.map(route => (
            <RouteWithSubRoutes key={route.path} {...route}/>
          ))}
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
