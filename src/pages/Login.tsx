import { Toast, ToastContainer } from 'react-bootstrap';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

import imgUrl from '@assets/img/logo.png';
import StatusModal from '@components/StatusModal';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<Error[]>([]);

    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        if (!form.checkValidity()) {
            e.stopPropagation();
            form.classList.add('was-validated');
            return;
        }
        if (!email || !password) {
            setErrors([
                ...errors,
                new Error('Email and password are required'),
            ]);
            return;
        }
        const response = await fetch(
            import.meta.env.VITE_API_URL + '/api/auth/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include',
            },
        );

        if (response.ok) {
            const { data } = await response.json();
            localStorage.setItem('data', JSON.stringify(data));

            setShowSuccessModal(true);
        } else {
            setErrors([...errors, new Error('Invalid email or password')]);
        }
    };

    const handleCloseModal = () => {
        setShowSuccessModal(false);
        navigate('/');
    };

    return (
        <section>
            <StatusModal
                show={showSuccessModal}
                handleClose={handleCloseModal}
                title="Login Successful"
                description="Now you will be redirected to the home page."
                status={'success'}
            />
            <ToastContainer position="top-end" className="p-3">
                {errors.map((error, index) => (
                    <Toast
                        key={index}
                        onClose={() => {
                            const newErrors = [...errors];
                            newErrors.splice(index, 1);
                            setErrors(newErrors);
                        }}
                        delay={3000}
                        autohide
                    >
                        <Toast.Header>
                            <strong className="me-auto">Error</strong>
                        </Toast.Header>
                        <Toast.Body>{error.message}</Toast.Body>
                    </Toast>
                ))}
            </ToastContainer>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                        <div className="card border border-light-subtle rounded-3 shadow-sm">
                            <div className="card-body p-3 p-md-4 p-xl-5">
                                <div className="text-center mb-3">
                                    <img
                                        src={imgUrl}
                                        alt="Fidelitas logo"
                                        width="90"
                                        height="90"
                                    />
                                </div>
                                <h2 className="fs-6 fw-normal text-center text-secondary mb-4">
                                    Sign in to your account
                                </h2>

                                <form
                                    method="post"
                                    className="needs-validation"
                                    onSubmit={(e) => handleLogin(e)}
                                    noValidate
                                >
                                    <div className="row gy-2">
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    onChange={(e) =>
                                                        setEmail(e.target.value)
                                                    }
                                                    required
                                                />
                                                <label htmlFor="email">
                                                    Email address
                                                </label>
                                                <div className="invalid-feedback">
                                                    Please enter a valid email
                                                    address.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    name="password"
                                                    id="password"
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value,
                                                        )
                                                    }
                                                    required
                                                />
                                                <label htmlFor="password">
                                                    Password
                                                </label>
                                                <div className="invalid-feedback">
                                                    Please enter your password.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="d-flex gap-2 justify-content-between">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                        name="rememberMe"
                                                        id="rememberMe"
                                                    />
                                                    <label
                                                        className="form-check-label text-secondary"
                                                        htmlFor="rememberMe"
                                                    >
                                                        Keep me logged in
                                                    </label>
                                                </div>
                                                <a
                                                    href="#"
                                                    className="link-primary text-decoration-none"
                                                >
                                                    Forgot password?
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="d-grid my-3">
                                                <button
                                                    className="btn btn-primary btn-lg"
                                                    type="submit"
                                                >
                                                    Log in
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <p className="m-0 text-secondary text-center">
                                                Don&apos;t have an account?{' '}
                                                <Link
                                                    className="link-primary text-decoration-none"
                                                    to="/register"
                                                >
                                                    Sign up
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
