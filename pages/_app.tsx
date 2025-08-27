import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../src/core/store/index";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
