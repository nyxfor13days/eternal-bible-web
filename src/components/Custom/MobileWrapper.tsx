import { Box, styled } from "@mui/material";

const MobileWrapper = styled(Box)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.sm,
  margin: "0 auto",
  padding: theme.spacing(0, 2),
}));

export default MobileWrapper;
