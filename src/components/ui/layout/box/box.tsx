import { Box as MuiBox, type BoxProps } from "@mui/material";

const Box = ({ children, ...rest }: BoxProps) => {
  return <MuiBox {...rest}>{children}</MuiBox>;
};

export { Box };
