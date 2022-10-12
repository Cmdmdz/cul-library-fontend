import React from "react";
import { store } from "./../index";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = (props: any) => {
  const auth = store.getState().loginReducer.result;
  return auth ? <Navigate to="/library" /> : <Outlet />;
};

export default PublicRoutes;
