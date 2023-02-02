import React from "react";
import auth from "../../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../../../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user1, loading1, error1] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  let location = useLocation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  let signInError;
  let from = location.state?.from?.pathname || "/";
  if (user || user1) {
    return navigate(from, { replace: true });
  }
  if (error || error1) {
    signInError = (
      <small className="text-red-500">
        {error?.message || error1?.message}
      </small>
    );
  }
  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };
  if (loading || loading1) {
    return <Loading></Loading>;
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                    message: "provide a valid email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be six characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    {errors.password.message}
                  </p>
                )}
              </label>
            </div>
            {signInError}
            <button
              type="submit"
              className="btn w-full mt-4 max-w-xs btn-accent text-white "
            >
              Login
            </button>
          </form>
          <small>
            New to doctor's portal?{" "}
            <Link className="text-primary" to="/signup">
              Create new account
            </Link>
          </small>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-accent text-white justify-items-center"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
