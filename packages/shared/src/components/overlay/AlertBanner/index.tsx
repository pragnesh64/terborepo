import { Button, IconButton, Box, Typography } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

interface Props {
  onClose: () => void;
}

const AlertBanner = ({ onClose }: Props) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "48px", // 12 * 4px = 48px (same height as in the original)
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 2, // padding-left and padding-right
        backgroundColor: "var(--bg-alert)", // Apply background color from CSS variable
      }}
    >
      <Box />
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography variant="body2" sx={{ color: "white", fontWeight: 500 }}>
          14 days left in your plan
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "white",
            color: "purple",
            boxShadow: 1,
            borderRadius: "4px",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
            height: "32px", // Same height as in the original
            padding: "0 16px",
          }}
        >
          Upgrade your plan
        </Button>
      </Box>
      <IconButton
        onClick={onClose}
        sx={{
          color: "white",
          "&:hover": {
            color: "rgba(255, 255, 255, 0.7)", // Slightly lighter on hover
          },
        }}
        aria-label="Close"
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );
};

export default AlertBanner;
