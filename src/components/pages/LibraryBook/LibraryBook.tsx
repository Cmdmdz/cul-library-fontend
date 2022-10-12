import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { RootReducers } from "../../../reducers";
import { useDispatch, useSelector } from "react-redux";
import * as bookAction from "../../../actions/book.action";
import { useNavigate } from "react-router-dom";

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

const theme = createTheme();

export default function LibraryBook() {
  const bookReducer = useSelector((state: RootReducers) => state.bookReducer);
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  
  React.useEffect(() => {
    dispatch(bookAction.loadListBook());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <main>
        {/* Hero unit */}

        <Container sx={{ py: 3 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {bookReducer.result.map((card) => (
              <Grid item key={card.idBook} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={card.imageUrl}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.bookName}
                    </Typography>
                    <Typography>{card.detail}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => {
                        navigate("/borrow");
                      }}
                      size="small"
                    >
                      ยืนหนังสือ
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
