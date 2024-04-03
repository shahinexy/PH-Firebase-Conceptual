import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvaider";

const Register = () => {
    const {createUser, setUser} = useContext(AuthContext)
    const [error, setError] = useState('')

    const handleRegister = e =>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const pass = e.target.password.value;
        const confirmPass = e.target.confirm.value;

        if(!/@gmail\.com$/.test(email)){
            setError(`email must end with '@gmail.com'`)
            return
        }
        if(pass.length < 6){
            setError('password should at least 6 character or longer')
            return
        }
        if(!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(pass)){
            setError('password should contain at least one specail character')
            return
        }
        if(pass !== confirmPass){
            setError('Password did not match')
            return
        }

        setError('')
        console.log(name, email, pass);
        createUser(email, pass)
        .then(result => {
            const user = result.user;
            console.log(user);
            setUser(user)
        })
        .catch(error => {
            const errormsg = error.message
            setError(errormsg);
        })
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirm"
                placeholder="password"
                className="input input-bordered"
                
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-emerald-700 text-white text-lg font-bold">Register</button>
            </div>
            <div>
                {error && <small className="text-red-500">{error}</small>}
            </div>
          </form>
        </div>
      </div>
    );
};

export default Register;