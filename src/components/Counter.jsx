import { useEffect, useRef, useState } from "react";

export default function Counter({ target, duration = 2500, suffix = "+" }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 5);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const startTime = performance.now();

                    const animate = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const easedProgress = easeOutCubic(progress);
                        const value = Math.floor(easedProgress * target);

                        setCount(value);

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(target);
                        }
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.4 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target, duration]);

    return (
        <span ref={ref} className="text-6xl font-bold text-white">
            {count.toLocaleString()}{suffix}
        </span>
    );
}