import { Button } from "@material-ui/core";
import styled from "styled-components";

export default styled(Button)`
    &.btn--green {
        background-color: ${(props) => props.theme.green};
        color: ${(props) => props.theme.white};

        &:active,
        &:hover {
            background-color: ${(props) => props.theme.green};
            backdrop-filter: brightness(120%);
        }
    }

    &.btn--orange {
        background-color: ${(props) => props.theme.orange};
        color: ${(props) => props.theme.white};

        &:active,
        &:hover {
            background-color: ${(props) => props.theme.orange};
            backdrop-filter: brightness(120%);
        }
    }
`;
