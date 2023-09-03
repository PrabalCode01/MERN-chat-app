import React, { useEffect } from 'react'
import {Container,Box, Text,  Tab,TabList,TabPanel,TabPanels,Tabs,} from "@chakra-ui/react"
import Login from "../components/Authentication/Login"
import Signup from "../components/Authentication/Signup"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


const HomePage = () => {

  const history = useHistory();
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
   

    if (user) history.push("/chats");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);


  return (
    <Container maxW="xl" centerContent>

      <Box
           display="flex"
           justifyContent="center"
           p={3}
           bg="lightgreen"
           w="100%"
           m="40px 0 15px 0"
           borderRadius="lg"
           borderWidth="4px"
           borderColor="black"
      
      >
        <Text textAlign="center" fontSize="4xl" fontFamily="Work sans">
            ChatMingle✌️
          </Text>
      </Box>

      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="3px" borderColor="black">
               
               <Tabs isFitted variant="soft-rounded">
               <TabList mb="1em">
                 <Tab>Login</Tab>
                 <Tab>Sign Up</Tab>
               </TabList>

               <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>

               </Tabs>
      

    
      </Box>

    </Container>
  )
}

export default HomePage
