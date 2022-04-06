import {USER_ID_COOKIE, USER_EMAIL_COOKIE, USER_TYPE_COOKIE} from './ConstantVariable';
import React, { useState, useEffect } from 'react';

const Authentication = () => {
  let goBackToLoginPage = (localStorage.getItem(USER_EMAIL_COOKIE) == null) ? true : false;
  return goBackToLoginPage;
}

const checkUserType = (type) => {
  return type === localStorage.getItem(USER_TYPE_COOKIE);
}

export { Authentication }
