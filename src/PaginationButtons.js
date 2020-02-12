import React from "react";

const PaginationButtons = props => {
  const getPageNumber = () => {
    if (props.pageCount < 4) {
      return [...Array(props.pageCount + 1).keys()].slice(1);
    } else if (props.currentPage <= 4) {
      return [1, 2, 3, 4, 5];
    } else if (props.currentPage > props.pageCount - 4) {
      return [...Array(5).keys()].reverse().map(v => props.pageCount - v);
    } else {
      return [props.currentPage - 1, props.currentPage, props.currentPage + 1];
    }
  };

  const current = props.currentPage;
  const pageCount = props.pageCount;
  const navigate = props.navigate;
  return (
    <>
      <button onClick={() => navigate(current - 1)}
              disabled={current === 1}
              className="btn btn-secondary mx-1">
        Previous
      </button>
      {current > 4 && (
        <>
          <button className="btn btn-secondary mx-1"
                  onClick={() => navigate(1)}>
            1
          </button>
          <span className="h4">...</span>
        </>
      )}
      {getPageNumber().map(num => (
        <button className={`btn mx-1 
        ${num === current ? "btn-primary" : "btn-secondary"}`}
                onClick={() => navigate(num)}
                key={num}>
          {num}
        </button>
      ))}
      {current <= pageCount - 4 && (
        <>
          <span className="h4">...</span>
          <button className="btn btn-secondary mx-1"
                  onClick={() => navigate(pageCount)}>
            {pageCount}
          </button>
        </>
      )}
      <button onClick={() => navigate(current + 1)}
              disabled={current === pageCount}
              className="btn btn-secondary mx-1">
        Next
      </button>
    </>
  );
};

export default PaginationButtons;
