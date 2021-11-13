import { useEffect } from 'react';
import { useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-stream-28542.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return { services, setServices };
};

export default useServices;