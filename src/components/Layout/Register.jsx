import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvaider";

const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const pass = e.target.password.value;
        console.log(name, email, pass);
        createUser(email, pass)
    }
    return (
        <div className="flex justify-center">
        <div className="md:w-1/2">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                
              />
            </div>
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
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-emerald-700 text-white text-lg font-bold">Register</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Register;