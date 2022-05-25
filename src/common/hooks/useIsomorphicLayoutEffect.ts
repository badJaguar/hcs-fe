import { useEffect, useLayoutEffect } from "react";

/**
 * Use always if you want to use useLayoutEffect in the next app.
 */
export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
