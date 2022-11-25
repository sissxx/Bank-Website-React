import React, { useState } from "react";
import {
  Container,
  Icon,
  FormContent,
  FormWrap,
  FormH1,
  FormInput,
  FormLabel,
  FormButton,
  Text,
  Form,
} from "./SignInElemens";

const SignIn = () => {

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Bank</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                required
                placeholder="admin@gmail.com"
                id="email"
                name="email"
              />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                type="password"
                required
                placeholder="**********"
                id="password"
                name="password"

              />
              <FormButton type="submit">Continue</FormButton>
              <Text >Don't have an account? Register here.</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
