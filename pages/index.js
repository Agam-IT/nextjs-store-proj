import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'

export default function Home() {
  
  return (
   <div>
     <Nav />
     <h1 className="text-center text-3xl mt-10">Welcome to This Store App</h1>
     {/* <Products /> */}
     {/* <Footer /> */}
    </div>
  )
}
