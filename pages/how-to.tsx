import React from 'react';

const MyComponent: React.FC = () => {
  return (
    <a
      href="/arcroom-documentation.pdf"
      target="_blank"
      rel="noreferrer"
      className="border border-gray-700 rounded-lg py-2 px-4 text-gray-400 text-sm mb-5 transition duration-300 ease-in-out hover:text-gray-300"
    >
      Step-by-step guide to create your imagine room{' '}
      <span className="text-blue-600">Documentation</span>
    </a>
  );
};

export default MyComponent;
