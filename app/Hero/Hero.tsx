"use client";
import { Box, Button, Card } from "@mui/material";
import Link from "next/link";

interface IHeroProps {
  heading: string;
  description: string;
  imageUrl: string;
  btnLabel: string;
  btnLink: string;
}

export const Hero = ({
  heading,
  description,
  imageUrl,
  btnLabel,
  btnLink,
}: IHeroProps) => {
  return (
    <Card>
      <Box mx="2rem" w={{ base: "100%", md: "50%" }}>
        <h1>{heading}</h1>
        <p py="1rem">{description}</p>

        <Link href={btnLink}>
          <Button>{btnLabel}</Button>
        </Link>
      </Box>
      <Box mx="2rem" w={{ base: "100%", md: "50%" }} mt="1rem">
        <img src={imageUrl} alt={heading} />
      </Box>
    </Card>
  );
};
