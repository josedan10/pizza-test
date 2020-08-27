import { Button } from "@material-ui/core";
import styled from "styled-components";

export default styled(Button)`
    && {
        color: ${(props) => props.theme.white};
        font-weight: bold;

        &:active,
        &:hover {
            backdrop-filter: brightness(120%);
        }
    }

    &.btn--green {
        background-color: ${(props) => props.theme.green};

        &:active,
        &:hover {
            background-color: ${(props) => props.theme.green};
        }
    }

    &.btn--orange {
        background-color: ${(props) => props.theme.orange};

        &:active,
        &:hover {
            background-color: ${(props) => props.theme.orange};
        }
    }

    &.btn--red {
        background-color: ${(props) => props.theme.red};

        &:active,
        &:hover {
            background-color: ${(props) => props.theme.red};
        }
    }
`;
