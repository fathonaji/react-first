import React from "react";
import PropTypes from "prop-types"

const PropsChecker = ({name,title}) => {
    return <h1>{name}</h1>
}

PropsChecker.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string.isRequired
}

export default PropsChecker