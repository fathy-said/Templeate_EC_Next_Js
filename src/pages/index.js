import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { testAction } from '../../RTK/Reducer/CartReducer'

export default function Home() {
    let dispatch = useDispatch();
    return (
        <>
            <Button
                onClick={() => {
                    dispatch(testAction());
                }}
            >
                body
            </Button>
        </>
    );
}
