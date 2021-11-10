import { useEffect, useState } from 'react';

const useDestinations = () => {
    const [destinations, setDestinations] = useState([]);
    useEffect(() => {
        fetch('https://wicked-nightmare-49756.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data));
    }, []);
    return { destinations };
};

export default useDestinations;