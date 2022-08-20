import React from 'react';

const create = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">Ismingiz</label>
        <input type="text" name="name" required />
        <label htmlFor="lastname">Familyangiz</label>
        <input type="text" name="lastname" required />
        <label htmlFor="username">Foydalanuvchi nomi</label>
        <input type="text" name="username" required />
        <label htmlFor="email">Pochtangiz</label>

        <input type="email" name="email" required />
        <label htmlFor="password">Parolingiz</label>
        <input type="password" name="password" required />
        <button type="submit">Ro'yhatdan o'tish</button>
      </form>
    </div>
  );
};

export default create;
