import React from 'react'
import {Field, Form, Formik} from "formik";

export const LoginForm = (props) => (
    <div>
        <Formik
            initialValues={{login: '', password: '', rememberMe: '',}}
            onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2));
            }}
        >
            <Form>
                <div>
                    <label htmlFor="login">Login</label>
                    <Field id="login" name="login" placeholder="Login"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field id="password" name="password" placeholder="Password"/>
                </div>
                <div>
                    <label htmlFor="RememberMe">Remember Me</label>
                    <Field type={'checkbox'} name={'rememberMe'}/>
                </div>
                <div>
                    <button type="login">Login</button>
                </div>
            </Form>
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