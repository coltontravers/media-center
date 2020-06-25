import React, {
    FunctionComponent,
    useRef,
    useState,
    useLayoutEffect
} from "react";
import { Spinner } from "@styled-icons/fa-solid";
import ButtonTypes, { defaultProps } from "./buttonTypes";
import { StyledButton } from "./Button.styled";

const generateButtonChildren = ({
    isLoading,
    icon: Icon,
    iconPlacement,
    children
}: ButtonTypes) => {
    if (isLoading) {
        return <Spinner />;
    }

    if (Icon && iconPlacement === "left") {
        return (
            <>
                {Icon}
                {children && <span>{children}</span>}
            </>
        );
    }

    return (
        <>
            {children && <span>{children}</span>}
            {Icon}
        </>
    );
};

export const Button: FunctionComponent<ButtonTypes> = ({
    isLoading,
    disabled,
    round,
    icon,
    iconPlacement,
    children,
    ...restProps
}) => {
    const itemRef = useRef<HTMLButtonElement | null>(null);
    const [itemWidth, setItemWidth] = useState<string>("0");

    // We set the item width so if the button goes into a loading state, then it will retain the same width.
    useLayoutEffect(() => {
        if (itemRef.current) {
            setItemWidth(global.window.getComputedStyle(itemRef.current).width);
        }
    });

    return (
        <StyledButton
            {...restProps}
            disabled={disabled || isLoading}
            ref={itemRef}
            minWidth={isLoading && itemWidth}
            round={round}
        >
            {generateButtonChildren({
                isLoading,
                icon,
                iconPlacement,
                children
            })}
        </StyledButton>
    );
};

Button.defaultProps = defaultProps;

export default Button;
