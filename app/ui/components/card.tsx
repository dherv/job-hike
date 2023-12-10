import React from "react";

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white border border-primary-300 rounded-md overflow-hidden">
      <div className="px-6 py-4">{children}</div>
    </div>
  );
};
