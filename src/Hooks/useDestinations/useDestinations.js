import { useEffect, useState } from 'react';

const useDestinations = () => {
    const [destinations, setDestinations] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-stream-28542.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setDestinations(data));
    }, []);
    return { destinations };
};

export default useDestinations;