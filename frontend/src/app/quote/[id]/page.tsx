"use client";

import { useParams } from "next/navigation";
import cx from "classnames";

import { quotes } from "@quote-lib/main";

export default function Index() {
  const params = useParams();
  const dialog = quotes[params.id as string];

  if (!dialog) {
    return (
      <div className="flex items-start gap-2.5">Vyberte si citát nalevo...</div>
    );
  }

  return (
    <div>
      {dialog.items.map((item, index) => {
        return (
          <div key={index} className="flex items-start gap-2.5 mb-4">
            <div
              className={cx("flex flex-col w-full", {
                "p-3 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700":
                  Boolean(item.character),
              })}
            >
              {item.character && (
                <div className="text-md font-semibold text-gray-900 dark:text-white mb-2">
                  {item.character}
                </div>
              )}
              <p className="text-md font-normal text-gray-900 dark:text-white">
                {item.text}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
