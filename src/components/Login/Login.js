import React from 'react'
import {Field, Form, Formik} from "formik";
import {LoginValidationSchema} from "../../Common/utils/validators/loginValidator";
import s from './/Login.module.css'
import {connect} from "react-redux";
import {logInAcc} from "../../Redux/auth-reducer";
import {Navigate} from "react-router-dom";

export const LoginForm = ({logInAcc, error, errorMessage, captcha}) => (
    <div>
        <Formik
            initialValues={{email: '', password: '', rememberMe: false,}}
            validationSchema={LoginValidationSchema}
            onSubmit={(values) => {
                logInAcc(values.email, values.password, values.rememberMe, values.captcha);
            }}
        >
            {({errors, touched, isSubmitting}) => (
                <Form>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field id="email" name="email" placeholder="Login"/>
                        {errors.email && touched.email ? (
                            <div className={s.requiredErrors}>{errors.email}</div>) : null}
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field id="password" name="password" placeholder="Password" type={'password'}/>
                        {errors.password && touched.password ? (
                            <div className={s.requiredErrors}>{errors.password}</div>) : null}
                    </div>
                    <div>
                        <label htmlFor="RememberMe">Remember Me</label>
                        <Field type={'checkbox'} name={'rememberMe'}/>
                    </div>
                    <div>
                        {error && errorMessage}
                    </div>
                    <div>
                        {captcha && <div>
                            <img src={captcha} alt="captchaImg"/>
                            <div>
                                <Field id="captcha" name="captcha" placeholder="captcha"/>
                                {errors.captcha && touched.captcha ? (
                                    <div className={s.requiredErrors}>{errors.captcha}</div>) : null}
                            </div>
                        </div>}
                    </div>
                    <div>
                        <button type={"submit"}> Login </button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
);

const Login = ({isAuth, logInAcc, error, captcha, errorMessage}) => {
    if (isAuth) {
        return <Navigate to='/profile'/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginForm logInAcc={logInAcc}
                   error={error}
                   captcha={captcha}
                   errorMessage={errorMessage}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captchaUrl,
    error: state.auth.error,
    errorMessage: state.auth.errorMessage,
    isSubmitting: state.auth.isSubmitting
})

export default connect(mapStateToProps, {logInAcc})(Login);