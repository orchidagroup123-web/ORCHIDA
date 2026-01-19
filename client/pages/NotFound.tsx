import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[calc(100vh-theme(height.20)-theme(height.64))] flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-orchida-red mb-4">404</h1>
          <p className="text-2xl text-gray-800 mb-2">Page Not Found</p>
          <p className="text-xl text-gray-600 mb-8">The page you're looking for doesn't exist</p>
          <a href="/" className="inline-block px-8 py-3 bg-orchida-red text-white font-bold rounded-lg hover:bg-red-700 transition-colors">
            Return to Home
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
