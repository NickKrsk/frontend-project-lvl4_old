import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import _ from 'lodash';
import * as actions from '../actions';

const defaultChannelId = 1;

const messages = handleActions({
  [actions.updateMessages](state, { payload: { message } }) {
    const { id } = message;
    const { byId, allIds } = state;
    return {
      byId: { ...byId, [id]: message },
      allIds: [...allIds, id],
    };
  },
}, { byId: {}, allIds: [] });

const sendMessageState = handleActions({
  [actions.sendMessageRequest]() {
    return 'requested';
  },
  [actions.sendMessageSuccess]() {
    return 'succeed';
  },
  [actions.sendMessageFailure]() {
    return 'failed';
  },
}, 'none');


export default combineReducers({
  messages,
  sendMessageState,
  form: formReducer,
});