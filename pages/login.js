import { useMutation } from "@/hooks/useMutation";
import {
  Box,
  Flex,
  Stack,
  Heading,
  Button,
  FormControl,
  Input,
  useToast
} from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {

  const toast = useToast();
  const router = useRouter();
  const { mutate } = useMutation();
  const [payload, setPayload] = useState({
    email: '',
    password: ''
  });

  const HandleSubmit = async () => {
    const response = await mutate({ url: 'https://paace-f178cafcae7b.nevacloud.io/api/login', payload});
  
    if(!response.success) { 
      toast({
        title: 'Login Failed',
        description: 'Email and password is incorrect',
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top',
      })
    } else {
      Cookies.set("user_token", response.data.token, {
        expires: new Date(response.data.expires_at),
        path: '/'
      });
      router.push('/')
    }
  };

  return (
    <Box h='calc(100vh)'>
      <Flex alignItems='center' justifyContent='center' height='100%'>
        <Stack direction='column'>
          <Heading as='h4'>LOGIN</Heading>
          <FormControl>
            <Input 
              value={payload.email} 
              placeholder="email"
              onChange={(event) =>
                setPayload({ ...payload, email: event.target.value })
              }
            />
          </FormControl>
          <FormControl>
            <Input 
              value={payload.password} 
              placeholder="password" 
              type="password"
              onChange={(event) =>
                setPayload({ ...payload, password: event.target.value })
              }
            />
          </FormControl>
          <FormControl>
            <Button onClick={() => HandleSubmit()}>Login</Button>
          </FormControl>
        </Stack>
      </Flex>
    </Box>
  )
};
