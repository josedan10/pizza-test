import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Snackbar } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

// Invoice views
import Step1 from "../components/invoice-step1";

import { cleanError } from "../redux/dispatchers";

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 100px;
    min-height: calc(100vh - 100px);

    .step-container-wrapper {
        width: 85%;
        max-width: 566px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        .step-indicator-wrapper {
            display: flex;
            justify-content: space-around;
            width: 100%;
            max-width: 300px;
            margin-bottom: 50px;

            .step-indicator {
                border-radius: 50%;
                width: 29px;
                height: 29px;
                background-color: ${(props) => props.theme.orange};
                opacity: 0.2;

                &.active {
                    opacity: 1;
                }

                &.success {
                    background-color: ${(props) => props.theme.green};
                    opacity 1;
                }
            }
        }
    }
`;

/**
 * View to confirm the purchase
 *
 * @class InvoiceView
 * @extends {React.Component}
 */
class InvoiceView extends React.Component {
    /**
     * Creates an instance of InvoiceView.
     * @param {*} props
     * @memberof InvoiceView
     */
    constructor(props) {
        super(props);
        this.state = {
            stepsForm: [<Step1 />, 2, 3],
        };

        this.handleCloseAlert = this.handleCloseAlert.bind(this);
    }

    /**
     *
     *
     * @param {Event} event
     * @param {String} reason
     * @return {undefined}
     * @memberof InvoiceView
     */
    handleCloseAlert(event, reason) {
        if (reason === "clickaway") {
            return;
        }

        this.props.cleanError();
    }

    /**
     *
     *
     * @return {React.Component}
     * @memberof InvoiceView
     */
    render() {
        const { activeStep } = this.props;
        return (
            <React.Fragment>
                <StyledContainer className="step-container">
                    <div className="step-container-wrapper">
                        <div className="step-indicator-wrapper">
                            {this.state.stepsForm.map((step, ind) => (
                                <div
                                    key={`step-${ind}`}
                                    className={`step-indicator ${
                                        ind === activeStep
                                            ? "active"
                                            : ind < activeStep && "success"
                                    }`}
                                />
                            ))}
                        </div>
                        {this.state.stepsForm[activeStep]}
                    </div>
                </StyledContainer>

                {/* Alert for invoice events */}
                <Snackbar
                    open={this.props.error !== "" && this.props.error !== null}
                    autoHideDuration={3000}
                    onClose={this.handleCloseAlert}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                >
                    <Alert severity="error" onClose={this.handleCloseAlert}>
                        <AlertTitle>Error</AlertTitle>
                        {this.props.error}
                    </Alert>
                </Snackbar>
            </React.Fragment>
        );
    }
}

InvoiceView.propTypes = {
    activeStep: PropTypes.number,
    error: PropTypes.string,
    cleanError: PropTypes.func,
};

const mapStateToProps = (state) => ({
    activeStep: state.invoice.activeStep,
    error: state.invoice.error,
});

const mapDispatchToProps = (dispatch) => ({
    cleanError: () => dispatch(cleanError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceView);
