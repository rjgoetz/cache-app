import React from 'react';
import InputControl from '../components/InputControl';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';

export default function Signin() {
  return (
    <section>
      <h1 className="lead text-center">Sign in to Cache</h1>
      <Card>
        <form action="">
          <InputControl>
            <label htmlFor="email">Email address</label>
            <Input></Input>
          </InputControl>
          <InputControl>
            <p className="mb-0 d-flex justify-content-between">
              <label htmlFor="password">Password</label>
              <a className="small" href="#">
                Forgot password?
              </a>
            </p>
            <Input></Input>
            {/* <input type="password" name="password" /> */}
          </InputControl>
          <Button>Sign in</Button>
        </form>
      </Card>

      <Card transparent>
        <p className="small mb-0 text-center">
          New to Cache? <a href="#">Create an account.</a>
        </p>
      </Card>
    </section>
  );
}
