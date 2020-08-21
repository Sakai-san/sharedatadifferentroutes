import { useEffect } from "react";

import { IBook } from "./types";
//import books from "../../../public/books.json";

const books: any = [
  {
    ranking: 4.6,
    authors: ["Natasha Boyd"],
    length: 329,
    publisher: "Blackstone Publishing",
    publicationDate: "October 3, 2017",
    asin: "B087YRB3RY",
    title: "The Indigo Girl",
    subTitle: "A novel",
    overview:
      "The year is 1739. Eliza Lucas is sixteen years old when her father leaves her in charge of their family’s three plantations in rural South Carolina and then proceeds to bleed the estates dry in pursuit of his military ambitions. Tensions with the British, and with the Spanish in Florida, just a short way down the coast, are rising, and slaves are starting to become restless. Her mother wants nothing more than for their South Carolina endeavor to fail so they can go back to England. Soon her family is in danger of losing everything.\n\nUpon hearing how much the French pay for indigo dye, Eliza believes it’s the key to their salvation. But everyone tells her it’s impossible, and no one will share the secret to making it. Thwarted at nearly every turn, even by her own family, Eliza finds that her only allies are an aging horticulturalist, an older and married gentleman lawyer, and a slave with whom she strikes a dangerous deal: teach her the intricate thousand-year-old secret process of making indigo dye and in return—against the laws of the day—she will teach the slaves to read.",
    poster: "https://m.media-amazon.com/images/I/41QilFp0ZIL.jpg",
  },
];

// Suspense integrations like Relay implement
// a contract like this to integrate with React.
// Real implementations can be significantly more complex.
// Don't copy-paste this into your project!
function wrapPromise<T>(promise: Promise<T>) {
  let status = "pending";
  let result: T;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

const useBooksComponent = () => {
  let wrapP = null;
  useEffect(() => {
    const booksPromise: Promise<IBook[]> = Promise.resolve(books);
    wrapP = wrapPromise<IBook[]>(booksPromise);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return wrapP;
};

export default useBooksComponent;
