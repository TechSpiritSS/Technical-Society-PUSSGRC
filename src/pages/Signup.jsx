import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [branch, setBranch] = useState('');
  const [year, setYear] = useState('');
  const [rollno, setRollno] = useState('');
  const [phone, setPhone] = useState('');

  const { signup, loading, error } = useSignup();

  const handleSubmit = async (e) => {
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    // console.log(email, password, name, branch, year, rollno, phone);

    e.preventDefault();
    await signup(email, password, name, branch, year, rollno, phone);
  };

  const forms = [
    {
      label: 'Email',
      type: 'email',
      value: email,
      onChange: (e) => setEmail(e.target.value),
      placeholder: 'Enter email',
    },
    {
      label: 'Password',
      type: 'password',
      value: password,
      onChange: (e) => setPassword(e.target.value),
      placeholder: 'Enter password',
    },
    {
      label: 'Confirm Password',
      type: 'password',
      value: confirmPassword,
      onChange: (e) => setConfirmPassword(e.target.value),
      placeholder: 'Confirm password',
    },
    {
      label: 'Name',
      type: 'text',
      value: name,
      onChange: (e) => setName(e.target.value),
      placeholder: 'Enter name',
    },
    {
      label: 'Branch',
      type: 'select',
      value: branch,
      onChange: (e) => setBranch(e.target.value),
      options: [
        { value: 'CSE', label: 'CSE' },
        { value: 'IT', label: 'IT' },
        { value: 'ECE', label: 'ECE' },
        { value: 'Mech', label: 'Mech' },
        { value: 'Other', label: 'Other' },
      ],
      placeholder: 'Select branch',
    },
    {
      label: 'Year',
      type: 'select',
      value: year,
      onChange: (e) => setYear(e.target.value),
      options: [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
      ],
      placeholder: 'Select year',
    },
    {
      label: 'Roll No',
      type: 'text',
      value: rollno,
      onChange: (e) => setRollno(e.target.value),
      placeholder: 'SG000000',
    },
    {
      label: 'Phone',
      type: 'number',
      value: phone,
      onChange: (e) => setPhone(e.target.value),
      placeholder: 'Enter phone number',
    },
  ];

  return (
    <div>
      <h1>Sign Up</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        {forms.map((form) => (
          <div key={form.label}>
            <label htmlFor={form.label}>{form.label}</label>
            {form.type !== 'select' && (
              <input
                type={form.type}
                id={form.label}
                value={form.value}
                onChange={form.onChange}
                placeholder={form.placeholder}
              />
            )}{' '}
            {form.type === 'select' && (
              <select value={form.value} onChange={form.onChange}>
                <option value="" disabled defaultValue>
                  {form.placeholder}
                </option>
                {form.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
        <button disabled={loading} type="submit">
          Sign Up
        </button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}
