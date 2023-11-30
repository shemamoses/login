import { Box, Flex,FormLabel,FormControl } from "@chakra-ui/react"

function Login (){
    return <>
    <Flex>
        <Box>
        <FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
        </Box>
    </Flex>
    </>
}

export default Login