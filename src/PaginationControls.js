import React from "react";
import PropTypes from "prop-types";
import PaginationButtons from "./PaginationButtons";

const PaginationControls = props => {
  const pageSizes = props.sizes || [5, 10, 25, 100];
  const sortKeys = props.keys || ["Name", "Price"];

  const handlePageSizeChange = ev => {
    props.setPageSize(ev.target.value);
  };

  const handleSortPropertyChange = ev => {
    props.setSortProperty(ev.target.value);
  };

  return (
    <div className="m-2">
      <div className="text-center m-1">
        <PaginationButtons
          currentPage={props.currentPage}
          pageCount={props.pageCount}
          navigate={props.navigateToPage}
        />
      </div>
      <div className="form-inline justify-content-center">
        <select className="form-control"
                onChange={handlePageSizeChange}
                value={props.pageSize || pageSizes[0]}>
          {pageSizes.map(s => (
            <option value={s} key={s}> {s} pages </option>
          ))}
        </select>
        <select className="form-control"
                onChange={handleSortPropertyChange}
                value={props.sortKey || sortKeys[0]}>
          {sortKeys.map(k => (
            <option value={k.toLowerCase()} key={k}> Sort by {k} </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default PaginationControls;

PaginationControls.propTypes = {
  sizes: PropTypes.array,
  keys: PropTypes.array,
  setPageSize: PropTypes.func,
  setSortProperty: PropTypes.func,
  currentPage: PropTypes.number,
  pageCount: PropTypes.number,
  navigateToPage: PropTypes.func,
  pageSize: PropTypes.array,
  sortKey: PropTypes.array
};
