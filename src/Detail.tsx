import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import PageNotFound from "./PageNotFound";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { IBook } from "./ducks/books/types";
import { IReduxStore } from "./ducks/reduxStoreType";

interface IDetailProps {
  classes: {
    root: string;
    header: string;
    pipe: string;
  };
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      marginTop: "20px",
      display: "flex",
      flexWrap: "wrap",
    },
    header: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
    },
    pipe: {
      "&:not(:last-child):after": {
        content: "|",
        padding: "5px",
      },
    },
  });

const Detail: FunctionComponent<IDetailProps> = ({ classes }) => {
  const { bookId } = useParams();

  const wrapedPromise = useSelector(
    (state: IReduxStore) => state.books.wrapPromise
  );
  const books = wrapedPromise?.read?.();

  const book: IBook | undefined = books?.find?.(
    (book: IBook) => book?.id === bookId
  );

  return book ? (
    <article className={classes.root}>
      <section>
        {book?.poster && <img alt={book?.title} src={book.poster} />}
      </section>
      <div>
        <header className={classes.header}>
          <h1>{book.title}</h1>
          <h3>{book.subTitle}</h3>
          {book?.ranking !== undefined && (
            <Rating
              name="half-rating-read"
              value={book.ranking}
              precision={0.1}
              readOnly
              size="large"
            />
          )}
        </header>
        <section>
          {book?.publicationDate && (
            <span className={classes.pipe}>
              {new Date(book.publicationDate)?.getFullYear?.()}
            </span>
          )}
          {book?.length && <span className={classes.pipe}>{book.length}</span>}
          {book?.publisher && (
            <span className={classes.pipe}>{book.publisher}</span>
          )}
        </section>
        {book?.overview && (
          <section>
            Overview:
            <div style={{ whiteSpace: "pre-line" }}>{book.overview}</div>
          </section>
        )}
      </div>
    </article>
  ) : (
    <PageNotFound />
  );
};

export default withStyles(styles)(Detail);
