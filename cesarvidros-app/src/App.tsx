import React, { Suspense} from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { LoadingProvider } from "./component/Loading/Loading";
import { UserRoutes } from "./routes/userRoutes";

import "./styles/StyleForAll.css";

function App() {
  return (
    <LoadingProvider>
      <Router>
        <Suspense fallback={<>Loading...</>}>
          <UserRoutes />
        </Suspense>
      </Router>
    </LoadingProvider>
  );
}

export default App;
