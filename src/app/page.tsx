import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Box bg={"blue"}>
        <Heading>titulo</Heading>
      </Box>
    </main>
  );
}
