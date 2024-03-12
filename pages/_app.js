import "@/styles/globals.css";
import { ChakraProvider } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import UserContextProvider from "@/context/userContext";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </ChakraProvider>
  );
};

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
};
