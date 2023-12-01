import { FormLabel, FormControl, Input, Flex, Button } from "@chakra-ui/react";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  //handling user inputs
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleUserEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const handleUserPassword = (e) => {
    setPassword(e.target.value);
  };
  //handling submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, userEmail, userPassword);
  };
  //handling empty input fields

  return (
    <>
      <Flex height="100vh" align="center" justify="center" padding={20}>
        <FormControl onSubmit={handleSubmit}>
          <FormLabel>User Name</FormLabel>
          <Input
            type="text"
            id="username"
            placeholder="Enter your username"
            variant="filled"
            value={username}
            onChange={handleUsername}
          />
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            variant="filled"
            onChange={handleUserEmail}
          />

          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            id="password"
            placeholder="Enter your password"
            variant="filled"
            onChange={handleUserPassword}
          />
          <FormLabel>SUBMIT</FormLabel>
          <Button
            color="teal"
            colorScheme="gray"
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </FormControl>
      </Flex>
    </>
  );
}
export default Login;
