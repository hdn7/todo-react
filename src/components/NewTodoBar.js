/* eslint-disable no-undef */
import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Button, InputBase } from "@material-ui/core";
import { addTodo } from "../store/actions";

const useStyle = makeStyles((theme) => ({
  root: {
    minWidth: 300,
  },
  input: {
    backgroundColor: "white",
    padding: ".4em .8em",
    width: "100%",
    border: `solid 1px ${theme.palette.primary.main}`,
    borderRight: "none",
    borderRadius: ".5em 0 0 .5em",
  },
  btn: {
    borderRadius: "0 .5em .5em 0",
  },
}));

const NewTodoBar = (props) => {
  const classes = useStyle();
  const [text, setText] = useState("");

  const handleClick = () => {
    // TODO: add important todo
    props.addTodo("Active", text);
    setText("");
  };

  return (
    <Grid container justify="center" style={{ marginTop: "3em" }}>
      <Grid container xs={5} wrap="nowrap" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Take a note..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          className={classes.btn}
          variant="contained"
          disableElevation
          size="medium"
          color="primary"
          onClick={handleClick}
        >
          ADD
        </Button>
      </Grid>
    </Grid>
  );
};

const actionCreator = {
  addTodo,
};

export default connect(null, actionCreator)(NewTodoBar);
