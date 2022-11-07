import LayoutStructer from "HOC/LayoutStructer";
import { Outlet } from "react-router";

const Main = () => {
  return <Outlet />;
};

export default LayoutStructer(Main);
