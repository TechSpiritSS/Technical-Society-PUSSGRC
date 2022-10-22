import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const api = 'http://localhost:5000/api/students/register';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const { dispatch } = useContext(AuthContext);

  const signup = async (email, password, name, branch, year, rollno, phone) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          name,
          branch,
          year,
          rollno,
          phone,
        }),
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
        setLoading(false);
        return;
      }

      if (response.ok) {
        setError(null);

        localStorage.setItem('user', JSON.stringify(data));

        dispatch({
          type: 'LOGIN',
          payload: data,
        });
        setLoading(false);
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return { signup, loading, error };
};
