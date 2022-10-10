import axios from "axios";
import React, { Component } from 'react';
import Tost from "./tost.component";

const API_URL = "http://localhost:8080/api/";

export default class SignUp extends Component {
    SignUpAction = async (formData) => {
        const URL = API_URL + "auth/signup";
        try {
            const response = await axios.post(URL,
                JSON.stringify(formData),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            const data = response.data;
            console.log(data)
            if (data.success) {
                alert(data.message)
            } else {
                alert("Error: " + data.message)
            }
        } catch (err) {
            if (!err.response) {
                alert('No Server Response');
            } else if (err.response.status === 500) {
                alert(err.response.data.message ? "Error : check your data please" : "")
            } else {
                alert('Error : Something went wrong');
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        this.SignUpAction({
            fullName: data.get('fullName'),
            email: data.get('email'),
            password: data.get('password'),
        });
        event.target.reset();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>
                <div className="mb-3">
                    <label>Full name</label>
                    <input
                        type="text"
                        name="fullName"
                        className="form-control"
                        placeholder="Full name"
                    />
                </div>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
        )
    }
}