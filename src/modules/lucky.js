import axios from 'axios'
import Ultilities from '../Ultilities/global'
import {SERVER_ERROR} from './server'
export const LUCKY_REQUEST = 'lucky/LUCKY_REQUEST'
export const LUCKY_RESPONSE = 'lucky/LUCKY_RESPONSE'
export const LUCKY_ROTATION_DETAIL_RESPONSE = 'lucky/LUCKY_ROTATION_DETAIL_RESPONSE'
export const LUCKY_ROTATION_DETAIL_RESPONSE_USER = 'lucky/LUCKY_ROTATION_DETAIL_RESPONSE_USER'
export const LUCKY_DETAIL_RESPONSE = 'lucky/LUCKY_DETAIL_RESPONSE'
export const LUCKY_RESPONSE_MORE = 'lucky/LUCKY_RESPONSE_MORE'
export const LUCKY_HISTORY_RESPONSE='lucky/LUCKY_HISTORY_RESPONSE'
export const LUCKY_TU_DO='lucky/LUCKY_TU_DO';
export const LUCKY_HISTORY_OPEN_WORD='lucky/LUCKY_HISTORY_OPEN_WORD';
export const LUCKY_VINH_DANH='lucky/LUCKY_VINH_DANH';
export const LUCKY_CODE_BONUS='lucky/LUCKY_CODE_BONUS';
export const LUCKY_COUNT_BONUS='lucky/LUCKY_COUNT_BONUS';
export const LUCKY_LIST_RECEIVE_WORD='lucky/LUCKY_LIST_RECEIVE_WORD';
export const LUCKY_OPEN_ITEM='lucky/LUCKY_OPEN_ITEM';
export const LUCKY_EXCHANGE_ITEM='lucky/LUCKY_EXCHANGE_ITEM';

const initialState = {
	data: [], 
	waiting: false
}

export default (state = initialState, action) => { 
	switch (action.type) {
		case LUCKY_REQUEST:
			return {
				...state,
				waiting: true
			}
		case LUCKY_RESPONSE:
			return {
				...state,
				data: action.data,
				totalRecords: action.totalRecords,
				waiting: false
			}
		case LUCKY_RESPONSE_MORE:
			return {
				...state,
				data: state.data.concat(action.data),
				totalRecords: action.totalRecords,
				waiting: false
			}
		case LUCKY_DETAIL_RESPONSE:
			return {
				...state,
				dataDetail: action.data,
				waiting: false
			}
		case LUCKY_HISTORY_RESPONSE:
			return {
				...state,
				dataHistory: action.data,
				waiting: false
			}
		case LUCKY_ROTATION_DETAIL_RESPONSE:
			return {
				...state,
				dataRotation: action.data,
				waiting: false
			}
		case LUCKY_ROTATION_DETAIL_RESPONSE_USER:
			return {
				...state,
				dataRotationWithUser: action.data,
				waiting: false
			}
		case LUCKY_TU_DO:
			return {
				...state,
				dataTuDo: action.data,
				waiting: false
			}
		case LUCKY_HISTORY_OPEN_WORD:
			return {
				...state,
				dataHistoryOpenWord: action.data,
				waiting: false
			}
		case LUCKY_VINH_DANH:
			return {
				...state,
				dataVinhDanh: action.data,
				waiting: false
			}
		case LUCKY_CODE_BONUS:
			return {
				...state,
				dataCodeBonus: action.data,
				waiting: false
			}
		case LUCKY_COUNT_BONUS:
			return {
				...state,
				dataCountBonus: action.data,
				waiting: false
			}
		case LUCKY_LIST_RECEIVE_WORD:
			return {
				...state,
				dataListReceiveWord: action.data,
				waiting: false
			}
		case LUCKY_OPEN_ITEM:
			return {
				...state,
				dataOpenItem: action.data,
				waiting: false
			}
		case LUCKY_EXCHANGE_ITEM:
			return {
				...state,
				dataExchangeItem: action.data,
				waiting: false
			}
		default:
			return state
	}
}

export const getData = (limit, offset) => {
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "lucky-spin/get?limit=" + limit + "&offset=" + offset;
		return axios.get(url).then(function (response) {
			dispatch({
				type: LUCKY_RESPONSE,
				data: response.data.data,
				totalRecords: response.data.totalRecords
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}

export const getMoreData = (limit, offset) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "lucky-spin/get?limit=" + limit + "&offset=" + offset;
		return axios.get(url, header).then(function (response) {
			dispatch({
				type: LUCKY_RESPONSE_MORE,
				data: response.data,
				totalRecords: response.data.totalRecords
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}

export const getDetailData = (id) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			// "Authorization": "bearer " + token,
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "lucky-spin/detail?lucky_spin_id=" + id;
		return axios.get(url, header).then(function (response) {
			dispatch({
				type: LUCKY_DETAIL_RESPONSE,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}




export const history = (id, type) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			// "Authorization": "bearer " + token,
		}
	}

	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "lucky-spin-history?lucky_spin_id="+id+'&type_gift='+type;
		return axios.get(url, header).then(function (response) {
			console.log(response.data)
			dispatch({
				type: LUCKY_HISTORY_RESPONSE,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}

export const getCountBonus = () => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			// "Authorization": "bearer " + token,
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "anonymous/lucky-spin-history/gift-quantity-exist?lucky_spin_id=" + 120;
		return axios.get(url, header).then(function (response) {
			dispatch({
				type: LUCKY_COUNT_BONUS,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}

export const getRotationDetailData = (id) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			// "Authorization": "bearer " + token,
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "anonymous/lucky-spin/detail?lucky_spin_id=" + id;
		return axios.get(url, header).then(function (response) {
			dispatch({
				type: LUCKY_ROTATION_DETAIL_RESPONSE,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}

export const getRotationDetailDataUser = (token, id) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": "bearer " + token,
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "lucky-spin/detail?lucky_spin_id=" + id;
		return axios.get(url, header).then(function (response) {
			dispatch({
				type: LUCKY_ROTATION_DETAIL_RESPONSE_USER,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}

export const getReceiveWord = (token, id, limit, offset) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": "bearer " + token,
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "lucky-spin-history/buy-turn?lucky_spin_id=" + id + "&limit=" + limit + "&offset=" + offset;
		return axios.get(url, header).then(function (response) {
			dispatch({
				type: LUCKY_LIST_RECEIVE_WORD,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}


export const getTuDo = (token, id, limit, offset) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": "bearer " + token,
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "lucky-spin-history/tudo?lucky_spin_id=" + id + "&limit=" + limit + "&offset=" + offset;
		return axios.get(url, header).then(function (response) {
			dispatch({
				type: LUCKY_TU_DO,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}


export const getOpenWord = (token, id, limit, offset) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": "bearer " + token,
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "lucky-spin-history/open?lucky_spin_id=" + id + "&limit=" + limit + "&offset=" + offset;
		return axios.get(url, header).then(function (response) {
			dispatch({
				type: LUCKY_HISTORY_OPEN_WORD,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}


export const getVinhDanh = (id, limit, offset) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			// "Authorization": "bearer " + token,
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "anonymous/lucky-spin-history/all?lucky_spin_id=" + id + "&limit=" + limit + "&offset=" + offset;
		return axios.get(url, header).then(function (response) {
			dispatch({
				type: LUCKY_VINH_DANH,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}

export const getCodeBonus = (token, id, type) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": "bearer " + token,
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "lucky-spin-history?lucky_spin_id=" + id + '&type_gift='+type +"&limit=0";
		return axios.get(url, header).then(function (response) {
			dispatch({
				type: LUCKY_CODE_BONUS,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}

export const openItem = (id, turn_number, token) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": "bearer " + token,
		}
	}
	var body = {
		lucky_spin_id: +id,
		turn_number: turn_number,
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "lucky-spin/open-item";
		return axios.post(url, body, header).then(function (response) {
			console.log(response.data)
			dispatch({
				type: LUCKY_OPEN_ITEM,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}

export const exchangeItem = (id, gift_id,  turn_number, token) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": "bearer " + token,
		}
	}
	var body = {
		lucky_spin_id: +id,
		lucky_spin_gift_id: gift_id,
		turn_number: turn_number,
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "lucky-spin/exchange-item";
		return axios.post(url, body, header).then(function (response) {
			console.log(response.data)
			dispatch({
				type: LUCKY_EXCHANGE_ITEM,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}