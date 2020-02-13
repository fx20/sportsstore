const GetMessage = elem => {
  const message = [];
  if (elem.validity.valueMissing) {
    message.push('Value Required')
  }
  if (elem.validity.typeMismatch) {
    message.push(`Invalid ${elem.type}`);
  }
};

export default GetMessage;
