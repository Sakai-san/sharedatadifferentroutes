import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Rating from "@material-ui/lab/Rating";
import PageNotFound from "./PageNotFound";
import actions from "./ducks/useBooks/actions";
import { IWrapedPromise } from "./ducks/reduxStoreType";
import useWrapPromise from "./useWrapPromise";
import { IBook } from "./ducks/useBooks/types";

interface IDetailProps {
  wrapPromise: IWrapedPromise<IBook[]>;
}

const Detail: FunctionComponent<IDetailProps> = ({ wrapPromise }) => {
  const { bookId } = useParams();
  const resolved = useWrapPromise(
    wrapPromise,
    useDispatch(),
    actions.makeBooksFetch
  );

  const book: IBook | undefined = resolved.find(
    (book: IBook) => (book?.asin || book?.isbn13 || book?.isbn10) === bookId
  );

  return book ? (
    <article className="Book">
      <section>
        {book?.poster && <img alt={book?.title} src={book.poster} />}
      </section>
      <div>
        <header>
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
            <span className="Pipe">
              {new Date(book.publicationDate)?.getFullYear?.()}
            </span>
          )}
          {book?.length && <span className="Pipe">{book.length}</span>}
          {book?.publisher && <span className="Pipe">{book.publisher}</span>}
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

export default Detail;
