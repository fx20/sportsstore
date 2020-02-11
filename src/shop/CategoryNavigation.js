import React from "react";
import ToggleLink from "../ToggleLink";
import PropTypes from 'prop-types';

const CategoryNavigation = props => {
  return (
    <>
      <ToggleLink to={props.baseUrl} exact={true}>
        All
      </ToggleLink>
      {props.categories &&
        props.categories.map(cat => (
          <ToggleLink key={cat} to={`${props.baseUrl}/${cat.toLowerCase()}`}>
            {cat}
          </ToggleLink>
        ))}
    </>
  );
};

export default CategoryNavigation;

CategoryNavigation.propTypes = {
  baseUrl: PropTypes.string,
  categories: PropTypes.array
}