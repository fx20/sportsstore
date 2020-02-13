import {ActionTypes, DataTypes} from "./Types";
import RestDataSource from "../data/rest/RestDataSource";

export const loadData = (dataType, params) => ({
  type: ActionTypes.DATA_LOAD,
  payload: RestDataSource.GetData(dataType, params).then(response => ({
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

export const placeholder = (orders) => ({
  type: ActionTypes.DATA_STORE,
  payload: RestDataSource.StoreData(DataTypes.ORDERS, orders).then(response => ({
    dataType: DataTypes.ORDERS,
    data: response.data
  }))
});