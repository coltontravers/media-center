// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export const debounce = <F extends (...args: any[]) => any>(
    func: F,
    waitFor: number
) => {
    let timeout: number;

    return (...args: Parameters<F>): Promise<ReturnType<F>> =>
        new Promise((resolve) => {
            if (timeout) {
                clearTimeout(timeout);
            }

            timeout = setTimeout(() => resolve(func(...args)), waitFor);
        });
};

export default debounce;
