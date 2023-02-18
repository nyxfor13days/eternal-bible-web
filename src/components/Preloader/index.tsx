import { CircularProgress, Stack, styled } from "@mui/material";

const Preloader = () => {
  return (
    <Wrapper>
      <CircularProgress />
    </Wrapper>
  );
};

export default Preloader;

const Wrapper = styled(Stack)({
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
});
