import React from "react";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-50 flex items-center justify-center px-6 py-8">
      <div className="text-center max-w-xl mx-auto">
        <div>
          <img 
            src="/Under-Construction.png" 
            alt="404 Error" 
            className="w-48 h-48 mx-auto"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Oops! Page Under Construction
        </h2>
        <p className="text-gray-600 mb-6 text-base">
          We are working hard to bring you an amazing experience. Stay tuned for exciting updates coming soon!
        </p>
        <div className="space-x-4">
          {/* Updated Go Back button */}
          <button
            onClick={() => navigate(-1)}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-lg transition-all duration-300 font-medium"
          >
            Go Back
          </button>
          {/* Updated Return Home button */}
          <button
            onClick={() => navigate("/")}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
          >
            Return Home
          </button>
        </div>
        <div className="mt-6 text-sm text-gray-500">
          Need assistance?{" "}
          <a 
            href="#" 
            className="text-blue-600 hover:underline font-medium"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
