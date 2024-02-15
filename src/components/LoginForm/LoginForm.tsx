import { Button, Field, Input } from '@grafana/ui';
import React from 'react';

export interface LoginFormModel {
  getDefaultUser(): string;
}

export interface LoginFormController {
  login(): void;
}

interface LoginFormProps {
  readonly model: LoginFormModel;
  readonly controller: LoginFormController;
}
export function LoginForm(props: LoginFormProps) {
  const { model, controller } = props;
  const { getDefaultUser } = model;
  const { login } = controller;
  const user = getDefaultUser();

  return (
    <>
      <Field label="Email" error="Name is required">
        <Input required placeholder="Roger Waters" defaultValue={user} type="email" />
      </Field>
      <Field label="password" error="Password is required">
        <Input required type="password" />
      </Field>
      <Button onClick={login}>Login</Button>
    </>
  );
}
