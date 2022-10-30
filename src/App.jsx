import Home from "./view/home";
import { worker } from "./mocks/browser";

worker.start();

const App = () => {
  return <Home />;
};

export default App;
