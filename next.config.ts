import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  output: 'export', // กำหนดให้ Next.js สร้างไฟล์ HTML แบบ Static เมื่อทำการ build โปรเจกต์


  // เมื่อต้องการใช้รูปภาพพจากที่อื่น ต้องมาตั้งค่า ที่อยู่ของรูปภาพ
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com', // ชื่อโดเมนแหล่งที่อยู่ของรูปภาพที่ต้องการดึงมาใช้งาน
        // port: '',
        // pathname: '/account123/**',
        // search: '',
      },
    ],
    // unoptimized: true, // เมื่อดึงข้อมูลรูปภาพจากแหน่งที่อื่น จะทำการปรับขนาดของรูปภาพตามความเหมาะสม / ตามขนากจริง
  },
};

export default nextConfig;
