import React, { FunctionComponent } from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import { Link } from "react-router-dom";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";

interface IPageNotFoundProps {
  classes: {
    root: string;
  };
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      height: "calc(100vh - 110px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "25px",
      textTransform: "uppercase",
      flexDirection: "column",
      fontWeight: "bold",
      "& a": {
        textTransform: "none",
        textDecoration: "none",
        color: "black",
        "& svg": {
          position: "relative",
          top: "7px",
        },
      },
    },
  });

const HomeIcon = (props: any) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);

const PageNotFound: FunctionComponent<IPageNotFoundProps> = ({ classes }) => (
  <div className={classes.root}>
    <div>page not found</div>
    <div>
      <Link to="/">
        Go back <HomeIcon style={{ fontSize: 40 }} />
      </Link>
    </div>
  </div>
);

export default withStyles(styles)(PageNotFound);
