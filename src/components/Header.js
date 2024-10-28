import { auth } from '../firebase';
import { signOut } from 'firebase/auth';


const Header = (data) => {
  const signOutBtn=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      console.log(error)
    });
  }
  return (
    <div className='grid w-screen bg-sky-950'>
        <div className='flex text-white' >
          <img className='w-40 h-40 ' alt='logo' src='https://marketplace.canva.com/EAFvDRwEHHg/1/0/1600w/canva-colorful-abstract-online-shop-free-logo-cpI8ixEpis8.jpg'/>
          <h1 className='text-5xl text-center ml-[28rem] mt-10'>Online Shop</h1>
        </div>
        <div className='mt-[-7.5rem] ml-[14.5rem]'>
          <img alt='' src=''/>
          <button className='bg-gray-400 p-2 m-2 rounded ml-[69rem]' onClick={signOutBtn}>signOut</button>
        </div>
       
    </div>
  )
}

export default Header
