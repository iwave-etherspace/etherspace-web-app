import React, { useContext } from 'react';
import { AuthContext } from 'react-oauth2-code-pkce';
import { useNavigate } from 'react-router-dom';
import  { ArrowLeftOnRectangleIcon} from "@heroicons/react/24/outline";

const LogoutButton = () => {
  const { token, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

const handleLogout = () => {
  
  localStorage.clear();
  sessionStorage.clear();
  logOut();
  
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = import.meta.env.VITE_LOGOUT_URL;
  form.style.display = 'none';
  
  const csrfInput = document.createElement('input');
  csrfInput.type = 'hidden';
  csrfInput.name = '_csrf';
  csrfInput.value = document.querySelector('meta[name="_csrf"]')?.content || '';
  form.appendChild(csrfInput);
  
  document.body.appendChild(form);
  form.submit();
};

  return (
    <button
      onClick={handleLogout}
      className="flex items-center w-full p-2 rounded-md hover:bg-gray-200 text-gray-700"
    >
      <div className="flex items-center justify-center w-6 h-6">
        <ArrowLeftOnRectangleIcon className="h-5 w-5" />
      </div>
      <span className="ml-2 text-sm">Log Out</span>
    </button>
  );
};

export default LogoutButton;