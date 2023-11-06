import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loading = ({ my, size, color, height }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: my ? my : 8,
        height: height && height,
      }}
    >
      <CircularProgress
        size={size && size}
        sx={{ color: color ? color : "#EC9C31" }}
      />
    </Box>
  );
};

export default Loading;
