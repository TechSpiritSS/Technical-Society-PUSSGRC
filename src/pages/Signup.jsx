import { useState } from 'react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [branch, setBranch] = useState('');
  const [year, setYear] = useState('');
  const [rollno, setRollno] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const forms = [
    {
      label: 'Email',
      type: 'email',
      value: email,
      onChange: (e) => setEmail(e.target.value),
    },
    {
      label: 'Password',
      type: 'password',
      value: password,
      onChange: (e) => setPassword(e.target.value),
    },
    {
      label: 'Confirm Password',
      type: 'password',
      value: confirmPassword,
      onChange: (e) => setConfirmPassword(e.target.value),
    },
    {
      label: 'Name',
      type: 'text',
      value: name,
      onChange: (e) => setName(e.target.value),
    },
    {
      label: 'Branch',
      type: 'text',
      value: branch,
      onChange: (e) => setBranch(e.target.value),
    },
    {
      label: 'Year',
      type: 'number',
      value: year,
      onChange: (e) => setYear(e.target.value),
    },
    {
      label: 'Roll No',
      type: 'number',
      value: rollno,
      onChange: (e) => setRollno(e.target.value),
    },
    {
      label: 'Phone',
      type: 'number',
      value: phone,
      onChange: (e) => setPhone(e.target.value),
    },
    {
      label: 'DOB',
      type: 'date',
      value: dob,
      onChange: (e) => setDob(e.target.value),
    },
  ];

  return (
    <div>
      <h1>Sign Up</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        {forms.map((form) => (
          <div key={form.label}>
            <label htmlFor={form.label}>{form.label}</label>
            <input
              type={form.type}
              id={form.label}
              value={form.value}
              onChange={form.onChange}
            />
          </div>
        ))}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
