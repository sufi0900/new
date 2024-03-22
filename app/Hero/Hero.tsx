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
      <Box>
        <h1>{heading}</h1>
        <p>{description}</p>

        <Link href={btnLink}>
          <Button>{btnLabel}</Button>
        </Link>
      </Box>
      <Box>
        <img src={imageUrl} alt={heading} />
      </Box>
    </Card>
  );
};
