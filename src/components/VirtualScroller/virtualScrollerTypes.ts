export default interface VirtualScrollerTypes {
    // TODO: Update with however items will be passed in
    items?: [];
    query?: () => void;
    // eslint-disable-next-line @typescript-eslint/ban-types
    RowRenderer: (value: unknown, style: object, index: number) => void;
}

export const defaultProps: VirtualScrollerTypes = {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    RowRenderer: () => {}
};
