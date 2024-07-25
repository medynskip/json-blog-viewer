"use client";

import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = (options?: object ) => {
  const [intersecting, setIntersecting] = useState(false);
  const target = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const divRef = target.current;

    const observer = new IntersectionObserver((entries) => {
      setIntersecting(entries[0].isIntersecting);
    }, options);

    if (divRef) observer.observe(divRef);

    return () => {
      if (divRef) observer.disconnect();
    };
  }, [options]);

  return { intersecting, target };
};
