import React from "react";

const transactions = [
  {
    id: "88HOWG",
    company: "Goldman Sachs",
    share: "BOA",
    commission: "+$6.41",
    price: "$3,607.93",
    quantity: "12.12",
    netAmount: "$2,952.47",
  },
  {
    id: "A7K89M",
    company: "Goldman Sachs",
    share: "BOA",
    commission: "+$12.46",
    price: "$4,523.46",
    quantity: "10.73",
    netAmount: "$2,362.68",
  },
  {
    id: "J1ZGP0",
    company: "Bank of America",
    share: "CTG",
    commission: "+$5.91",
    price: "$2,130.11",
    quantity: "71.87",
    netAmount: "$4,956.43",
  },
  {
    id: "DDPZYW",
    company: "Bank of America",
    share: "CAC",
    commission: "+$4.88",
    price: "$4,253.69",
    quantity: "65.26",
    netAmount: "$4,601.75",
  },
  {
    id: "5A4U0D",
    company: "Goldman Sachs",
    share: "CAC",
    commission: "+$11.58",
    price: "$1,630.51",
    quantity: "8.91",
    netAmount: "$2,152.85",
  },
  {
    id: "XP3M9A",
    company: "Fidelity",
    share: "GSC",
    commission: "+$7.22",
    price: "$1,982.37",
    quantity: "35.50",
    netAmount: "$3,751.90",
  },
  {
    id: "ZK12B8",
    company: "Charles Schwab",
    share: "MST",
    commission: "+$9.11",
    price: "$3,421.75",
    quantity: "15.67",
    netAmount: "$4,289.22",
  },
  {
    id: "L9T3P2",
    company: "Vanguard",
    share: "VGD",
    commission: "+$3.84",
    price: "$2,713.19",
    quantity: "44.22",
    netAmount: "$3,948.00",
  },
  {
    id: "B3N6K1",
    company: "Citigroup",
    share: "WFC",
    commission: "+$6.75",
    price: "$1,597.88",
    quantity: "38.45",
    netAmount: "$2,879.15",
  },
  {
    id: "Y0PXKF",
    company: "BlackRock",
    share: "BLK",
    commission: "+$8.20",
    price: "$2,984.66",
    quantity: "26.34",
    netAmount: "$4,010.57",
  },
];

export default function FinancialTable() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 dark:bg-zinc-800">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto ">
          <h1 className="text-base font-semibold text-gray-900 dark:text-white">
            Transactions
          </h1>
          <p className="mt-2 text-sm text-gray-700 dark:text-zinc-300">
            A table of placeholder stock market data that does not make any
            sense.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Export
          </button>
        </div>
      </div>

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300 dark:divide-zinc-700">
              <thead>
                <tr>
                  {[
                    "Transaction ID",
                    "Company",
                    "Share",
                    "Commision",
                    "Price",
                    "Quantity",
                    "Net amount",
                  ].map((col) => (
                    <th
                      key={col}
                      scope="col"
                      className="px-2 py-3.5 text-left text-sm font-semibold whitespace-nowrap text-gray-900 dark:text-white"
                    >
                      {col}
                    </th>
                  ))}
                  <th className="relative py-3.5 pr-4 pl-3 whitespace-nowrap sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 dark:divide-zinc-700 bg-white dark:bg-zinc-900">
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="py-2 pr-3 pl-4 text-sm whitespace-nowrap text-gray-500 dark:text-zinc-400 sm:pl-0">
                      {transaction.id}
                    </td>
                    <td className="px-2 py-2 text-sm font-medium whitespace-nowrap text-gray-900 dark:text-white">
                      {transaction.company}
                    </td>
                    <td className="px-2 py-2 text-sm whitespace-nowrap text-gray-900 dark:text-white">
                      {transaction.share}
                    </td>
                    <td className="px-2 py-2 text-sm whitespace-nowrap text-gray-500 dark:text-zinc-400">
                      {transaction.commission}
                    </td>
                    <td className="px-2 py-2 text-sm whitespace-nowrap text-gray-500 dark:text-zinc-400">
                      {transaction.price}
                    </td>
                    <td className="px-2 py-2 text-sm whitespace-nowrap text-gray-500 dark:text-zinc-400">
                      {transaction.quantity}
                    </td>
                    <td className="px-2 py-2 text-sm whitespace-nowrap text-gray-500 dark:text-zinc-400">
                      {transaction.netAmount}
                    </td>
                    <td className="relative py-2 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                      >
                        Edit<span className="sr-only">, {transaction.id}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
