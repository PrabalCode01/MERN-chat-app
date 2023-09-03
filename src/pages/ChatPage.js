// import React, { useState } from 'react'
// import axios from "axios"
// import { useEffect } from 'react'
import { ChatState } from '../Context/ChatProvider'
import { Box } from "@chakra-ui/layout";
import MyChats from '../components/MyChats'
import ChatBox from '../components/ChatBox'
import Sidebar from '../components/misscellaneous/Sidebar'
import { useState } from 'react';


const ChatPage = () => {

  const {user} = ChatState();
  const [fetchAgain , setFetchAgain ] = useState(false);

  return (
    <div style={{ width: "100%" }}>
    {user && <Sidebar/>}
    <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
      {user && <MyChats fetchAgain={fetchAgain}  />}
      {user &&  <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/> }
    </Box>
  </div>
  )
}

export default ChatPage
