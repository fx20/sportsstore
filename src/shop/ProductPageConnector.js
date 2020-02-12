import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setPageSize, setSortProperty } from "../data/ActionCreators";

const mapStateToProps = dataStore => dataStore;
const mapDispatchToProps = { setPageSize, setSortProperty };

const margeProps = (dataStore, actionCreators, router) => ({
  ...dataStore,
  ...router,
  ...actionCreators,
  currentPage: Number(router.match.params.page),
  pageCount: Math.ceil(
    (dataStore.products_total | dataStore.pageSize || 5) /
      (dataStore.pageSize || 5)
  ),
  navigateToPage: page =>
    router.history.push(
      `/shop/products/${router.match.params.category}/${page}`
    )
});

const ProductPageConnector = PageComponent =>
  withRouter(
    connect(mapStateToProps, mapDispatchToProps, margeProps),
    PageComponent
  );

export default ProductPageConnector;