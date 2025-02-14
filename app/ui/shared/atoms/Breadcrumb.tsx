import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router";
import { useTheme } from "~/contexts/theme-context";

export const Breadcrumb = ({ title }: { title: string }) => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
      <h2 className={`text-2xl font-semibold mb-0 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>{title}</h2>
      <ul className="flex items-center gap-2">
        <li className="font-medium">
          <Link
            to="/"
            className={`flex items-center gap-1 hover:text-primary transition-colors ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}
          >
            <Icon
              icon="solar:home-smile-angle-outline"
              className="text-lg"
            />
            Home
          </Link>
        </li>
        <li> - </li>
        <li className={`font-medium ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>{title}</li>
      </ul>
    </div>
  );
};
