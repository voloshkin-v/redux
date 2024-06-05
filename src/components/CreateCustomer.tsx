import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createCustomer } from '~/redux/features/customerSlice';
import { isFormValid } from '~/utils/isFormValid';

const defaultFormValues = {
  firstName: '',
  lastName: '',
  nationalId: '',
};

const CreateCustomer = () => {
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState(defaultFormValues);
  const [validated, setValidated] = useState(true);
  const { firstName, lastName, nationalId } = formValues;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid(formValues)) {
      setValidated(false);
      return;
    }

    setValidated(true);
    dispatch(createCustomer(firstName, lastName, nationalId));
    setFormValues(defaultFormValues);
  };

  return (
    <div className="bg-gray-100 p-6">
      <form className="mt-2 space-y-4" onSubmit={handleSubmit}>
        <label className="flex gap-2">
          First name
          <input name="firstName" value={firstName} onChange={handleChange} type="text" />
        </label>

        <label className="flex gap-2">
          Last name
          <input name="lastName" value={lastName} onChange={handleChange} type="text" />
        </label>

        <label className="flex gap-2">
          National ID
          <input name="nationalId" value={nationalId} onChange={handleChange} type="text" />
        </label>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Create
        </button>

        {!validated && <div>Form is not valid!</div>}
      </form>
    </div>
  );
};

export default CreateCustomer;
