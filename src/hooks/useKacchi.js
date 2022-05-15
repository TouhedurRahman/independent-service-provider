import { useEffect, useState } from 'react';

const useKacchi = () => {
    const [kacchis, setKacchis] = useState([]);

    useEffect(() => {
        const url = "kacchi.json";
        fetch(url)
            .then(res => res.json())
            .then(data => setKacchis(data))
    }, []);

    return [kacchis, setKacchis];
}

export default useKacchi;