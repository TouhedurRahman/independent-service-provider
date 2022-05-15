import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Registration.css';

const Registration = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    return (
        <div>
            <div className='w-50 mx-auto border border-success p-5 mt-5 mb-5 rounded-3'>
                <form>
                    <h1 className='text-center text-primary'>Please Register</h1>
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Name</label>
                        <input type="email" class="form-control" id="exampleInputName" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword2" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword2" />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Register</button>
                </form>

                <p>
                    Already have an account? <Link to="/login" className='text-danger text-decoration-none pe-auto' onClick={navigateLogin}>Please Login</Link>.
                </p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Registration;