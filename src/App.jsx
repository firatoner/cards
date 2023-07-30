import "./App.css";
import "bulma/css/bulma.css";
import { Names } from "./components/course.jsx";
import Angular from "./images/angular.jpg";
import Bootstrap5 from "./images/Bootstrap5.png";
import Ccsharp from "./images/Ccsharp.png";
import Kompleweb from "./images/Kompleweb.jpg";

function App() {
  return (
    <div className="app">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title maintitle">Cards</p>
        </div>
      </section>
      <br />
      <div className="columns is-variable is-2-mobile is-0-tablet is-3-desktop is-8-widescreen is-1-fullhd">
        <br />
        <div className="column">
          <Names
            img={Angular}
            title="Angular"
            desc="
            Qui cillum elit sint id irure Lorem anim. Cupidatat officia tempor exercitation laboris tempor. Quis aliqua deserunt velit est enim nisi. Laboris aliquip fugiat qui ipsum excepteur incididunt id. Excepteur dolore voluptate ullamco anim cillum deserunt nulla et occaecat ad. Voluptate elit Lorem qui irure consequat."
          />
        </div>
        <div className="column">
          <Names
            img={Bootstrap5}
            title="Bootstrap5"
            desc="
            Qui cillum elit sint id irure Lorem anim. Cupidatat officia tempor exercitation laboris tempor. Quis aliqua deserunt velit est enim nisi. Laboris aliquip fugiat qui ipsum excepteur incididunt id. Excepteur dolore voluptate ullamco anim cillum deserunt nulla et occaecat ad. Voluptate elit Lorem qui irure consequat."
          />
        </div>
        <div className="column">
          <Names
            img={Ccsharp}
            title="Ccsharp"
            desc="
            Qui cillum elit sint id irure Lorem anim. Cupidatat officia tempor exercitation laboris tempor. Quis aliqua deserunt velit est enim nisi. Laboris aliquip fugiat qui ipsum excepteur incididunt id. Excepteur dolore voluptate ullamco anim cillum deserunt nulla et occaecat ad. Voluptate elit Lorem qui irure consequat."
          />
        </div>
        <div className="column">
          <Names
            img={Kompleweb}
            title="Kompleweb"
            desc="
            Qui cillum elit sint id irure Lorem anim. Cupidatat officia tempor exercitation laboris tempor. Quis aliqua deserunt velit est enim nisi. Laboris aliquip fugiat qui ipsum excepteur incididunt id. Excepteur dolore voluptate ullamco anim cillum deserunt nulla et occaecat ad. Voluptate elit Lorem qui irure consequat."
          />
        </div>
      </div>
    </div>
  );
}

export default App;
