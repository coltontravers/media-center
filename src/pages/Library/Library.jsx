import React, { useCallback, useState } from "react";
import VirtualScroller from "../../components/VirtualScroller/VirtualScroller";
import Poster from "../../components/Poster/Poster";
import Grid from "../../components/layout/Grid/Grid";

const RowRenderer = (item, style, index) => {
    let component;

    if (item) {
        component = <Poster {...item} />;
    } else {
        component = `Loading... ${index}`;
    }

    return component;
};

const items = [
    {
        name: "one"
    },
    {
        name: "two"
    }
];

export const mediaData = {
    title: "I Am Legend",
    poster:
        "https://image.tmdb.org/t/p/original/2ibBdwCvmKu0wRiO6Yanlj8tUk9.jpg",
    expandedBackground:
        "https://image.tmdb.org/t/p/original/xHWB9SdYRFV3nw1O0iL6GTedQQY.jpg",
    overview:
        "Robert Neville is a scientist who was unable to stop the spread of the terrible virus that was incurable and man-made. Immune, Neville is now the last human survivor in what is left of New York City and perhaps the world. For three years, Neville has faithfully sent out daily radio messages, desperate to find any other survivors who might be out there. But he is not alone."
};

export const Library = () => {
    // const refElem = useRef(null);

    const [width, setWidth] = useState(0);

    const measuredRef = useCallback((node) => {
        if (node !== null) {
            setWidth(node.getBoundingClientRect().width);
        }
    }, []);

    // console.log({ refElem });

    console.log("elem", width);

    // if (refElem && refElem.current) {
    //     console.log({ refElem, width: refElem.current.clientWidth });
    // }

    return (
        <div>
            <React.Suspense fallback={<h1>Loading...</h1>}>
                {/* <VirtualScroller
                    items={items}
                    query={() => {}}
                    RowRenderer={RowRenderer}
                /> */}
                <div ref={measuredRef}>
                    <Grid
                        columns={`repeat(auto-fit, minmax(auto, ${`calc(${width}/26.5vmin)`}))`}
                        gridGap="2em 0"
                    >
                        <Poster expanded={false} metadata={mediaData} />
                        <Poster expanded={false} metadata={mediaData} />
                        <Poster expanded={false} metadata={mediaData} />
                        <Poster expanded={false} metadata={mediaData} />
                        <Poster expanded={false} metadata={mediaData} />
                        <Poster expanded={false} metadata={mediaData} />
                        <Poster expanded={false} metadata={mediaData} />
                        <Poster expanded={false} metadata={mediaData} />
                        <Poster expanded={false} metadata={mediaData} />
                        <Poster expanded={false} metadata={mediaData} />
                        <Poster expanded={false} metadata={mediaData} />
                        <Poster expanded={false} metadata={mediaData} />
                    </Grid>
                </div>
            </React.Suspense>
        </div>
    );
};

export default Library;
