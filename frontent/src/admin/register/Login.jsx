import { useState } from 'react';
import { Input, Button } from '@material-tailwind/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const isLoading = false;

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setEmailError('Invalid email address');
      return;
    }
    console.log('Logging in with', { email, password });
    // Add authentication logic here
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Login background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Login Form */}
      <div className="relative z-10 w-full max-w-md bg-white shadow-xl rounded-lg p-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
          <p className="text-gray-600">Please login to your account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Input */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-gray-600">
              Email
            </label>
            <Input
              id="email"
              variant="outlined"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError('');
              }}
              className="w-full"
              error={!!emailError}
            />
            {emailError && (
              <p className="text-red-500 text-sm">{emailError}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-semibold text-gray-600">
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                variant="outlined"
                label="Password"
                type={passwordVisible ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {passwordVisible ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M13.875 18.825A10.05 10.05 0 0112 19c-4.418 0-8-3.582-8-8s3.582-8 8-8a7.998 7.998 0 017.962 8.775" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                    <path d="M2.05 12A10.004 10.004 0 0112 2a10.004 10.004 0 019.95 10A10.004 10.004 0 0112 22a10.004 10.004 0 01-9.95-10z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors duration-300"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </Button>

          {/* Sign Up Link */}
          <div className="text-center text-sm text-gray-600">
            Dont have an account? <a href="/signup" className="text-blue-500 font-semibold hover:text-blue-700">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;