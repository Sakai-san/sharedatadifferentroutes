import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import { IBook } from "./Home";

interface IBooksProps {
  books: IBook[];
}

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

const Books: FunctionComponent<IBooksProps> = ({ books }) => {
  return (
    <div>
      {books.map((book, index) => {
        return (
          <Link
            className="Book-item"
            to={
              book?.asin || book?.isbn13 || book?.isbn10
                ? `/book/${book?.asin || book?.isbn13 || book?.isbn10}`
                : ""
            }
            key={book?.asin || book?.isbn13 || book?.isbn10 || index}
          >
            <BootstrapTooltip title={book?.title || ""}>
              {book?.poster && <img alt={book?.title} src={book.poster} />}
            </BootstrapTooltip>
          </Link>
        );
      })}
    </div>
  );
};

export default Books;
