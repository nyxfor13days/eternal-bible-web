import { Button, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";
import RootRouter from "./routes";
import { Suspense } from "react";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <RootRouter />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
