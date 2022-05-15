import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {

    const navigate = useNavigate();

    const navigateRegister = event => {
        navigate('/register');
    }

    return (
        <div>
            <div className='w-50 mx-auto border border-success p-5 mt-5 mb-5 rounded-3'>
                <form>
                    <h1 className='text-center text-primary'>Login</h1>
                    <div class="mb-3">
                        <label for="exampleInputEmail" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword" />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Show Password</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

                <p>
                    Forget password? <button className='btn btn-link text-primary text-decoration-none pe-auto'>Reset Password</button>
                </p>
                <p>
                    New to Food Mart? <Link to="/register" className='text-primary text-decoration-none pe-auto' onClick={navigateRegister}>Please Register</Link>
                </p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;