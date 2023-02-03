import React from 'react'
import {Field, Form, Formik} from "formik";
import {LoginValidationSchema} from "../../Common/utils/validators/loginValidator";
import s from './/Login.module.css'

export const LoginForm = (props) => (
    <div>
        <Formik
            initialValues={{login: '', password: '', rememberMe: '',}}
            validationSchema={LoginValidationSchema}
            onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2));
            }}
        >
            {({errors, touched})=>(
            <Form>
                <div>
                    <label htmlFor="login">Login</label>
                    <Field id="login" name="login" placeholder="Login"/>
                    {errors.login && touched.login ? (<div className={s.requiredErrors}>{errors.login}</div>) : null}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field id="password" name="password" placeholder="Password"/>
                    {errors.password && touched.password ? (<div className={s.requiredErrors}>{errors.password}</div>) : null}
                </div>
                <div>
                    <label htmlFor="RememberMe">Remember Me</label>
                    <Field type={'checkbox'} name={'rememberMe'}/>
                </div>
                <div>
                    <button type="login">Login</button>
                </div>
            </Form>
            )}
        </Formik>
    </div>
);

const Login = (props) => {
    return <div>
        <h1>LOGIN</h1>
        <LoginForm/>
    </div>
}

export default Login;