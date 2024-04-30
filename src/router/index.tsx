import { Router, Route, RouterOnChangeArgs } from "preact-router";
import { listRoutes } from "./constants";

export default function GlobalRouter() {
  const handleRoute = async (
    args: RouterOnChangeArgs<Record<string, string | undefined> | null>
  ) => {
    console.log(args.url);
  };

  return (
    <Router onChange={handleRoute}>
      {listRoutes.map((r, index) => (
        <Route key={`r-${index}`} path={r.path} component={r.component} />
      ))}
    </Router>
  );
}
