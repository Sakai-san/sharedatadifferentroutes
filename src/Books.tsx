import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import {
  createStyles,
  Theme,
  withStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import { IBook } from "./ducks/books/types";

interface IBooksProps {
  classes: {
    row: string;
    poster: string;
    book: string;
  };
  books: IBook[];
}

const styles = (theme: Theme) =>
  createStyles({
    row: {
      display: "flex",
      flexWrap: "wrap",
    },
    poster: {
      height: "180px",
      width: "auto",
    },
    book: {
      borderRadius: "0.1875rem",
      display: "flex",
      border: "3px solid transparent",
      "&:not(:last-child)": {
        marginRight: "14px",
      },
      "&:hover": {
        border: "2px solid #ff51a1",
        padding: "1px",
      },
    },
  });

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
}));

const BootstrapTooltip = (props: any) => (
  <Tooltip arrow classes={useStylesBootstrap()} {...props} />
);

const Books: FunctionComponent<IBooksProps> = ({ books, classes }) => {
  return (
    <div className={classes.row}>
      {books.map((book, index) => {
        return (
          <Link
            className={classes.book}
            to={
              book?.asin || book?.isbn13 || book?.isbn10
                ? `/book/${book?.asin || book?.isbn13 || book?.isbn10}`
                : ""
            }
            key={book?.asin || book?.isbn13 || book?.isbn10 || index}
          >
            <BootstrapTooltip title={book?.title || ""}>
              {book?.poster && (
                <img
                  className={classes.poster}
                  alt={book?.title}
                  src={book.poster}
                />
              )}
            </BootstrapTooltip>
          </Link>
        );
      })}
    </div>
  );
};

export default withStyles(styles)(Books);
