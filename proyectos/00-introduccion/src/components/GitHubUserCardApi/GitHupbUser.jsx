import React, { useEffect, useState } from 'react'
import { sassTrue } from 'sass';
import { fechtGitHupbUser } from '../../helpers/fechtGitHupbUser';
import CardGithup from './cardGithup';

const GitHupbUser = () => {
    //HOOSK
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(sassTrue);
  useEffect(() => {
 const  fetchData= async()=>{ 
    //traigo lostados usando el helpper
        // setUSers (los datos del fetch)
    try {
         const data=await fechtGitHupbUser();
        setUsers(data); 
        setLoading(false);
    } catch (error) {
        setLoading(true);
    }
       
       
    };
  
    fetchData();
  }, [])
  

    return (
    <>
    <div className='mx-auto max-w-[75%] text-center relative'>
        <h1 className=' text-4x1 font-bold mb-8 mt-2'>
            Usando un useEffect para realizar un  fetcth 
        </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto relative'>
                {
                    users.map(user =>(
                        <CardGithup key={user.id} 
                            avatar_url={user.avatar_url}
                            login={user.login}
                            html_url={user.html_url}
                        /> 
                    ))
                }
            </div>
        
    </div>
    </>
  )
}

export default GitHupbUser