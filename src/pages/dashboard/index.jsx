import React from 'react'
import { useLocation } from 'react-router-dom';
import styles from './style.module.css';

export const Dashboard = () => {
    const location = useLocation();
    const { email } = location.state || {};
  return (
    <>
    <h2>Hello, {email}</h2>
    <p>I hope you find it easy! </p>
    </>
  )
}
