import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "./components/auth-layout";
import { Button } from "./components/button";
import { Checkbox, CheckboxField } from "./components/checkbox";
import { Field, Label } from "./components/fieldset";
import { Heading } from "./components/heading";
import { Input } from "./components/input";
import { Strong, Text, TextLink } from "./components/text";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "joe@awesomeai.com" && password === "governance") {
      setLoggedIn(true);
      navigate("/dashboard");
    } else {
      alert("Invalid credentials (try joe@awesomeai.com / governance)");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    // optionally react to loggedIn state
  }, [loggedIn]);

  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="grid w-full max-w-sm grid-cols-1 gap-8"
      >
        <h1>SS&C AI</h1>
        <Heading>Sign in to your account</Heading>

        <Field>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </Field>

        <Field>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Field>

        <div className="flex items-center justify-between">
          <CheckboxField>
            <Checkbox name="remember" />
            <Label>Remember me</Label>
          </CheckboxField>
          <Text>
            <TextLink href="#">
              <Strong>Forgot password?</Strong>
            </TextLink>
          </Text>
        </div>

        <Button type="submit" className="w-full">
          Login
        </Button>

        <Text>
          Don’t have an account?{" "}
          <TextLink href="#">
            <Strong>
              <Link to="/signup">Signup</Link>
            </Strong>
          </TextLink>
        </Text>
      </form>
    </AuthLayout>
  );
};

export default Signin;
