import { useEffect, useState } from "react";


const useIceCream = () => {
    const [iceCreams, setIceCreams] = useState([]);

    useEffect(() => {
        const url = "ice-cream.json";
        fetch(url)
            .then(res => res.json())
            .then(data => setIceCreams(data))
    }, []);

    return [iceCreams, setIceCreams];
};

export default useIceCream;