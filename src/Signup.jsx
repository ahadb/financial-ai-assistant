import { Link } from "react-router-dom";
import { AuthLayout } from "./components/auth-layout";
import { Button } from "./components/button";
import { Checkbox, CheckboxField } from "./components/checkbox";
import { Field, Label } from "./components/fieldset";
import { Heading } from "./components/heading";
import { Input } from "./components/input";
import { Select } from "./components/select";
import { Strong, Text, TextLink } from "./components/text";

function Signup() {
  return (
    <AuthLayout>
      <form
        action="#"
        method="POST"
        className="grid w-full max-w-sm grid-cols-1 gap-8"
      >
        <h1 className="text-3xl font-bold text-blue-400">SS&C AI</h1>
        <Heading>Create your account</Heading>
        <Field>
          <Label>Email</Label>
          <Input type="email" name="email" />
        </Field>
        <Field>
          <Label>Full name</Label>
          <Input name="name" />
        </Field>
        <Field>
          <Label>Password</Label>
          <Input type="password" name="password" autoComplete="new-password" />
        </Field>
        <Field>
          <Label>Country</Label>
          <Select name="country">
            <option>Canada</option>
            <option>Mexico</option>
            <option>United States</option>
          </Select>
        </Field>
        <CheckboxField>
          <Checkbox name="remember" />
          <Label>Get emails about product updates and news.</Label>
        </CheckboxField>
        <Button type="submit" className="w-full">
          Create account
        </Button>
        <Text>
          Already have an account?{" "}
          <TextLink href="#">
            <Strong>
              <Link to="/signin">Signin</Link>
            </Strong>
          </TextLink>
        </Text>
      </form>
    </AuthLayout>
  );
}

export default Signup;
