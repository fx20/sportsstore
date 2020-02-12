import { ActionTypes } from "./Types";

const ShopReducer = (storeData, action) => {
  switch (action.type) {
    case ActionTypes.DATA_LOAD:
      return {
        ...storeData,
        [action.payload.dataType]: action.payload.data,
        [`${action.payload.dataType}_total`]: action.payload.total,
        [`${action.payload.dataType}_params`]: action.payload.params
      };
    case ActionTypes.DATA_SET_PAGE:
      return { ...storeData, pageSize: action.payload };
    case ActionTypes.DATA_SET_SORT_PROPERTY:
      return { ...storeData, sortKey: action.payload };
    default:
      return storeData || {};
  }
};

export default ShopReducer;
