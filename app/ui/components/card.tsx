import React from "react";

export const Card = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <div
      className="bg-white border border-primary-300 rounded-md overflow-hidden hover:cursor-pointer hover:border-primary-400 transition-all"
      onClick={onClick}>
      <div className="px-6 py-4">{children}</div>
    </div>
  );
};
