import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Footer from '../Footer/Footer';
import './CheckOut.css';

const CheckOut = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleOnConfirm = () => {
        navigate('/home');
    }

    return (
        <div>
            <div className='checkout-container mx-auto border border-success p-5 mt-5 mb-5 rounded-3'>
                <form onSubmit={handleOnConfirm}>
                    <h1 className='text-center text-primary'>Confirm Order</h1>
                    <div className="mb-3">
                        <label for="exampleInputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputName" placeholder="Full Name" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail" className="form-label">Email address</label>
                        <input value={user?.email} readOnly type="email" className="form-control" id="exampleInputEmail" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="exampleInputAddress" placeholder="Address" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputMobile" className="form-label">Mobile No.</label>
                        <input type="text" className="form-control" id="exampleInputAddress" placeholder="+880 1XXX-XXXXXX" required />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
                        <label className="form-check-label" for="exampleCheck1">Accept our terms and Conditions.</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Confirm Purchase</button>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CheckOut;