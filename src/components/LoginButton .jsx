import { useState } from "react";

export const LoginButton = ({ onLogin }) => {
  const handleLogin = () => {
    localStorage.setItem("galleryAccess", "granted");
    onLogin(true); // Notify parent component
  };

  return (
    <div className="text-center mt-10">
      <button
        onClick={handleLogin}
        className="px-6 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition duration-300"
      >
        Login to View Gallery
      </button>
    </div>
  );
};
