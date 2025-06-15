'use client'

import React, { Suspense } from 'react'

import { useSearchParams } from 'next/navigation';


// function แสดงข้อมูลรายละเอียดสินค้า
function ProductDetailContent() {
    // ใช้ useSearchParams เพื่อดึงค่าพารามิเตอร์จาก URL
    // เช่น /pages/productDetail?id=1&title=Product1
    const searchParams = useSearchParams();
    return (
        <div>
            ProductDetail: {searchParams.get('id')} - {searchParams.get('title')}
        </div>
    )
}


function ProductDetail() {

    return (
        <>
            {/* ใช้ Suspense เพื่อรอโหลด ข้อมูล */}
            <Suspense fallback={<div>Loading...</div>}>
                {/* เรียกใช้ฟังก์ชันที่แสดงข้อมูลรายละเอียดสินค้า */}
                <ProductDetailContent />
            </Suspense>
        </>
    )
}

export default ProductDetail