import MainNavigation from "../components/MainNavigation";

export default function Error() {
  return (
    <div>
      <MainNavigation />
      <main className="content">
        <h1>Oops, an Error has Ocurred</h1>
        <p>The page you are looking for was not found.</p>
      </main>
    </div>
  );
}
