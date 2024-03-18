// components/MainContent.js
import React from 'react';

const MainContent:React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-8">Key Features</h2>
        <div className="flex flex-wrap justify-center">
          <div className="feature-card mx-4">
            <img src="feature1.png" alt="Feature 1" className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Decentralized</h3>
            <p>Run queries and get data directly from the blockchain or decentralized storage.</p>
          </div>
          <div className="feature-card mx-4">
            <img src="feature2.png" alt="Feature 2" className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure</h3>
            <p>All queries are verified on-chain and data is authenticated and tamper-proof.</p>
          </div>
          <div className="feature-card mx-4">
            <img src="feature3.png" alt="Feature 3" className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Open</h3>
            <p>Anyone can build and publish subgraphs, making data more accessible and transparent.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainContent;
