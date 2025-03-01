'use client'

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/index";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
export default function Home({pageProps}) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header  {...pageProps}/>
        <Carousel />
      </PersistGate>
    </Provider>
  );
}
