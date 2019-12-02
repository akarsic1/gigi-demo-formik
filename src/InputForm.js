import React from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./Form";
import Paper from "@material-ui/core/Paper";
import { validationSchema } from "./validation";

const styles = () => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  container: {
    maxWidth: "200px",
    display: "inline-block"
  }
});

const InputForm = () => {
  const values = { name: "", email: "", confirmPassword: "", password: "" };

  return (
    <>
      <div className={styles.container}>
        <Paper elevation={1} className={styles.paper}>
          <h1>Form</h1>
          <Formik
            render={(props) =>{ console.log(props); return(<Form {...props} />)}}
            initialValues={values}
            validationSchema={validationSchema}
          />
        </Paper>
      </div>
    </>
  );
};

export default withStyles(styles)(InputForm);
