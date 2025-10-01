"use client";

import { SnackbarProvider } from "notistack";
import { AppThemeProvider } from "../src/theme/AppThemeProvider.jsx";
import App from "../src/App.jsx";
import { Provider } from "react-redux";
import { store } from "../src/redux/store.js";

export default function Page() {
  return (
    <AppThemeProvider>
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <Provider store={store}>
          <App />
        </Provider>
      </SnackbarProvider>
    </AppThemeProvider>
  );
}
