const checkFormValidation = (formData) => {
  const errors = {};
  if (!formData.title || formData.title === '') {
    errors.title = 'This field is required';
  }
  if (!formData.note || formData.note === '') {
    errors.note = 'This field is required';
  }
  return errors;
};

export default checkFormValidation;
