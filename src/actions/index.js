import { createAction } from 'redux-actions';
import axios from 'axios';
import routes from '../routes';


export const sendMessageRequest = createAction('MESSAGE_SEND_REQUEST');
export const sendMessageSuccess = createAction('MESSAGE_SEND_SUCCESS');
export const sendMessageFailure = createAction('MESSAGE_SEND_FAILURE');

export const sendMessage = ({ id, data }) => async (dispatch) => {
  dispatch(sendMessageRequest());
  try {
    const path = routes.channelMessagesPath(id);
    await axios.post(path, { data: { attributes: data } });
    dispatch(sendMessageSuccess());
  } catch (e) {
    dispatch(sendMessageFailure());
    throw e;
  }
};

