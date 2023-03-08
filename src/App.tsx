import React from "react";

import { Refine, GitHubBanner } from "@pankod/refine-core";
import {
  notificationProvider,
  ChakraProvider,
  refineTheme,
  ReadyPage,
  ErrorComponent,
  Layout,
} from "@pankod/refine-chakra-ui";

import { DataProvider } from "@pankod/refine-strapi-v4";
import { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";
import routerProvider from "@pankod/refine-react-router-v6";

import { authProvider, axiosInstance } from "./authProvider";
import { API_URL } from "./constants";

function App() {
  return (
    <>
      <GitHubBanner />
      <ChakraProvider theme={refineTheme}>
        <Refine
          authProvider={authProvider}
          dataProvider={DataProvider(API_URL + `/api`, axiosInstance)}
          notificationProvider={notificationProvider()}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          Layout={Layout}
          resources={[
            {
              name: "posts",
              list: ChakraUIInferencer,
              edit: ChakraUIInferencer,
              show: ChakraUIInferencer,
              create: ChakraUIInferencer,
              canDelete: true,
            },
          ]}
          routerProvider={routerProvider}
        />
      </ChakraProvider>
    </>
  );
}

export default App;
