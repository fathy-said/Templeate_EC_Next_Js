import React from 'react';
import style from "./NotFoundBox.module.css"
import { useRouter } from 'next/router';
const NotFoundBox = () => {
  let router = useRouter()
  return (
    <div className={style.page}>
      <div className="container h-100">
        <div className={style.box}>
          <h1>Page Not found</h1>
          <button onClick={() => {
            router.push("/")

          }}>Go Home</button>
        </div>
      </div>
    </div>
  );
}

export default NotFoundBox;
