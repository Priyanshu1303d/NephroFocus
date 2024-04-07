import {useRef,useEffect} from 'react';
import logo from "../../assets/images/logo-1.png"
import userImg from "../../assets/images/avatar-icon.png"
import {Link, NavLink} from "react-router-dom"
import {BiMenu} from 'react-icons/bi'

const navLinks=[
  {
    path:'/home',
    display:'Home',
  },
  {
    path:'/scan',
    display:'Scan',
  },
  {
    path:'/classification',
    display:'Classification',
  },
  {
    path:'/feedback',
    display:'Feedback',
  },
  {
    path:'/contact',
    display:'Contact',
  },
]


const Header = () => {

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader =()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
        headerRef.current.classList.add('sticky__header');
      }else{
        headerRef.current.classList.remove('sticky__header');
      }
    })
  }


  useEffect(()=>{
    handleStickyHeader()

    return ()=>  window.removeEventListener('scroll',handleStickyHeader);
  });


  const toggleMenu = ()=>menuRef.current.classList.toggle('show__menu');


  return(
   <header className='header flex items-center' ref={headerRef}>
    <div className='container m-3 p-3'>
      <div className='relative flex items-center justify-between'>
        {/* ----------logo---------- */}
        <div>
          <img src={logo} className='absolute w-[250px] h-[250px] -top-[65%]' alt="" />
        </div>
        {/* -------menu----- */}
        <div className='navigation' ref={menuRef} onClick={toggleMenu} >
          <ul className='menu flex items-center gap-[2.5rem]'>
              {
                navLinks.map((link,index)=>
                  <li key={index}>
                    <NavLink to={link.path} className={ navClass=> navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font-[600]' : 'text-textColor text-[16px] leading-7 font-[600] hover:text-primaryColor'}>{link.display}</NavLink>
                  </li>
                )
              }
          </ul>
        </div>

        {/* -------nav right------- */}
        <div className='flex items-center gap-4'>
          <div className='hidden'>
              <Link to='/'>
                <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                  <img className="w-full rounded-full " src={userImg} alt="" />
                </figure>
              </Link>
          </div>
      
        {/* ---------login------- */}
        <Link to='/login' className=''>
          <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[35px] flex items-center rounded-xl justify-center'>Login</button>
        </Link>
        <span className='md:hidden' onClick={toggleMenu}>
          <BiMenu className="w-6 h-6 cursor-pointer" />
        </span>

        </div>
      </div>
    </div>
  </header>)
}

export default Header