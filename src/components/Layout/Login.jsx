import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvaider";


const Login = () => {
    const {signInUser} = useContext(AuthContext)

    const handleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const pass = e.target.password.value;
        console.log(email, pass);
        signInUser(email, pass)
    }
  return (
    <div className="flex justify-center">
      <div className="md:w-1/2">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-purple-500 text-white text-lg font-bold">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
