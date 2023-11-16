import { Helmet } from "react-helmet-async";
import bgImg from "../../assets/login-register-bg/auth-bg.png";
import authImage from "../../assets/others/authentication2.png";
import WoodenBtn from "../../components/WoodenBtn";

const Login = () => {
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <main className="min-h-screen p-[7.5%]" style={{ backgroundImage: `url(${bgImg})` }}>
                <div className={`min-h-[75vh] border-2 bg-transparent shadow-2xl py-6 md:p-[5%] grid grid-cols-1 md:grid-cols-2 gap-x-16`}>
                    <div className="grid content-center">
                        <img src={authImage} alt="Authentication Art Image" className="w-full" />
                    </div>
                    <div className="order-first md:order-last">
                        <h2 className="text-4xl font-bold text-center">Login</h2>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Your Email" className="input input-bordered px-6" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter your password" className="input input-bordered px-6" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Verify Captcha</span>
                                </label>
                                <input type="text" name="captcha" placeholder="Enter the text above" className="input input-bordered px-6" required />
                            </div>
                            <div className="form-control mt-6" disabled>
                                <WoodenBtn disabled>SignIn</WoodenBtn>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Login;