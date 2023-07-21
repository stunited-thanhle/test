import React from "react";
import withAuth from "./HocAuth";
import useGeolocation from "../hooks/useLocation";

const SecretComponent = () => {
  return <div>This is SecretComponent</div>;
};

const UseHoc = () => {
  const AuthenticatedSecretComponent = withAuth(SecretComponent);

  // const { latitude, longitude } = useGeolocation();

  // console.log(latitude);
  // console.log(longitude);

  return (
    <div>
      <h1>Welcome to my app!</h1>
      <AuthenticatedSecretComponent />
    </div>
  );
};

export default UseHoc;
