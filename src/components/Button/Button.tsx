import React, {
    FunctionComponent,
    useRef,
    useState,
    useLayoutEffect
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import ButtonTypes, { defaultProps } from "./buttonTypes";
import { StyledButton } from "./Button.styled";

export const Button: FunctionComponent<ButtonTypes> = ({
    isLoading,
    disabled,
    round,
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
            {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : children}
        </StyledButton>
    );
};

Button.defaultProps = defaultProps;

export default Button;
