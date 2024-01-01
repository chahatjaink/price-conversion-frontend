import { ConversionForm } from "@/components/ConversionForm";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack
      sx={{
        // backgroundImage: `url("/background.jpg")`,
        width: "100vw",
        height: "100vh",
        margin: "auto",
      }}
    >
      <ConversionForm />
    </Stack>
  );
}
