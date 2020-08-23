import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  createStyles,
  fade,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { IBook } from "./ducks/books/types";
import { IReduxStore } from "./ducks/reduxStoreType";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    toolbar: {
      backgroundColor: "#FF51A1",
      minHeight: 80,
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column",
      },
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        flexDirection: "row",
      },
    },
    title: {
      flexGrow: 1,
      "& > a": {
        color: fade(theme.palette.common.white, 1),
        textDecoration: "none",
      },
    },
    textfield: {
      "& > *": {
        color: fade(theme.palette.common.white, 1),
      },
    },
  });

interface SearchAppBarProps {
  classes: {
    root: string;
    toolbar: string;
    title: string;
    textfield: string;
  };
}

const SearchAppBarComponent: FunctionComponent<SearchAppBarProps> = ({
  classes,
}) => {
  const wrapedPromise = useSelector(
    (state: IReduxStore) => state.books.wrapPromise
  );
  const books = wrapedPromise?.read?.();

  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/">Home</Link>
          </Typography>

          <Autocomplete
            id="combo-box-movies"
            options={books}
            getOptionLabel={(option: IBook) => option?.title || ""}
            style={{ width: 300 }}
            onChange={(e, val) => {
              if (val?.id) {
                history.push(`/book/${val.id}`);
              }
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search movie"
                variant="outlined"
                className={classes.textfield}
              />
            )}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(SearchAppBarComponent);
