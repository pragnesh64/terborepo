import { useEffect, useMemo, useState } from "react";

export type BreakpointInfo = {
  width: number;
  isDesktop: boolean; // >= 1000px
  isTablet: boolean; // 768px - 999px
  isMobile: boolean; // < 768px
};

export const useBreakpoint = (): BreakpointInfo => {
  const getWidth = () =>
    typeof window === "undefined" ? 0 : window.innerWidth;
  const [width, setWidth] = useState<number>(getWidth);

  useEffect(() => {
    const onResize = () => setWidth(getWidth());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return useMemo(
    () => ({
      width,
      isDesktop: width >= 1000,
      isTablet: width >= 768 && width < 1000,
      isMobile: width < 768,
    }),
    [width]
  );
};
