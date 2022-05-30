import defaultTheme from "../defaultTheme";

export default {
  styleOverrides: {
    h1: {
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
    }
  }
};
