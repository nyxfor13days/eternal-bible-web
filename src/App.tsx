import { Button, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography variant="h1">Eternal Bible Web App</Typography>
      <Button variant="contained">Hello</Button>
      <Button variant="outlined">World</Button>
    </ThemeProvider>
  );
};

export default App;
