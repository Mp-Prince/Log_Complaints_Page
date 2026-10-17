import React, { useEffect, useState } from 'react';

const ViewStatus = () => {
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        // Fetch complaints data (replace with your data source)
        fetch('api/complaints')  // Replace with your API endpoint
            .then(response => response.json())
            .then(data => setComplaints(data))
            .catch(error => console.error('Error fetching complaints:', error));
    }, []);

    return (
        <div className='complaints-list'>
            <h2>Complaints</h2>
            <ul>
                {complaints.map((complaint, index) => (
                    <li key={index}>{complaint.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default ViewStatus;
