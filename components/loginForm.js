import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import CircleGreenSVG from '../assets/circle.svg';
import CircleYellowSVG from '../assets/yellowCircle.svg';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import './styles/loginForm.css'

export default function FormValidation() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    useEffect(() => {
      document.body.style.backgroundColor = '#E8F3EF';
      document.body.style.overflowX = 'hidden';
      // const user = rememberMe ? localStorage.getItem('user') : '';
    });
    return (
      <div>
        <div style={{display: 'flex', flexDirection:'column'}}>
          <div style={{flex:1,top:0 ,width:'100%'}}>
            <Navbar/>
          </div>
          <div style={{flex:1,display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
            <div style={{position:'relative',left:-140, top: 85}}>
              <img src={CircleYellowSVG} style={{ height: 700, width: 800 }} alt="CircleSVG" />
            </div>
            <div style={{height: '50%', paddingLeft:30, width:'50%', position:'relative',left:-70, top: 200,boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
              <div class="title" align="center">Registration Form</div>
              <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Field>
                      <label style={{ fontSize:20, paddingBottom:10 }}>First Name</label>
                      <input

                          placeholder='First Name'
                          type="text"
                          {...register("firstName", { required: true, maxLength: 10 })}
                      />
                  </Form.Field>
                  {errors.firstName && <p>Please check the First Name</p>}
                  <Form.Field>
                      <label style={{ fontSize:20, paddingBottom:10 }}>Last Name</label>
                      <input
                          placeholder='Last Name'
                          type="text"
                          {...register("lastName", { required: true, maxLength: 10 })}
                      />
                  </Form.Field>
                  {errors.lastName && <p>Please check the Last Name</p>}
                  <Form.Field>
                      <label style={{ fontSize:20, paddingBottom:10 }}>Email</label>
                      <input
                          placeholder='Email'
                          type="email"
                          {...register("email",
                              {
                                  required: true,
                                  pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                              })}
                      />
                  </Form.Field>
                  {errors.email && <p>Please check the Email</p>}
                  <Form.Field>
                      <label style={{ fontSize:20, paddingBottom:10 }}>Password</label>
                      <input
                          placeholder='Password'
                          type="password"
                          {...register("password", {
                              required: true,
                              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                          })}
                      />
                  </Form.Field>
                  {errors.password && <p>Please check the Password</p>}
                  <div align="center" style={{ paddingTop: 30, paddingBottom: 50}}><Button type='submit' style={{ fontSize: 20}}>Submit</Button></div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
}
