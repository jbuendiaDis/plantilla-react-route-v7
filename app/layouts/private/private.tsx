import { useNavigate, Outlet, useLocation } from "react-router";
import { useEffect, useState } from "react";

export default function PrivateLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token");
        
        if (!token) {
          setIsAuthenticated(false);
          return;
        }

        // const response = await fetch("/api/validate-token", {
        //   headers: { Authorization: `Bearer ${token}` }
        // });
        // setIsAuthenticated(response.ok);

        setIsAuthenticated(true); // Temporary: Replace with actual validation
      } catch (error) {
        console.error("Auth check failed:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    navigate("/auth/register"); // Redirect specifically to the login route
    return null;
  }

  return <Outlet />;
}
