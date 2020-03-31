import React, { Component } from 'react';
import { node, func } from 'prop-types';
import { connect } from 'react-redux';
import ErrorPage from '../ErrorPage/ErrorPage';
import { setInternalErrorAction } from '../../redux/actions/errorActions';

class ErrorBoundary extends Component {
    state = {
        hasError: false
    };

    static getDerivedStateFromError = () => {
        return { hasError: true };
    };

    componentDidCatch = ({ message }, { componentStack }) => {
        this.props.setInternalError({
            message,
            componentStack
        });
    };

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        return hasError ? <ErrorPage /> : children;
    }
}

ErrorBoundary.propTypes = {
    children: node,
    setInternalError: func
};

ErrorBoundary.defaultProps = {
    children: null,
    setInternalError: () => {}
};

const mapDispatchToProps = {
    setInternalError: setInternalErrorAction
};

export const Unwrapped = ErrorBoundary;
export default connect(null, mapDispatchToProps)(ErrorBoundary);