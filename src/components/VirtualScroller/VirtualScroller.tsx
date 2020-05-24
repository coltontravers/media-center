// // This file needs to be heavily refactored.
// import React, {
//     FunctionComponent,
//     useState,
//     useEffect,
//     Dispatch,
//     SetStateAction
// } from "react";
// import { FixedSizeList as List } from "react-window";
// import InfiniteLoader from "react-window-infinite-loader";
// import AutoSizer from "react-virtualized-auto-sizer";
// import { useQuery, QueryResultBase } from "react-query";
// import debounce from "../../helpers/debounce";
// import VirtualScrollerTypes, { defaultProps } from "./virtualScrollerTypes";

// const rowLimit = 40;

// const isItemLoaded = (index: number, listItems: []) => !!listItems[index];

// const loadMoreItems = debounce(
//     (
//         startIndex: number,
//         setOffset: (value: React.SetStateAction<number>) => void
//     ) => {
//         setOffset(startIndex);
//     },
//     100
// );

// interface Idata {
//     paging: {
//         startIndex: number;
//         endIndex: number;
//     };
//     data: [];
// }

// type IsFetchingType = () => void;

// interface IQuery {
//     data: Idata;
//     isFetching: IsFetchingType;
// }

// interface IListItems {
//     listItems: [] | undefined;
//     setListItems: Dispatch<SetStateAction<[] | undefined>>;
// }

// interface IPaging {
//     paging: { items: number };
//     setPaging: Dispatch<
//         SetStateAction<{
//             startIndex: number;
//             endIndex: number;
//         }>
//     >;
// }

// export const VirtualScroller: FunctionComponent<VirtualScrollerTypes> = ({
//     items,
//     query,
//     RowRenderer
// }) => {
//     const [listItems, setListItems]: [
//         IListItems["listItems"],
//         IListItems["setListItems"]
//     ] = useState<[] | undefined>(items);
//     const [offset, setOffset] = useState<number>(0);
//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     // @ts-ignore
//     const [paging, setPaging]: [
//         IPaging["paging"],
//         IPaging["setPaging"]
//     ] = useState({ items: 0 });
//     const { data, isFetching } = useQuery(
//         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//         // @ts-ignore
//         [{ offset, limit: rowLimit }],
//         query,
//         {
//             suspense: false
//         }
//     );

//     useEffect(() => {
//         if (data && !isFetching) {
//             const { startIndex, endIndex }: Idata["paging"] = data.paging;

//             if (listItems !== undefined && listItems.length) {
//                 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//                 // @ts-ignore
//                 const newListItems: [] = [...listItems];
//                 let dataIndex = 0;

//                 for (
//                     let offsetIndex = startIndex;
//                     offsetIndex <= endIndex;
//                     offsetIndex++
//                 ) {
//                     newListItems[offsetIndex] = data.data[dataIndex];

//                     dataIndex++;
//                 }

//                 setListItems(newListItems);
//                 setPaging(data.paging);
//             }
//         }
//     }, [data, isFetching]);

//     if (!listItems?.length) {
//         return null;
//     }

//     return <> </>;

//     // console.log({ items });

//     // return (
//     //     <List height={200} itemCount={items?.length} itemSize={75} width={1400}>
//     //         {({ index, style }): { index: number; style: unknown } =>
//     //             RowRenderer(listItems[index], style, index)
//     //         }
//     //     </List>
//     // );

//     // return (
//     //     <AutoSizer>
//     //         {({ height, width }) => (
//     //             <InfiniteLoader
//     //                 isItemLoaded={(index) => isItemLoaded(index, listItems)}
//     //                 loadMoreItems={(startIndex) =>
//     //                     loadMoreItems(startIndex, setOffset)
//     //                 }
//     //                 itemCount={paging.items}
//     //             >
//     //                 {({ onItemsRendered, ref }) => (
//     //                     <List
//     //                         height={height}
//     //                         itemCount={paging.items}
//     //                         itemSize={75}
//     //                         width={width}
//     //                         onItemsRendered={onItemsRendered}
//     //                         ref={ref}
//     //                     >
//     //                         {({ index, style }) =>
//     //                             RowRenderer(listItems[index], style, index)
//     //                         }
//     //                     </List>
//     //                 )}
//     //             </InfiniteLoader>
//     //         )}
//     //     </AutoSizer>
//     // );
// };

// VirtualScroller.defaultProps = defaultProps;

// export default VirtualScroller;
