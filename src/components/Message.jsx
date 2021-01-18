import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import routers from '../routes';
import axios from 'axios';
import { UserContext } from '../user-context';

export default class Chat extends React.Component {
  static contextType = UserContext;
  
  render() {
    const { messages } = this.props;
    const username = this.context;

    console.log('messages');
    console.log(messages);

    return (     
      <div>
      <Formik
        initialValues={{ message: 'you message' }}
        validate={values => {
          const errors = {};
          if (!values.message) {
            errors.message = 'Required';
          } 
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            //alert(JSON.stringify(values, null, 2));
            const channelId = 1;
            const { message } = values;
            const path = routers.channelMessagesPath(1); 
            console.log(message);
            console.log(path);

            const messageOb = {
              body: message,
              channelId: 1,
              nickname: username,
            };

            const data = {
              type: 'messages',
              attributes: messageOb,
            };
        
            console.log(data);

            axios.post(path, {
              data,
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });

            setSubmitting(false);
          }, 1000);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>You: <b>{username}</b></div>
            <Field type="text" name="message" />
            <ErrorMessage name="text" component="div" />
            <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      </div>  
    );
  }
}