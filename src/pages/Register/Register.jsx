import { Helmet } from "react-helmet-async";
import bgImg from "../../assets/login-register-bg/auth-bg.png";
import authImage from "../../assets/others/authentication2.png";
import WoodenBtn from "../../components/WoodenBtn";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from "react";
import useAuthHook from "../../hooks/useAuthHook";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin";

const Register = () => {
    const { createUser } = useAuthHook();
    const navigate = useNavigate();
    const captchaRef = useRef();
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = () => {
        const userCaptchaValue = captchaRef.current.value;
        if (validateCaptcha(userCaptchaValue)) {
            setDisabled(false);
        } else {
            captchaRef.current.value = "";
            setDisabled(true);
        }
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate("/");
            })
            .catch(err => console.error(err));
    }
    return (
        <>
            <Helmet>
                <title>Bistro Boss | SignUp</title>
            </Helmet>
            <main className="min-h-screen p-[7.5%]" style={{ backgroundImage: `url(${bgImg})` }}>
                <div className={`min-h-[75vh] border-2 bg-transparent shadow-2xl py-6 md:p-[5%] grid grid-cols-1 md:grid-cols-2 gap-x-16`}>
                    <div className="grid content-center order-first md:order-last">
                        <img src={authImage} alt="Authentication Art Image" className="w-full" />
                    </div>
                    <div className="">
                        <h2 className="text-4xl font-bold text-center">Register</h2>
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Name</span>
                                </label>
                                <input type="text" name="name" autoComplete="off" placeholder="Full Name" className="input input-bordered px-6" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Email</span>
                                </label>
                                <input type="email" name="email" autoComplete="off" placeholder="Your Email" className="input input-bordered px-6" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter your password" className="input input-bordered px-6" required />
                            </div>
                            <div className="form-control mt-2">
                                <label className="label mx-4">
                                    <LoadCanvasTemplate /> {disabled || <p className="text-xl font-bold text-green-600 text-right">Human Verified</p>}
                                </label>
                                <input ref={captchaRef} type="text" name="captcha" placeholder="Type the text above" className="input input-bordered px-6" required />
                                <button type="button" onClick={handleValidateCaptcha} className="btn btn-outline btn-sm">I Am Human</button>
                            </div>
                            <div className="form-control mt-6">
                                <WoodenBtn disabled={disabled}>{disabled ? "Verify Captcha First" : "Register"}</WoodenBtn>
                            </div>
                        </form>
                        <div className="flex flex-col items-center text-center">
                            <p className="text-[#D1A054]">Already Registered? <Link to="/login" className="font-bold">Go to log in</Link></p>
                            <h3 className="py-3">or sign in with</h3>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Register;