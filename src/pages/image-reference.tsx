import React from 'react';
import { images } from '../data/images';
import Link from 'next/link';

const ImageReference: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Link href="/">
        <a className="text-blue-400 hover:text-blue-300 mb-8 inline-block">&larr; Back to Portfolio</a>
      </Link>
      <h1 className="text-4xl font-bold mb-8">Image Reference</h1>
      {Object.entries(images).map(([section, sectionImages]) => (
        <div key={section} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 capitalize">{section}</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-800">
                <th className="p-2 text-left">ID</th>
                <th className="p-2 text-left">File Name</th>
                <th className="p-2 text-left">Title</th>
                <th className="p-2 text-left">Path</th>
              </tr>
            </thead>
            <tbody>
              {sectionImages.map((image) => (
                <tr key={image.id} className="border-t border-gray-700">
                  <td className="p-2">{image.id}</td>
                  <td className="p-2">{image.name}</td>
                  <td className="p-2">{image.title}</td>
                  <td className="p-2">{`/images/${section}/${image.name}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ImageReference;