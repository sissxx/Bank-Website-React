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
} from "./SignUpElements";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Bank</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Register</FormH1>
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
              <FormLabel htmlFor="for">Confirm Password</FormLabel>
              <FormInput
                type="password"
                required
                placeholder="**********"
                id="confirm-password"
                name="confirm-password"
              />
              <FormButton type="submit">Register</FormButton>
              <Text>Already have an account? Login here. </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
