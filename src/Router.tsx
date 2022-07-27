import { Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { NotFound } from "./pages/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/sobre" component={About} exact />
      <Route path="/projetos" component={Projects} exact />
      <Route path="" component={NotFound} exact />
    </Switch>
  );
}
