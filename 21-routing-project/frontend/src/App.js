import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventForm from "./pages/EventForm";
import EventDetails from "./pages/EventDetails";
import EventLayout from "./pages/EventLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "", element: <Home /> },
        {
          path: "events",
          element: <EventLayout />,
          children: [
            {
              path: "",
              element: <Events />,
              loader: async () => {
                const response = await fetch("http://localhost:8080/events");
                const resData = await response.json();
                return resData.events;
              },
            },
            { path: "new", element: <EventForm /> },
            { path: ":eventId/edit", element: <EventForm /> },
            { path: ":eventId", element: <EventDetails /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
