'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import style from './products.module.css';
import Link from 'next/link';

// 'https://dummyjson.com/carts'


type Product = {
  id: number;
  title: string;
  thumbnail: string;
  // add other fields if needed
};

type Cart = {
  id: number;
  products: Product[];
  // add other fields if needed
};

export default function Products() {

  const [carts, setCarts] = React.useState<Cart[]>([]);

  useEffect(() => {
    const getCart = async () => {
      const res = await fetch('https://dummyjson.com/carts');
      const data = await res.json();
      console.log(data.carts);
      
      setCarts(data.carts);
    }
    getCart();
  }, []);

  return (
    <>
        <p>หน้าแสดงสินค้าทั้งหมด</p>

        <div className={style.container}>
          {carts.length > 0
            ? carts.map((item) => (
              <div className={style.card1} key={item.id}>
                
                {/* <p>{item.id}</p> */}

                {item.products.map((i) => (
                  <div className={style.card2} key={i.id}>

                    <Link className={style.card3} href={{
                      pathname: '/pages/productDetail',
                      query: {
                        id: i.id,
                        title: i.title,
                      }
                    }}>
                        <p>{i.title}</p>
                      <Image className={style.image} src={i.thumbnail} alt={i.title} width={50} height={50} />
                    </Link>

                  </div>
                ))}

              </div>
            ))
            : <p>Carts Loading...</p>}
        </div>
    </>
  )
}

