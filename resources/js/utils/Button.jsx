import { Button } from "@material-ui/core";
import styled from "styled-components";

export default styled(Button)`
    &.btn--green {
        background-color: ${(props) => props.theme.green};
        color: white;
    }
`;
