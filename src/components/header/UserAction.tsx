import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

export const UserActions: React.FC = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="flex items-center gap-4">
      {currentUser ? (
        <>
          <a href="#" className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-secondary-50 text-primary">
            <span>User</span>
          </a>
        </>
      ) : (
        <a href="/login" className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-secondary-50 text-primary">
          <i className="sicon-user"></i>
        </a>
      )}
    </div>
  );
};

export const LogOut: React.FC = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="flex items-center gap-4">
      {currentUser && (
        <button onClick={logout} className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-red-600 ">
          <span>logout</span>
        </button>
      )}
    </div>
  );
};