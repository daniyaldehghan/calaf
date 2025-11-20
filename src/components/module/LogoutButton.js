"use client";
import { FiLogOut } from "react-icons/fi";
import { signOut } from "next-auth/react";
function LogoutButton() {
  return (
    <button
      onClick={signOut}
      className="flex text-rights items-center gap-1 w-full text-red-500 cursor-pointer"
    >
      <FiLogOut />
      خروج
    </button>
  );
}

export default LogoutButton;
