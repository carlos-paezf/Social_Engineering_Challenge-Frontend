import { useEffect, useRef, type FC } from "react";

interface ScrollSentinelProps {
    onVisible: () => void;
}

/**
 * The ScrollSentinel component in TypeScript React uses IntersectionObserver to trigger a callback
 * when the component becomes visible in the viewport.
 * @param  - The `ScrollSentinel` component is a functional component that takes a prop `onVisible`
 * which is a function to be called when the sentinel element becomes visible in the viewport.
 * @returns The `ScrollSentinel` component is being returned. It is a functional component that uses
 * the `IntersectionObserver` API to detect when the component is visible in the viewport. When the
 * component is intersecting with the viewport, the `onVisible` callback function is called. The
 * component returns a `div` element with a reference (`ref`) attached to it and a class name of "h-
 */
export const ScrollSentinel: FC<ScrollSentinelProps> = ( { onVisible } ) => {
    const ref = useRef<HTMLDivElement | null>( null );

    useEffect( () => {
        const observer = new IntersectionObserver(
            ( [ entry ] ) => {
                if ( entry.isIntersecting ) onVisible();
            },
            {
                rootMargin: "100px"
            }
        );

        if ( ref.current ) observer.observe( ref.current );
        return () => observer.disconnect();
    }, [ onVisible ] );

    return <div ref={ ref } className="h-1 w-full" />;
};