import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Events, { eventsLoader } from "./pages/Events";
import EventForm, { eventFormSaveAction } from "./pages/EventForm";
import EventDetails, {
  eventDeleteAction,
  eventDetailLoader,
} from "./pages/EventDetails";
import EventLayout from "./pages/EventLayout";
import Error from "./pages/Error";
import Newsletter, { newsLetterSignupAction } from "./pages/Newsletter";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "events",
          element: <EventLayout />,
          children: [
            {
              index: true,
              element: <Events />,
              loader: eventsLoader,
            },
            {
              path: "new",
              element: <EventForm />,
              action: eventFormSaveAction,
            },
            {
              path: ":eventId",
              id: "event-detail",
              loader: eventDetailLoader,
              children: [
                {
                  index: true,
                  element: <EventDetails />,
                  action: eventDeleteAction,
                },
                {
                  path: "edit",
                  element: <EventForm />,
                  action: eventFormSaveAction,
                },
              ],
            },
          ],
        },
        {
          path: 'newsletter',
          element: <Newsletter />,
          action: newsLetterSignupAction,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
