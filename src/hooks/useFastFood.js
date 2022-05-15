import { useEffect, useState } from "react";


const useFastFood = () => {
    const [fastFoods, setFastFoods] = useState([]);

    useEffect(() => {
        const url = "fast-food.json";
        fetch(url)
            .then(res => res.json())
            .then(data => setFastFoods(data))
    }, []);

    return [fastFoods, setFastFoods];
};

export default useFastFood;