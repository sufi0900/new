/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Grid,
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

import Link from "next/link";
import { CalendarMonth, Email, Person } from "@mui/icons-material";

const Card2 = ({}) => {
  return (
    <div>
      <Breadcrumb
        pageName="Blog Grid"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <section className="container mx-auto px-4 py-2  ">
        <Card
          className="card bg-white text-black dark:bg-gray-800 dark:text-white" // Adjust background and text color based on theme
          sx={{
            marginTop: "5px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%", // Ensure fixed width for all cards
          }}
        >
          <Grid container className="flex">
            <Grid item xs={12} sm={12} lg={4} sx={{ alignItems: "stretch" }}>
              <div className="flex">
                <CardMedia
                  component="img"
                  src={
                    "https://thumbs.dreamstime.com/b/ai-artificial-intelligence-machine-learning-big-data-analysis-automation-technology-business-industrial-manufacturing-132528154.jpg"
                  }
                  alt="Blog thumbnail"
                  sx={{ width: "100%", height: "auto" }}
                />
              </div>
            </Grid>

            {/* Content Section */}
            <Grid
              item
              sm={12}
              xs={12}
              lg={8}
              sx={{ display: "flex", flexDirection: "column", padding: "10px" }} // Add padding for content section
            >
              {/* Person Avatar with Name and Date */}

              {/* Content */}
              <CardContent sx={{ flexGrow: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Avatar src="avatar img here" />{" "}
                  {/* Add avatar image source */}
                  <div style={{ marginLeft: "10px" }}>
                    <Typography variant="subtitle1">John Doe</Typography>{" "}
                    {/* Replace with author's name */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="bg-white text-black dark:bg-gray-800 dark:text-white"
                    >
                      March 19, 2024
                    </Typography>{" "}
                    {/* Replace with date */}
                  </div>
                </div>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className=" text-start"
                >
                  Devin AI shocks Upwork developers - X reacts
                </Typography>
                <Typography
                  variant="h7"
                  color="text.secondary"
                  className="text-start text-black dark:bg-gray-800 dark:text-white"
                >
                  Devin isn't a person, he's an AI software engineer from
                  Cognition Labs that has put human developers around the world
                  into existential crisis. Here's the funny reactions on
                  Twitter/X!
                </Typography>
                {/* Tags */}
              </CardContent>

              {/* Actions */}
              <CardActions
                sx={{
                  padding: "5px",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "auto",
                }}
              >
                <List className="mr-2">
                  <ListItem>
                    <div className="mb-4 flex gap-2">
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800 transition duration-300 hover:bg-blue-200 hover:text-blue-900 dark:bg-blue-200 dark:text-blue-900 dark:hover:bg-blue-300 dark:hover:text-blue-800">
                        New
                      </span>
                      <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800 transition duration-300 hover:bg-green-200 hover:text-green-900 dark:bg-green-200 dark:text-green-900 dark:hover:bg-green-300 dark:hover:text-green-800">
                        Featured
                      </span>
                      <span className="dark:bg-yellow-200 dark:text-yellow-900  hover:bg-yellow-200 hover:text-yellow-900 dark:hover:bg-yellow-300 dark:hover:text-yellow-800 rounded-full bg-slate-600 px-3  py-1 text-sm font-semibold text-yellow transition duration-300">
                        Popular
                      </span>
                    </div>
                  </ListItem>
                </List>
              </CardActions>
            </Grid>
          </Grid>
        </Card>
      </section>
    </div>
  );
};

export default Card2;
