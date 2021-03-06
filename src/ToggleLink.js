import React from "react";
import {Link, Route} from "react-router-dom";
import PropTypes from 'prop-types';

const ToggleLink = (props) => {
  return <Route path={props.to} exact={props.exact} children={routeProps => {
    const baseClasses = props.className || "m-2 btn btn-block";
    const activeClass = props.activeClass || "btn-primary";
    const inActiveClass = props.inActiveClass || "btn-secondary";

    const combinedClass = `${baseClasses} ${routeProps.match ? activeClass : inActiveClass}`;

    return <Link to={props.to} className={combinedClass}>
      {props.children}
    </Link>
  }
  }/>
};

export default ToggleLink;

ToggleLink.propTypes = {
  to: PropTypes.string,
  exact: PropTypes.bool,
  children: PropTypes.object,
  className: PropTypes.string,
  activeClass: PropTypes.string,
  inActiveClass: PropTypes.string
};
