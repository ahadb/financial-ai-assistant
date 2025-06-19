import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Combobox } from "./components/combobox";

export default function Heading() {
  return (
    <div>
      <div>
        <nav aria-label="Back" className="sm:hidden">
          <a
            href="#"
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-zinc-400 dark:hover:text-white"
          >
            <ChevronLeftIcon
              aria-hidden="true"
              className="mr-1 -ml-1 size-5 shrink-0 text-gray-400 dark:text-zinc-500"
            />
            Back
          </a>
        </nav>
        <nav aria-label="Breadcrumb" className="hidden sm:flex">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex">
                <a
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-zinc-400 dark:hover:text-white"
                >
                  SS&C AI
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  aria-hidden="true"
                  className="size-5 shrink-0 text-gray-400 dark:text-zinc-500"
                />
                <a
                  href="#"
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-zinc-400 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div className="mt-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="/src/assets/joe-stein.png"
            alt="User Avatar"
            className="h-16 w-16 rounded-full shadow-sm border"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
              Welcome to your Dashboard, Joe!
            </h2>
            <p className="text-sm text-gray-500 dark:text-zinc-400">
              Here’s a summary of your financial activity.
            </p>
          </div>
        </div>

        <div className="mt-4 flex shrink-0 md:mt-0 md:ml-4"></div>
      </div>
    </div>
  );
}
