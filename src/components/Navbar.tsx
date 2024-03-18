// components/Navbar.js
import React from 'react';

const Navbar:React.FC = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Query the blockchain like a database.</h2>
        <p className="text-lg mb-8">The Graph is an indexing protocol for querying networks like Ethereum and IPFS. Anyone can build and publish open APIs, called subgraphs, making data easily accessible.</p>
        <a href="#" className="btn bg-gray-800 text-white py-2 px-4 rounded-lg">Get Started</a>
      </div>
    </section>
  );
}

export default Navbar;
