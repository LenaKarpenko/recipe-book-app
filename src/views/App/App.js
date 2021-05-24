import './App.css';
import Login from "../Login";
import {ThemeProvider} from "@material-ui/core";
import theme from "../../shared/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login/>
    </ThemeProvider>
  );
}

export default App;
