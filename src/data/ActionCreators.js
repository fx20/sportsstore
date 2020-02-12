import { ActionTypes } from "./Types";
import RestDataSource from "../data/rest/RestDataSource";

const loadData = (dataType, params) => ({
  type: ActionTypes.DATA_LOAD,
  payload: RestDataSource(dataType, params).then(response => ({
    dataType,
    data: response.data,
    total: Number(response.headers["x-total-count"]),
    params
  }))
});

export const setPageSize = newSize => ({
  type: ActionTypes.DATA_SET_PAGE,
  payload: newSize
});

export const setSortProperty = newProp => ({
  type: ActionTypes.DATA_SET_SORT_PROPERTY,
  payload: newProp
});

export default loadData;
