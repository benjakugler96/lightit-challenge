import { Header, Content, Sidebar } from "../../components";

const Home = () => (
  <div className="h-screen flex flex-col">
    <Header />
    <div className="flex flex-1">
      <Sidebar />
      <Content />
    </div>
  </div>
);

export default Home;
