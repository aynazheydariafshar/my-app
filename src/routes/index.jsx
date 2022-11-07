import { Routes, Route } from "react-router-dom";

import Main from "./app";
import NotFound from "./NotFound";

const RoutesMap = () => {
  return (
    <Routes>
      <Route element={<Main />}>
        
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesMap;
