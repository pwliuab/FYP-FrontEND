import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import CircleGreenSVG from '../assets/circle.svg';
import CircleYellowSVG from '../assets/yellowCircle.svg';
import 'semantic-ui-css/semantic.min.css';
import { RedirectTo } from  './Redirection';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import './styles/loginForm.css';
import './styles/registerForm.css';
import { fetchData } from "./DataProvider";
import { useHistory } from "react-router-dom";
import {USER_ID_COOKIE, USER_EMAIL_COOKIE, USER_TYPE_COOKIE } from './ConstantVariable';
export default function FormValidation(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let history = useHistory();
    useEffect(() => {
      document.body.style.backgroundColor = '#E8F3EF';
      document.body.style.overflowX = 'hidden';
      // const user = rememberMe ? localStorage.getItem('user') : '';
    });

    const convertLabel2Key = (label) => {
      switch (label) {
        case "Email":
          return "email";
        case "Name":
          return "name";
        case "Organization Name":
          return "org";
        case "Password":
          return "password";
      }
    }
    const appendData = (data) => {
      let dt = new FormData();
      console.log("===========================================");

      for (let i = 0; i < data.target.childNodes.length; i ++) {
        let innerItems = data.target.childNodes[i];
        if (!innerItems.childNodes[0] || !innerItems.childNodes[1]) continue;
        let key = convertLabel2Key(innerItems.childNodes[0].innerHTML);
        console.log(key);
        dt.append(key, innerItems.childNodes[1].value);
        console.log(innerItems.childNodes[1].value);
        console.log(innerItems.childNodes[0].innerHTML);
      }

      dt.append("type", props.match.params.type);

      return dt;
    }

    const onSubmit = async (data) => {
      let formData = appendData(data);
      try {

        let resData = await fetchData("USER", "POST", formData);
        let email = '';
        for(var pair of formData.entries()) {
          if (pair[0] == 'email') {
            email = pair[1];
            break;
          }
        }

        localStorage.setItem(USER_EMAIL_COOKIE, email);
        localStorage.setItem(USER_TYPE_COOKIE, props.match.params.type);
        history.push(RedirectTo('centerPage', props.match.params.type));

      } catch (error) {
        alert(error);
        console.log(error);
      }

    }
    return (
      <div>
        <div style={{display: 'flex', flexDirection:'column'}}>
          <div style={{flex:1,top:0 ,width:'100%'}}>
            <Navbar type={props.match.params.type}/>
          </div>
          <div style={{flex:1,display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
            <div style={{position:'relative',left:-140, top: 85}}>
              {
                (props.match.params.type == 'job_seeker')?
                <img src={CircleGreenSVG} style={{ height: 700, width: 800 }} alt="CircleSVG" />
                  :
                <img src={CircleYellowSVG} style={{ height: 700, width: 800 }} alt="CircleSVG" />

              }
            </div>
            <div style={{height: '50%', paddingLeft:30, width:'50%', position:'relative',left:-70, top: 200,boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
              <div class="title" align="center">Registration Form</div>
              <Form onSubmit={onSubmit}>
                  <Form.Field>
                      <label style={{ fontSize:20, paddingBottom:10 }}>Name</label>
                      <input
                          onChange={(v) => {
                            console.log(v.target.value);
                          }}
                          placeholder='First Name'
                          type="text"
                          {...register("firstName", { required: true, maxLength: 10 })}
                      />
                  </Form.Field>
                  {errors.firstName && <p>Please check the Organization Name</p>}
                  <Form.Field>
                      <label style={{ fontSize:20, paddingBottom:10 }}>Organization Name</label>
                      <input
                          placeholder='Organization Name'
                          type="text"
                          {...register("Organization Name", { required: true, maxLength: 10 })}
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
