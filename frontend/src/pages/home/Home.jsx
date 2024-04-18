import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import MessageContainer from '../../components/messages/MessageContainer.jsx'

const Home = () => {
   return <div className='border-solid border-2 border-cyan-800 flex sm:h-[450px] md:-[550px] rounded-lg overflow-hidden bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity'>
    <Sidebar />
    <MessageContainer /> 
    
  </div>
}

export default Home
