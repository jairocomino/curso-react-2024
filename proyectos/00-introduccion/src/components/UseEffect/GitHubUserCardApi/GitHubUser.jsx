import React, { useEffect, useState } from 'react'
import fetchGitHubUsers from '../../helper/fetchGitHubUsers';
import CardGitHub from './CardGitHub';
import Spiner from './Spiner';
import Modal from './Modal';

const GitHubUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)
    const [selectedUser, setSelectedUser] = useState(null)

    const handleOpenModal=(user)=>{
      setSelectedUser(user);

    }
    const handleCloseModal=()=>{
      setSelectedUser(null);
    }

    useEffect(() => {
        const fetchData = async () => {
        try{
          setTimeout(async () => {
            const data = await fetchGitHubUsers();
            setUsers(data);
            setLoading(false);
          }, 3000);
        }catch(error){
            setLoading(true);
        }
        } 
      fetchData();
    }, [])

    

  return (
    <>
        
        <div className='mx-auto max-w-[75%] text-center relative'>
            <h1 className='text-4xl font-bold mb-8 mt-2'>Usando UseEffect para realizar un fetch de la api GitHub</h1>


            {loading ? (<Spiner />): (
              <>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto relative'>
                {users.map((user)=>(
                    <CardGitHub 
                    key={user.id}
                    avatar_url={user.avatar_url}
                    login={user.login}
                    html_url={user.html_url}
                    openModal={()=>handleOpenModal(user)}
                    />
                ))}
            </div>
            <Modal 
            isOpen={!!selectedUser}
            imgUrl={selectedUser?.avatar_url}
            closeModal={handleCloseModal}
            />
            </>
            )
}
        </div>
    </>
  )
}

export default GitHubUser