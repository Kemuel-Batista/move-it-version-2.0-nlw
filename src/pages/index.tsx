import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import Link from 'next/link';

import styles from '../styles/Pages/Login.module.css';

export default function LoginPage(){
  return (
    <div className={styles.loginContainer}>
      <div className={styles.background}></div>
      <div className={styles.formContainer}>
         <img src="/icons/Logo.svg" alt="Move It"/> 

         <div className={styles.formContent}>
          <strong>Bem-vindo</strong>
          
          <div className={styles.formDescription}>
              <img src="/icons/Github.svg" alt="Github"/>
              <p>Faça login com seu Github para começar</p>
          </div>

          <div className={styles.formSubmit}>
            <input 
              type="text" 
              className={styles.input} 
              placeholder="Digite seu username"
            />
            <Link href="/posts/HomePage">
              <a><FiArrowRight size={24} color="#FFF"/></a>
            </Link>
          </div>
         </div>
      </div>
    </div>
  )
}