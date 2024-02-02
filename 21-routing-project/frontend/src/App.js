import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Events, { eventsLoader } from "./pages/Events";
import EventForm from "./pages/EventForm";
import EventDetails, { eventDetailLoader } from "./pages/EventDetails";
import EventLayout from "./pages/EventLayout";
import Error from "./pages/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        { path: "", element: <Home /> },
        {
          path: "events",
          element: <EventLayout />,
          children: [
            {
              path: "",
              element: <Events />,
              loader: eventsLoader,
            },
            { path: "new", element: <EventForm /> },
            {
              path: ":eventId",
              id: "event-detail",
              loader: eventDetailLoader,
              children: [
                {
                  path: "",
                  element: <EventDetails />,
                },
                { path: "edit", element: <EventForm /> },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
