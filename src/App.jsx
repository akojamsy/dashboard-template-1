import { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Main, Overview, Login, NotFound, Wallet } from "./pages";

//import Login from "./pages/authentication/Login";

function App() {
  return (
    <Routes>
      <Route path='/dashboard' element={<Main />}>
        <Route index element={<Overview />} />
        <Route path='wallet' element={<Wallet />} />
        <Route path='*' element={<NotFound />} />
      </Route>
      <Route path='/login' element={<Login />} />
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

    // <Login/>
  );
}

export default App;
