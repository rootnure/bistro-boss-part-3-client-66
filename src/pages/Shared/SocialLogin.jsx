import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa6";

const SocialLogin = () => {
    return (
        <div className='flex justify-evenly w-1/2 mx-auto'>
            {/* TODO: create fb app and enable fb login */}
            <button disabled className="btn rounded-full border-2 border-black py-2 text-2xl hover:border-black hover:bg-gray-700 hover:text-white" title="Facebook"><FaFacebookF></FaFacebookF></button>
            <button className="btn rounded-full border-2 border-black py-2 text-2xl hover:border-black hover:bg-gray-700 hover:text-white" title="Google"><FaGoogle></FaGoogle></button>
            {/* TOOD: create github app and enable github login */}
            <button disabled className="btn rounded-full border-2 border-black py-2 text-2xl hover:border-black hover:bg-gray-700 hover:text-white" title="Github"><FaGithub></FaGithub></button>
        </div>
    );
};

export default SocialLogin;