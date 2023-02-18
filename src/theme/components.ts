import { Components, Theme } from "@mui/material";

const components: Components<Omit<Theme, "components">> = {
  MuiButton: {
    styleOverrides: {
      root: {
        padding: "0.375rem 20px",
        minWidth: "72px",
      },
    },

    defaultProps: { disableElevation: true },
  },
};

export default components;
