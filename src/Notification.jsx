import React from "react";
import {
  ExclamationTriangleIcon,
  CheckCircleIcon,
} from "@heroicons/react/20/solid";

const mailingLists = [
  {
    id: "gpt4",
    title: "GPT-4",
    description:
      "Ideal for enterprise apps, multi-turn conversations, and high-stakes use cases.",
    users: "621 users",
  },
  {
    id: "gpt5",
    title: "GPT-5",
    description:
      "Great for chatbots, drafts, and productivity tools with lower latency.",
    users: "1200 users",
  },
  {
    id: "llama3",
    title: "LLaMA 3",
    description:
      "Suited for privacy-first apps, offline inference, or custom fine-tuning.",
    users: "2740 users",
  },
];

export default function Notification() {
  return (
    <div className="rounded-md bg-yellow-50 p-4 mb-6">
      <div className="flex">
        <div className="shrink-0">
          <ExclamationTriangleIcon
            aria-hidden="true"
            className="size-5 text-yellow-400 dark:text-yellow-200"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-600">
            Attention needed
          </h3>
          <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-600">
            <p>You must choose a model for your AI assistant.</p>
          </div>
        </div>
      </div>

      <fieldset>
        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4 mb-6">
          {mailingLists.map((mailingList) => (
            <label
              key={mailingList.id}
              className="group relative flex rounded-lg border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 p-4 has-checked:outline-2 has-checked:-outline-offset-2 has-checked:outline-indigo-600 has-focus-visible:outline-3 has-focus-visible:-outline-offset-1"
            >
              <input
                defaultValue={mailingList.id}
                defaultChecked={mailingList.id === "gpt4"}
                name="mailing-list"
                type="radio"
                className="absolute inset-0 appearance-none focus:outline-none"
              />
              <span className="flex flex-1">
                <span className="flex flex-col">
                  <span className="block text-sm font-medium text-gray-900 dark:text-white">
                    {mailingList.title}
                  </span>
                  <span className="mt-1 flex items-center text-sm text-gray-500 dark:text-zinc-300">
                    {mailingList.description}
                  </span>
                  <span className="mt-6 text-sm font-medium text-gray-900 dark:text-white">
                    {mailingList.users}
                  </span>
                </span>
              </span>
              <CheckCircleIcon
                aria-hidden="true"
                className="invisible size-5 text-indigo-600 group-has-checked:visible"
              />
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
