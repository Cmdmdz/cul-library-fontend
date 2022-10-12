import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  MenuItem,
} from "@mui/material";
import { FormikProps, Form, Field, Formik } from "formik";
import { Select, TextField } from "formik-material-ui";
import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../..";
import { RootReducers } from "../../../reducers";
import bookReducer from "../../../reducers/book.reducer";
import { Book } from "../../../tpyes/book.type";
import * as userAction from "./../../../actions/user.action";

const BorrwBooks: React.FC<any> = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const bookReducer = useSelector((state: RootReducers) => state.bookReducer);

  const showForm = ({
    values,
    setFieldValue,
    isSubmitting,
  }: FormikProps<Book>) => {
    return (
      <Form>
        <Card>
          <CardContent sx={{ padding: 4 }}>
            <Typography gutterBottom variant="h3">
              เพิ่มหนังสือ
            </Typography>

            <Field
              style={{ marginTop: 16, width: 200 }}
              component={Select}
              name="idBook"
              type="text"
              label="ชื่อหนังสือ"
              fullWidth
            >
              {bookReducer.result.map((card) => (
                <MenuItem value={card.idBook} key={card.idBook}>{card.bookName}</MenuItem>
              ))}
            </Field>

            <br />
            <Field
              style={{ marginTop: 16 }}
              fullWidth
              component={TextField}
              name="idBook"
              type="text"
            />
          </CardContent>
          <CardActions>
            <Button
              disabled={isSubmitting}
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{ marginRight: 1 }}
            >
              ยืมหนังสือ
            </Button>
            <Button component={Link} to="/libray" variant="outlined" fullWidth>
              ยกเลิก
            </Button>
          </CardActions>
        </Card>
      </Form>
    );
  };

  const initialValues: Book = { idBook: "", bookName: "" };

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: Book, { setSubmitting }) => {
          dispatch(
            userAction.addBorrowed(values, navigate)
          );
          setSubmitting(false);
        }}
      >
        {(props: any) => showForm(props)}
      </Formik>
    </Box>
  );
};

export default BorrwBooks;
