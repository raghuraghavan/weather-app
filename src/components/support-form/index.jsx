import React from 'react';
import {
  Form,
  Grid,
  Header,
  Message,
  Ref,
  Segment,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
// Custom Styles
import './index.css';
// Helpers
import { returnMessageType, returnValidState, showEmail } from './utilities';

class SupportForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      message: '',
      feedback: {
        email: {
          header: '',
          message: '',
        },
        message: {
          header: '',
          message: '',
        },
      },
      show: {
        email: false,
      },
      valid: {
        email: true,
        message: true,
      },
    };

    this.onShowEmail = this.onShowEmail.bind(this);
    this.onSendEmail = this.onSendEmail.bind(this);
  }

  onChange(event, sField) {
    // enables event to live on inside callback below
    event.persist();

    this.setState(prevState => (
      {
        ...prevState,
        [sField]: event.target.value,
        feedback: {
          ...prevState.feedback,
          [sField]: {
            header: '',
            message: '',
          },
        },
        valid: {
          ...prevState.valid,
          [sField]: true,
        },
      }
    ));
  }

  onSendEmail(event) {
    let returnThis;
    const o = this.state;
    const oCheck = returnValidState(o);

    if (oCheck.valid) {
      returnThis = true;
    } else {
      this.setState(previousState => (
        {
          ...previousState,
          ...oCheck.newState,
        }
      ));

      returnThis = event.preventDefault();
    }

    return returnThis;
  }

  onShowEmail(event) {
    const { show } = this.state;
    event.preventDefault();

    this.setState(previousState => (
      {
        ...previousState,
        show: {
          email: showEmail(show.email),
        },
        feedback: {
          ...previousState.feedback,
          email: {
            header: '',
            message: '',
          },
        },
        valid: {
          ...previousState.valid,
          email: true,
        },
      }
    ));
  }

  render() {
    const sSupportApi = process.env.REACT_APP_SUPPORT_FORM_API;
    const sSupportAccount = process.env.REACT_APP_SUPPORT_ACCOUNT_ADDRESS;
    const sTitle = 'Contact Us';
    const { show, email, message } = this.state;
    const { feedback } = this.state;
    const { valid } = this.state;
    const sFeedbackLabel = returnMessageType(show.email);
    // Props
    const { changeThePage } = this.props;

    return (
      <div>
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header
              as="h1"
              color="orange"
              textAlign="center"
              className="site-title"
            >
              {sTitle}
            </Header>
            <Ref innerRef={this.returnDomNode}>
              <Form
                error
                size="large"
                action={`${sSupportApi}${sSupportAccount}`}
                method="POST"
                onSubmit={this.onSendEmail}
              >
                <Segment stacked align="left">
                  <Form.Button
                    className="close-support-button"
                    circular
                    icon="cancel"
                    color="black"
                    size="mini"
                    onClick={event => changeThePage(event, 'weather')}
                  />
                  {show.email ? (
                    <Grid columns={2} verticalAlign="bottom">
                      <Grid.Row>
                        <Grid.Column width={13}>
                          <Form.Input
                            type="email"
                            name="_replyto"
                            error={!valid.email}
                            fluid
                            label="Return Address"
                            required
                            icon="user"
                            iconPosition="left"
                            placeholder="E-mail address"
                            onChange={event => this.onChange(event, 'email')}
                            value={email}
                          />
                        </Grid.Column>
                        <Grid.Column width={3} align="right">
                          <Form.Button
                            basic
                            icon="hide"
                            onClick={event => this.onShowEmail(event)}
                          />
                        </Grid.Column>
                      </Grid.Row>
                      {!valid.email && (
                        <Grid.Row>
                          <Grid.Column width={16}>
                            <Message
                              error
                              visible
                              header={feedback.email.header}
                              content={feedback.email.message}
                            />
                          </Grid.Column>
                        </Grid.Row>
                      )}
                    </Grid>
                  )
                    : (
                      <Grid columns="1">
                        <Grid.Row>
                          <Grid.Column>
                            <Form.Button
                              basic
                              color="orange"
                              fluid
                              size="large"
                              onClick={event => this.onShowEmail(event)}
                            >
                              Click Here To Receive Response
                            </Form.Button>
                            <Form.Input
                              type="hidden"
                              name="_replyto"
                              fluid
                              placeholder="no return address provided"
                              value="none@none.com"
                            />
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    )}
                  <Grid columns={1}>
                    <Grid.Row>
                      <Grid.Column>
                        <Form.TextArea
                          name="_message"
                          error={!valid.message}
                          required
                          label={sFeedbackLabel}
                          placeholder="What is on your mind... ?"
                          onChange={event => this.onChange(event, 'message')}
                          value={message}
                        />
                        {!valid.message && (
                          <Message
                            error
                            visible
                            header={`${feedback.message.header} ${sFeedbackLabel}`}
                            content={feedback.message.message}
                          />
                        )}
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column>
                        <Form.Button
                          color="orange"
                          fluid
                          size="large"
                          type="submit"
                          onClick={event => this.onSendEmail(event)}
                        >
                          Send
                        </Form.Button>
                        <Form.Input
                          fluid
                          type="hidden"
                          name="_subject"
                          value={`Weather: ${sFeedbackLabel}`}
                        />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Segment>
              </Form>
            </Ref>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

SupportForm.propTypes = {
  changeThePage: PropTypes.func.isRequired,
};

export default SupportForm;
