import React from 'react'
import {Field, Form, Formik} from "formik";
import {LoginValidationSchema} from "../../Common/utils/validators/loginValidator";
import s from './/Login.module.css'
import {connect} from "react-redux";
import {logInAcc} from "../../Redux/auth-reducer";
import {Navigate, NavLink} from "react-router-dom";

export const LoginForm = (props) => (
    <div>
        <Formik
            initialValues={{email: '', password: '', rememberMe: false,}}
            validationSchema={LoginValidationSchema}
            onSubmit={(values,{setSubmitting}) => {
                props.logInAcc(values.email, values.password, values.rememberMe);
                setSubmitting(false)
            }}
        >
            {({errors, touched, isSubmitting})=>(
            <Form>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field id="email" name="email" placeholder="Login"/>
                    {errors.email && touched.email ? (<div className={s.requiredErrors}>{errors.email}</div>) : null}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field id="password" name="password" placeholder="Password" type={'password'}/>
                    {errors.password && touched.password ? (<div className={s.requiredErrors}>{errors.password}</div>) : null}
                </div>
                <div>
                    <label htmlFor="RememberMe">Remember Me</label>
                    <Field type={'checkbox'} name={'rememberMe'}/>
                </div>
                <div>
                    <button type="submit" disabled={isSubmitting}>Login</button>
                </div>
            </Form>
            )}
        </Formik>
    </div>
);

const Login = (props) => {
    if(props.isAuth) {
        return <Navigate to='/profile'/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginForm logInAcc={props.logInAcc}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{logInAcc})(Login) ;