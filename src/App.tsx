import React from "react";

import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  ChakraProvider,
  refineTheme,
  ReadyPage,
  ErrorComponent,
  Layout,
  AuthPage,
} from "@pankod/refine-chakra-ui";

import { DataProvider } from "@pankod/refine-strapi-v4";

import routerProvider from "@pankod/refine-react-router-v6";

import { authProvider, axiosInstance } from "./authProvider";
import { API_URL } from "./constants";
import { PostList } from "./pages/posts/list";
import { PostShow } from "pages/posts/show";
import { PostCreate } from "pages/posts/create";
import { PostEdit } from "pages/posts/edit";

function App() {
  return (
    <>
      
      <ChakraProvider theme={refineTheme}>
        <Refine
          authProvider={authProvider}
          dataProvider={DataProvider(API_URL + `/api`, axiosInstance)}
          notificationProvider={notificationProvider()}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          Layout={Layout}
          // highlight-start
          LoginPage={AuthPage}
          resources={[
            {
              name: "posts",
              list: PostList,
              show: PostShow,
              create: PostCreate,
              edit: PostEdit,
              canDelete: true,
            },
          
            // highlight-end
          ]}
          routerProvider={routerProvider}
          options={{mutationMode: "undoable"}}
        />
      </ChakraProvider>
    </>
  );
}

export default App;
