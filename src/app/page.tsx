import Header from "@/components/Header";
import { Box, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Box bg={"blue"}>
        <Heading>titulo</Heading>
      </Box>
    </main>
  );
}
