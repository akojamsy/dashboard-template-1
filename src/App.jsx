import { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Main, Overview } from "./pages";

function App() {
  return (
    <Routes>
      <Route path='/dashboard' element={<Main />}>
        <Route index element={<Overview />} />
      </Route>
    </Routes>
    // <Suspense fallback={"Error"}>
    // <Routes>
    //   <Route
    //     path='/'
    //     element={
    //       <Suspense fallback={<div>Loading...</div>}>
    //         <Overview />
    //       </Suspense>
    //     }
    //   />
    // </Routes>
    // </Suspense>
  );
}

export default App;
