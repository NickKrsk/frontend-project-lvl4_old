import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import routers from '../routes';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;

    return (
      <>
      <div id="messages-box" className="chat-messages overflow-auto mb-3"></div>
      <div>
          <b>dgdfgfg</b>
          ": "
          "test"
      </div>
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
            setSubmitting(false);
          }, 1000);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="message" />
            <ErrorMessage name="text" component="div" />
            <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      </div>
      </>
    );

    /*return(   
      <div id="messages-box" className="chat-messages overflow-auto mb-3"></div>
   //   <input type="text" size="40" />
    );*/

    return (
      <>
      <div id="messages-box" className="chat-messages overflow-auto mb-3"></div>
        <div>
          <b>dgdfgfg</b>
          ": "
          "test"
        </div>
      <div className="mt-auto">
      <div className="form-group"></div>
        <form  className="todo-form form-inline mx-3">          
          <input
            type="text"
            //onChange={this.handleChangeTask}
            //value={newTaskText}
            required
            className="form-control mr-3"
            placeholder="message"
          />
          <button type="submit" className="btn btn-primary">add</button>
        </form>     
      </div> 
      </>
    );

  }
}