import { APP_ROUTE } from "constant";
import { Routes, Route } from "react-router-dom";

import Main from "./app";
import Order from "./app/Order";
import NotFound from "./NotFound";

const RoutesMap = () => {
  return (
    <Routes>
      <Route element={<Main />} path={APP_ROUTE}>
        <Route index element={<Order />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesMap;
