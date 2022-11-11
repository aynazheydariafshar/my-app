import { Routes, Route } from "react-router-dom";

import { APP_ROUTE, FOREIGN, PROFILE } from "constant";
import Main from "./app";
import Order from "./app/Order";
import Profile from "./app/Profile";
import NotFound from "./NotFound";
import Foreign from "./app/Foreign";

const RoutesMap = () => {
  return (
    <Routes>
      <Route element={<Main />} path={APP_ROUTE}>
        <Route index element={<Order />} />
        <Route element={<Profile />} path={PROFILE} />
        <Route element={<Foreign />} path={FOREIGN} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesMap;
