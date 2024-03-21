/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Typography,
  Button,
  IconButton,
  CardMedia,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import Avatar from "@mui/material/Avatar"; // Add this import statement
import Breadcrumb from "@/components/Common/Breadcrumb";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import { CalendarMonth, Email, Person } from "@mui/icons-material";

const News = () => {
  const newsData = [
    {
      imageUrl: "image_url_1.jpg",
      heading: "News Heading 1",
      subHeading: "News Subheading 1",
    },
    {
      imageUrl: "image_url_2.jpg",
      heading: "News Heading 2",
      subHeading: "News Subheading 2",
    },
    {
      imageUrl: "image_url_3.jpg",
      heading: "News Heading 3",
      subHeading: "News Subheading 3",
    },
    // Add more news items as needed
  ];

  return (
    <div>
      <Breadcrumb
        pageName="Blog Grid"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {/* Big Trending News Card */}
          <Grid item xs={12} md={8}>
            <Card
              className="card bg-white text-black dark:bg-gray-800 dark:text-white" // Adjust background and text color based on theme
              sx={{
                marginTop: "5px",
                display: "flex",
                flexDirection: "column",
                height: "100%", // Set fixed height for responsiveness
                width: "100%", // Ensure fixed width for all cards
                overflow: "hidden", // Hide overflow to prevent scroll bars
              }}
            >
              <CardContent>
                <img
                  src="https://wallpapers.com/images/hd/ai-pictures-1920-x-908-k5rvzhmbo26lcyvj.jpg"
                  alt="Trending News"
                  style={{ width: "100%", height: "auto" }}
                />
                <Typography variant="h6" gutterBottom>
                  Trending News Heading
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Trending News Subtitle Trending News Subtitle Trending News
                  Subtitle Trending News Subtitle
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Related News Card */}
          <Grid item xs={12} md={4}>
            <Grid
              className=" bg-white text-black dark:bg-gray-800 dark:text-white" // Adjust background and text color based on theme
              sx={{
                marginTop: "5px",
                display: "flex",
                flexDirection: "column",
                maxHeight: "calc(500px + 64px)", // Adjust this value based on your needs
                overflowY: "auto", // Enable vertical scrolling
                width: "100%", // Ensure fixed width for all cards
              }}
            >
              <Typography className="p-4" variant="h5" gutterBottom>
                Trending News Heading
              </Typography>
              <CardContent
                sx={{
                  marginBottom: "5px",
                  display: "flex",

                  alignItems: "center",
                }}
                className="card"
              >
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    Related News Heading
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Related News Subtitle
                  </Typography>
                </Box>

                <Box
                  component="img"
                  src="https://w0.peakpx.com/wallpaper/301/160/HD-wallpaper-working-robot-future-2023-ai-art.jpg"
                  alt="Related News"
                  sx={{
                    width: "150px",
                    height: "100px",
                    marginRight: "16px",
                  }}
                />
              </CardContent>
              <CardContent
                sx={{
                  marginBottom: "5px",
                  display: "flex",

                  alignItems: "center",
                }}
                className="card"
              >
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    Related News Heading
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Related News Subtitle
                  </Typography>
                </Box>

                <Box
                  component="img"
                  src="https://w0.peakpx.com/wallpaper/301/160/HD-wallpaper-working-robot-future-2023-ai-art.jpg"
                  alt="Related News"
                  sx={{
                    width: "150px",
                    height: "100px",
                    marginRight: "16px",
                  }}
                />
              </CardContent>
              <CardContent
                sx={{
                  marginBottom: "5px",
                  display: "flex",

                  alignItems: "center",
                }}
                className="card"
              >
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    Related News Heading
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Related News Subtitle
                  </Typography>
                </Box>

                <Box
                  component="img"
                  src="https://w0.peakpx.com/wallpaper/301/160/HD-wallpaper-working-robot-future-2023-ai-art.jpg"
                  alt="Related News"
                  sx={{
                    width: "150px",
                    height: "100px",
                    marginRight: "16px",
                  }}
                />
              </CardContent>
              <CardContent
                sx={{
                  marginBottom: "5px",
                  display: "flex",

                  alignItems: "center",
                }}
                className="card"
              >
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    Related News Heading
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Related News Subtitle
                  </Typography>
                </Box>

                <Box
                  component="img"
                  src="https://w0.peakpx.com/wallpaper/301/160/HD-wallpaper-working-robot-future-2023-ai-art.jpg"
                  alt="Related News"
                  sx={{
                    width: "150px",
                    height: "100px",
                    marginRight: "16px",
                  }}
                />
              </CardContent>
              <CardContent
                sx={{
                  marginBottom: "5px",
                  display: "flex",

                  alignItems: "center",
                }}
                className="card"
              >
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    Related News Heading
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Related News Subtitle
                  </Typography>
                </Box>

                <Box
                  component="img"
                  src="https://w0.peakpx.com/wallpaper/301/160/HD-wallpaper-working-robot-future-2023-ai-art.jpg"
                  alt="Related News"
                  sx={{
                    width: "150px",
                    height: "100px",
                    marginRight: "16px",
                  }}
                />
              </CardContent>
            </Grid>
          </Grid>
        </Grid>

        <br />

        <hr class="   border-gray-400 dark:border-gray-700" />

        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card
              className="card bg-white text-black dark:bg-gray-800 dark:text-white" // Adjust background and text color based on theme
              sx={{
                marginTop: "5px",
                display: "flex",
                flexDirection: "column",
                height: "100%", // Set fixed height for responsiveness
                width: "100%", // Ensure fixed width for all cards
                overflow: "hidden", // Hide overflow to prevent scroll bars
              }}
            >
              <CardContent>
                <img
                  src="https://wallpapers.com/images/hd/ai-pictures-1920-x-908-k5rvzhmbo26lcyvj.jpg"
                  alt="Trending News"
                  style={{ width: "100%", height: "auto" }}
                />
                <Typography variant="h6" gutterBottom>
                  Trending News Heading
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Trending News Subtitle Trending News Subtitle Trending News
                  Subtitle Trending News Subtitle
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              className="card bg-white text-black dark:bg-gray-800 dark:text-white" // Adjust background and text color based on theme
              sx={{
                marginTop: "5px",
                display: "flex",
                flexDirection: "column",
                height: "100%", // Set fixed height for responsiveness
                width: "100%", // Ensure fixed width for all cards
                overflow: "hidden", // Hide overflow to prevent scroll bars
              }}
            >
              <CardContent>
                <img
                  src="https://wallpapers.com/images/hd/ai-pictures-1920-x-908-k5rvzhmbo26lcyvj.jpg"
                  alt="Trending News"
                  style={{ width: "100%", height: "auto" }}
                />
                <Typography variant="h6" gutterBottom>
                  Trending News Heading
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Trending News Subtitle Trending News Subtitle Trending News
                  Subtitle Trending News Subtitle
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <br />
        <hr class="   border-gray-400 dark:border-gray-700" />
        <br />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {/* Trending and related news sections (similar to your previous layout) */}

            {/* All News Cards Section */}
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <Card
                    className="card bg-white text-black dark:bg-gray-800 dark:text-white"
                    sx={{
                      marginTop: "5px",
                      marginBottom: "5px",
                      display: "flex",
                      flexDirection: "column",
                      width: "100%", // Ensure fixed width for all cards
                    }}
                  >
                    <img
                      src="https://w.forfun.com/fetch/07/07ac8d4a4dde1d894295ef7a928a4025.jpeg?download=3d-brizgi-litso-voda-art-devushka-86979.jpeg"
                      alt="News Image"
                      style={{ width: "100%", height: "auto" }}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        heading
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        subHeading
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Card
                    className="card bg-white text-black dark:bg-gray-800 dark:text-white"
                    sx={{
                      marginTop: "5px",
                      marginBottom: "5px",
                      display: "flex",
                      flexDirection: "column",
                      width: "100%", // Ensure fixed width for all cards
                    }}
                  >
                    <img
                      src="https://w.forfun.com/fetch/07/07ac8d4a4dde1d894295ef7a928a4025.jpeg?download=3d-brizgi-litso-voda-art-devushka-86979.jpeg"
                      alt="News Image"
                      style={{ width: "100%", height: "auto" }}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        heading
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        subHeading
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Card
                    className="card bg-white text-black dark:bg-gray-800 dark:text-white"
                    sx={{
                      marginTop: "5px",
                      marginBottom: "5px",
                      display: "flex",
                      flexDirection: "column",
                      width: "100%", // Ensure fixed width for all cards
                    }}
                  >
                    <img
                      src="https://w.forfun.com/fetch/07/07ac8d4a4dde1d894295ef7a928a4025.jpeg?download=3d-brizgi-litso-voda-art-devushka-86979.jpeg"
                      alt="News Image"
                      style={{ width: "100%", height: "auto" }}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        heading
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        subHeading
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Card
                    className="card bg-white text-black dark:bg-gray-800 dark:text-white"
                    sx={{
                      marginTop: "5px",
                      marginBottom: "5px",
                      display: "flex",
                      flexDirection: "column",
                      width: "100%", // Ensure fixed width for all cards
                    }}
                  >
                    <img
                      src="https://w.forfun.com/fetch/07/07ac8d4a4dde1d894295ef7a928a4025.jpeg?download=3d-brizgi-litso-voda-art-devushka-86979.jpeg"
                      alt="News Image"
                      style={{ width: "100%", height: "auto" }}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        heading
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        subHeading
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default News;
