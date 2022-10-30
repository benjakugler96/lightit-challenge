import Dropdown from "../dropdown";
import { Logo } from "./components";

const Header = () => {
  return (
    <header
      className="flex justify-between items-center mobile:px-8 px-16 py-4 bg-gray-800"
      data-testid="app-header"
    >
      <Logo />
      <Dropdown />
    </header>
  );
};

export default Header;
