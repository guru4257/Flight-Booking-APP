import react,{useState,useContext} from 'react'
import {Container,Row,Col,Form,FormGroup,Button} from 'reactstrap'
import {Link,useNavigate} from 'react-router-dom'
import '../styles/login.css'
import registerImg from '../assests/images/register.png'
import userIcon from '../assests/images/user.png'
import {AuthContext} from './../components/context/AuthContext'
import {BASE_URL} from './../utils/config'




const Register = ()=>{

    const [credentials,setCredentials] = useState({
       type : undefined,
       username : undefined,
       email : undefined,
       password : undefined
    })

    const {dispatch} = useContext(AuthContext)

    const navigate = useNavigate()

    const handleChange = e=>{
        setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
    }

    const handleClick = async e=> {
        e.preventDefault()
        console.log(credentials)
        try{
            const res = await fetch(`${process.env.REACT_APP_URL}/api/v1/auth/register`,{
                method : 'post',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(credentials)
            })
            const result = await res.json()
            if(!res.ok) alert(result.message)

            dispatch({type : 'REGISTER_SUCCESS'})
            navigate('/login')

        }catch(err){
            alert(err.message)
        }
    }

    return(
        <section>
            <Container>
                <Row>
                    <Col lg='8' className='m-auto'>
                        <div className='login__container d-flex justify-content-between'>
                            <div className='login__img'>
                                <img src={registerImg} alt='' />
                            </div>
                            <div className='login__form'>
                                <div className='user'>
                                    <img src={userIcon} alt=''/>
                                </div>
                                <h2>Register</h2>
                                <Form onSubmit={handleClick}>
                                    <FormGroup>
                                        <select id="type" onChange={handleChange}>
                                        <option>User Type</option>
                                        <option>Admin</option>
                                        <option>User</option>
                                        </select>
                                    </FormGroup>
                                    <FormGroup>
                                        <input type='text' placeholder='Username' required id='username' onChange={handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <input type='email' placeholder='Email' required id='email' onChange={handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <input type='password' placeholder='Password' required id='password' onChange={handleChange} />
                                    </FormGroup>
                                    <Button className='btn secondar__btn auth__btn' type='submit'>Create Account</Button>
                                </Form>
                                <p>Already Have an Account?<Link to={'/login'}>Login</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Register