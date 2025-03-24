import { useEffect, useRef } from "react";

const Counter = ({ value, suffix }) => {
    const numberRef = useRef(null);

    const updateCount = (el) => {
        if (!el) return;
        let initialValue = 0;
        const increment = Math.ceil(value / 100);

        el.innerText = `+0 ${suffix}`;

        const increaseCount = setInterval(() => {
            initialValue += increment;
            if (initialValue >= value) {
                el.innerText = `+${value} ${suffix}`;
                clearInterval(increaseCount);
            } else {
                el.innerText = `+${initialValue} ${suffix}`;
            }
        }, 30);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        updateCount(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (numberRef.current) observer.observe(numberRef.current);

        return () => observer.disconnect();
    }, []);

    return <h1 ref={numberRef} className="number">+0 {suffix}</h1>;
};

export default Counter;
