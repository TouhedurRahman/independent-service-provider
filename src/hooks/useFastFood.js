import { useEffect, useState } from "react";


const useFastFood = () => {
    const [fastFoods, setfastFoods] = useState([]);

    useEffect(() => {
        const url = "fast-food.json";
        fetch(url)
            .then(res => res.json())
            .then(data => setfastFoods(data))
    }, []);

    return [fastFoods, setfastFoods];
};

export default useFastFood;