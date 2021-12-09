import useIntersectionObserver from "@react-hook/intersection-observer";
import {useEffect, useRef, useState} from "react";

export const useInter = () => {
    const ref = useRef<HTMLDivElement>(null);
    const {isIntersecting} = useIntersectionObserver(ref, {threshold: 0.1});
    const [intersected, setIntersected] = useState(false);
    useEffect(() => {
        if (isIntersecting) {
            setIntersected(true);
        }
    }, [isIntersecting]);
    return {ref, intersected}
}