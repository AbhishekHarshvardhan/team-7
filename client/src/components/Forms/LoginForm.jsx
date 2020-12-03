import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <form className='form-signin'>
      <h1 className='h3 mb-3 font-weight-normal text-center display-3'>
        ZigZag
      </h1>
      <label htmlFor='nickname' className='sr-only'>
        Nickname
      </label>
      <input
        type='text'
        id='nickname'
        className='form-control mb-3'
        placeholder='Nickname'
        required
        autoFocus
      />

      <select className='form-control mb-3'>
        <option value='easy'>Easy</option>
        <option value='medium'>Medium</option>
        <option value='Hard'>Hard</option>
      </select>

      <div className='d-flex'>
        <button className='btn btn-lg btn-outline-dark w-50' type='submit'>
          Single
        </button>
        <div className='px-1'></div>
        <button className='btn btn-lg btn-outline-dark w-50' type='submit'>
          Multiplayer
        </button>
      </div>
      <div className='mt-5 mb-3'></div>
    </form>
  );
};

export default LoginForm;
