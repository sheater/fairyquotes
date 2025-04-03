"use client";

import React from "react";
import Link from "next/link";
import cx from "classnames";
import { useParams } from "next/navigation";

import { quotes, IQuoteDialog } from "@quote-lib/main";

function QuoteDialogPreview({
  id,
  dialog,
}: {
  id: string;
  dialog: IQuoteDialog;
}) {
  const params = useParams();
  const currentId = params.id as string;
  const firstItem = dialog.items[0];

  return (
    <Link
      href={`/quote/${id}`}
      key={id}
      className={cx(
        "block max-w-sm p-4 border  rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 mb-4",
        {
          "bg-gray-100 dark:bg-gray-700": currentId === id,
          "bg-white  border-gray-200 dark:bg-gray-800 dark:border-gray-700":
            currentId !== id,
        },
      )}
    >
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {dialog.show}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 truncate text-ellipsis">
        <strong>{firstItem.character} </strong>
        {firstItem.text}
      </p>
    </Link>
  );
}

export default function QuoteNav() {
  return (
    <React.Fragment>
      {Object.entries(quotes).map(([id, dialog]) => (
        <QuoteDialogPreview key={id} id={id} dialog={dialog} />
      ))}
    </React.Fragment>
  );
}
