import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

export default function Error() {
  const error = useRouteError();
  const message =
    error.status === 404
      ? "Could not find resource or page."
      : error.data.message;
  return (
    <>
      <MainNavigation />
      <PageContent title={`A ${error.status} error has ocurred`}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
