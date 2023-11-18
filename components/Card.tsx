import React from "react";

interface CardProps {
  title: string;
  content: string;
  buttonText?: string;
  buttonOnClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  buttonText,
  buttonOnClick,
}) => {
  return (
    <div className="max-w-sm p-6 bg-zinc-900 border-zinc-800 border rounded-lg shadow basis-1/3">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {content}
      </p>
      {!!buttonText && !!buttonOnClick && (
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {buttonText}
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      )}
    </div>
  );
};

export default Card;