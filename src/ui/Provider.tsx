import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import React, { ReactElement } from "react";

declare module "@material-ui/core/styles/createMuiTheme" {
  export interface Theme {
    action: {
      add: string;
      cancel: string;
      accept: string;
    };
  }

  interface ThemeOptions {
    action?: {
      add?: string;
      cancel?: string;
      accept?: string;
    };
  }
}

export type MyTheme = ReturnType<typeof createMuiTheme>;

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: "#c57583",
      main: "#6565dd",
      light: "azure",
    },
    secondary: {
      main: "#ec8f9f",
    },
  },
  typography: {
    fontSize: 20,
  },
  action: {
    add: "#ec8f9f",
    cancel: "#fa0707",
    accept: "#01a501",
  },
});

const Provider: React.FC = ({ children }): ReactElement => {
  return <ThemeProvider<MyTheme> theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
