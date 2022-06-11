import defaultTheme from "../defaultTheme";

export default {
  styleOverrides: {
    h1: {
      letterSpacing: 1.2,
      [defaultTheme.breakpoints.down("xl")]: {
        fontSize: "5rem"
      },
      [defaultTheme.breakpoints.down("lg")]: {
        fontSize: "4rem"
      },
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: "3rem"
      },
      [defaultTheme.breakpoints.down("xs")]: {
        fontSize: "2.5rem"
      },
    },
    h2: {
      [defaultTheme.breakpoints.down("xl")]: {
        fontSize: "4.5rem"
      },
      [defaultTheme.breakpoints.down("lg")]: {
        fontSize: "3.5rem"
      },
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: "2.5rem"
      },
      [defaultTheme.breakpoints.down("xs")]: {
        fontSize: "2rem"
      }
    },
    h3: {
      [defaultTheme.breakpoints.down("xl")]: {
        fontSize: "3.5rem"
      },
      [defaultTheme.breakpoints.down("lg")]: {
        fontSize: "3.2rem"
      },
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: "3.0rem"
      },
      [defaultTheme.breakpoints.down("xs")]: {
        fontSize: "2.6rem"
      }
    },
    h4: {
      [defaultTheme.breakpoints.down("xl")]: {
        fontSize: "2.5rem"
      },
      [defaultTheme.breakpoints.down("lg")]: {
        fontSize: "2.3rem"
      },
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: "2.0rem"
      },
      [defaultTheme.breakpoints.down("xs")]: {
        fontSize: "1.8rem"
      }
    },
    h5: {
      [defaultTheme.breakpoints.down("xl")]: {
        fontSize: "2.2rem"
      },
      [defaultTheme.breakpoints.down("lg")]: {
        fontSize: "2.0rem"
      },
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: "1.8rem"
      },
      [defaultTheme.breakpoints.down("xs")]: {
        fontSize: "1.5rem"
      }
    },
    subtitle1: {
      [defaultTheme.breakpoints.down("xs")]: {
        fontSize: "1.4rem"
      }
    }
  }
};
