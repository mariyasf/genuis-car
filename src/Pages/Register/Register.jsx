import { Link } from 'react-router-dom';
import l1 from '/assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';


const Register = () => {
    const { createNewUser } = useContext(AuthContext);


    const handleRegister = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createNewUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.log(error))


    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-12">
                <div className=" w-1/2">
                    <img src={l1} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleRegister}>
                        <h2 className='text-3xl font-bold text-center'>Register Now</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] uppercase text-white">Register</button>
                        </div>
                    </form>

                    <div className='text-center '>
                        <p>Already have an account? <Link className='text-[#FF3811] font-bold' to={'/login'}>Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;