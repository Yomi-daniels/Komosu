'use client';

import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full">
        <div className="flex justify-center mb-4 text-red-500">
          <AlertTriangle size={48} />
        </div>
        <h1 className="text-3xl font-bold mb-2">Oops! Something went wrong.</h1>
        <p className="text-gray-600 mb-6">An unexpected error occurred. Please try again later or return to the homepage.</p>
        <Link
          href="/"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
