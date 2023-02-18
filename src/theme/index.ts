import { createTheme } from "@mui/material";
import palette from "./palette";
import typography from "./typography";
import components from "./components";

const theme = createTheme({
  palette: palette,
  typography: typography,
  components: components,
});

export default theme;
