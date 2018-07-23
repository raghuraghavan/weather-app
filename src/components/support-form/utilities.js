const showEmail = bCurrent => (!bCurrent);

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const returnValidState = (oState) => {
  const o = oState;
  let newState = { ...o };
  let isValid = true;

  const { email } = o;
  const { message } = o;
  const { show } = o;

  if (show.email) {
    if (email === '') {
      newState = {
        ...newState,
        feedback: {
          ...newState.feedback,
          email: {
            header: 'Return Address',
            message: 'Please enter a contact email address.',
          },
        },
        valid: {
          ...newState.valid,
          email: false,
        },
      };

      isValid = false;
    }

    if (email !== '' && !ValidateEmail(email)) {
      newState = {
        ...newState,
        feedback: {
          ...newState.feedback,
          email: {
            header: 'Invalid Address',
            message: 'Please enter a valid email address.',
          },
        },
        valid: {
          ...newState.valid,
          email: false,
        },
      };

      isValid = false;
    }
  }

  if (message === '') {
    newState = {
      ...newState,
      feedback: {
        ...newState.feedback,
        message: {
          header: 'Enter Your',
          message: 'No message has been entered for us to attend to.',
        },
      },
      valid: {
        ...newState.valid,
        message: false,
      },
    };

    isValid = false;
  }

  return { newState, valid: isValid };
};

const returnMessageType = (bShowEmail) => {
  let sMessage = 'Problem';

  if (bShowEmail) {
    sMessage = 'Query';
  }

  return sMessage;
};

export { returnMessageType, returnValidState, showEmail };
