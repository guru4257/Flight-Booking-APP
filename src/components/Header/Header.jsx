import react,  {useRef, useEffect, useContext}  from 'react'
import {Container, Row, Button} from 'reactstrap'
import {NavLink, Link, useNavigate} from 'react-router-dom'
import logo from '..//..//assests/images/logo.png'
import './header.css' 
import {AuthContext} from './../../components/context/AuthContext'


const Header = ()=>{

    const headerRef = useRef(null)
    const menuRef = useRef(null)
    const navigate = useNavigate()
    const {user,dispatch} = useContext(AuthContext)
    console.log(user)

    const Nav__Links = [
        {
            path : '/home',
            display : 'Home'
        },
        {
            path : `/myflights`,
            display : 'MyFlights'
        },
        {
            path : '/flights',
            display : 'Flights'
        }
    ]

    const logout = ()=>{
        dispatch({type:'LOGOUT'})
        navigate('/')
    }

    const stickyHeaderFunc = ()=>{
        window.addEventListener('scroll',()=>{
            if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
                headerRef.current.classList.add('sticky_header')
            }else{
                headerRef.current.classList.remove('sticky_header')
            }
        })
    }

    useEffect(()=>{
        stickyHeaderFunc()
        return window.removeEventListener('scroll',stickyHeaderFunc)
    })

    const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu')



    return(
        <header className='Header' ref={headerRef}>
            <Container>
                <Row>
                    <div className='nav__wrapper d-flex align-items-center justify-content-between'>

                    {/* Logo start */}
                        <div className='logo'>
                            <img src={logo} alt=''/>
                        </div>
                    {/* Logo end */}

                    {/* Menu start */}
                        <div className='navigation' ref={menuRef} onClick={toggleMenu}>
                            <ul className='menu d-flex align-items-center gap-5'>
                                {
                                    Nav__Links.map((item,index)=>(
                                        <li className='nav__item' key={index}>
                                            <NavLink to={item.path} className={navClass => navClass.isActive ? 'active__link':''}>{item.display}</NavLink>
                                        </li>
                                    ))
                                    // <li>HIIII</li>
                                }
                            </ul>
                        </div>
                    {/* Menu end */}

                    <div className='nav__right d-flex align-items-center gap-4'>
                        <div className='nav__btns d-flex align-items-center gap-4'>
                            
                            {
                                user ? <>
                                <h5 className='mb-0'>{user.username}</h5>
                                <Button className='btn btn-dark' onClick={logout}>Logout</Button>
                                </> : <>
                                <Button className='btn secondary__btn'><Link to='/login'>Login</Link></Button>
                                <Button className='btn primary__btn'><Link to='/register'>Register</Link></Button>
                                </>
                            }


                            {/* <Button className='btn secondary__btn'><Link to='/login'>Login</Link></Button>
                            <Button className='btn primary__btn'><Link to='/register'>Register</Link></Button> */}
                        </div>

                        <span className='mobile__menu' onClick={toggleMenu}>
                            <i class="ri-menu-line"></i>
                        </span>

                    </div>

                    </div>
                </Row>
            </Container>

        </header>
    )
}

export default  Header