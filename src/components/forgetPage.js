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
              <div class="title" align="center">Forget Your Password? Reset Now</div>
              <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Field>
                      <label style={{ fontSize:20, paddingBottom:10 }}>New Password</label>
                      <input

                          placeholder='New Password'
                          type="text"
                          {...register("newPassword", { required: true, maxLength: 10 })}
                      />
                  </Form.Field>
                  {errors.newPassword && <p>Please check your new password. Make true they are the same.</p>}
                  <Form.Field>
                      <label style={{ fontSize:20, paddingBottom:10 }}>Confirm New Password</label>
                      <input
                          placeholder='Confirm New Password'
                          type="text"
                          {...register("confirmPassword", { required: true, maxLength: 10 })}
                      />
                  </Form.Field>
                  {errors.confirmPassword && <p>Please check your new password. Make true they are the same.</p>}

                  <div align="center" style={{ paddingTop: 30, paddingBottom: 50}}><Button type='submit' style={{ fontSize: 20}}>Submit</Button></div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
}
