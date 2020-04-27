import React from "react";
import VirtualScroller from "../../components/VirtualScroller/VirtualScroller";
import Poster from "../../components/Poster/Poster";

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

export const Library = () => {
    return (
        <div>
            <React.Suspense fallback={<h1>Loading...</h1>}>
                <VirtualScroller
                    items={items}
                    query={() => {}}
                    RowRenderer={RowRenderer}
                />
            </React.Suspense>
        </div>
    );
};

export default Library;
