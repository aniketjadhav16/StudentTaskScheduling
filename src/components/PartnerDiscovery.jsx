import React, { useState } from 'react';

const PartnerDiscovery = () => {
  const [partners, setPartners] = useState([]);

  // Dummy data for demonstration
  const dummyPartners = [
    { id: 1, name: 'John Doe', location: 'New York', interests: ['Mathematics', 'Physics'] },
    { id: 2, name: 'Jane Smith', location: 'Los Angeles', interests: ['Biology', 'Chemistry'] },
    { id: 3, name: 'Alice Johnson', location: 'Chicago', interests: ['Computer Science'] },
  ];

  useState(() => {
    // Set initial partners
    setPartners(dummyPartners);
  }, []);

  return (
    <div>
      <h2>Partner Discovery</h2>
      <ul>
        {partners.map((partner) => (
          <li key={partner.id}>
            <strong>{partner.name}</strong> - {partner.location}
            <ul>
              {partner.interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PartnerDiscovery;
