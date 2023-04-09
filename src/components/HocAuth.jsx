import { useEffect, useState } from "react";

const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      setIsAuthenticated(true);
    }, []);

    return isAuthenticated ? <Component {...props} /> : null;
  };

  return AuthenticatedComponent;
};

export default withAuth;
