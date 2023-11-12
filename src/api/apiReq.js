export const loginApi = async (user) => {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          email: user.email,
          password: user.password,
        }),
      });
      return response.json(); 
    }


