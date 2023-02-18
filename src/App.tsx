import { CssBaseline, ThemeProvider, useTheme } from "@mui/material";

const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>App</div>
    </ThemeProvider>
  );
};

export default App;
