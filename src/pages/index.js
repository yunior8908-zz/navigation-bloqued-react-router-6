import { Box, Button } from "@mui/material";
import { useState } from "react";
import ServiceBloquedPage from "../components/service-bloqued-page";

const Index = () => {
  const [blockTransition, setBlockTransition] = useState(false);

  return (
    <>
      <div>index</div>
      <Button
        variant="contained"
        color="error"
        onClick={() => setBlockTransition((prev) => !prev)}
      >
        {blockTransition ? "navigation disabled" : "disable navigation"}
      </Button>
      <ServiceBloquedPage disabledNavigation={blockTransition} currentPath="/">
        {({ onCancel, onOk }) => (
          <dialog
            open={blockTransition}
            style={{
              width: 500,
              border: "solid 1px #ddd",
            }}
          >
            <Box display="flex" width="100%" justifyContent="space-around">
              <Box
                component={Button}
                width={104}
                variant="outlined"
                color="primary"
                onClick={onCancel}
              >
                cancel
              </Box>
              <Box
                component={Button}
                width={104}
                variant="contained"
                color="secondary"
                onClick={onOk}
              >
                Ok
              </Box>
            </Box>
          </dialog>
        )}
      </ServiceBloquedPage>
    </>
  );
};
export default Index;
