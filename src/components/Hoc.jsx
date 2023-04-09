import React from "react";
import withAuth from "./HocAuth";

const SecretComponent = () => {
  return <div>This is SecretComponent</div>;
};

const UseHoc = () => {
  const AuthenticatedSecretComponent = withAuth(SecretComponent);

  return (
    <div>
      <h1>Welcome to my app!</h1>
      <AuthenticatedSecretComponent />
    </div>
  );
};

export default UseHoc;
