import { Card, CardContent, Typography, CardActions, Button, Box } from "@mui/material";
import { FormikProps, Form, Field, Formik } from "formik";
import { TextField } from "formik-material-ui";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../..";
import { Book } from "../../../tpyes/book.type";
import * as bookAction from "./../../../actions/book.action";


const AddBook: React.FC<any> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const showForm = ({ values, setFieldValue, isSubmitting }: FormikProps<Book>) => {
    return (
      <Form>
        <Card>
          <CardContent sx={{ padding: 4 }}>
            <Typography gutterBottom variant="h3">
              เพิ่มหนังสือ
            </Typography>

            <Field style={{ marginTop: 16 }} fullWidth component={TextField} name="bookName" type="text" label="ชื่อหนังสือ" />
            <br />
            <Field style={{ marginTop: 16 }} fullWidth component={TextField} name="detail" type="text" label="รายละเอียด" />

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
              เพิ่มหนังสือ
            </Button>
            <Button component={Link} to="/libray" variant="outlined" fullWidth>
              ยกเลิก
            </Button>
          </CardActions>
        </Card>
      </Form>
    );
  };

  const initialValues: Book = { bookName: "", detail: "" }; 

  return (
    <Box>
      <Formik
        validate={(values) => {
          let errors: any = {};
          if (!values.bookName) errors.name = "Enter name book";
          if (!values.detail) errors.detail = "Enter detail book";
          return errors;
        }}
        initialValues={initialValues}
        onSubmit={(values:Book, { setSubmitting }) => {
          alert(JSON.stringify(values));
          let formData = new FormData();
          formData.append("bookName", String(values.bookName));
          formData.append("detail", String(values.detail));
          dispatch(bookAction.addBook(values,navigate));
          setSubmitting(false);
        }}
      >
        {(props: any) => showForm(props)}
      </Formik>
    </Box>
  );
};

export default AddBook;
