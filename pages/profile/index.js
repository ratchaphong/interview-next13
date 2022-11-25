import Link from "next/link";

function Profile({ title, data }) {
  if (data.length > 0) {
    return (
      <div>
        <h1>{title}</h1>
        {data.map((d) => (
          <>
            <Link href={`/profile/${d.id}`}>
              <h3>{d.name}</h3>
            </Link>
            <Link href={`/profile/${d.id}/detail`}>
              <p>{d.phone}</p>
            </Link>
          </>
        ))}
      </div>
    );
  }
  return <p>not found.</p>;
}

export async function getServerSideProps() {
  // Fetch data from external API
  //   const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  //   const data = await res.json();
  let data = null;
  await fetch(`https://jsonplaceholder.typicode.com/users`).then((res) =>
    res.json().then((e) => {
      data = e;
      //   console.log(data);
    })
  );
  return {
    // Pass data to the page via props
    props: {
      title: "This is title from getServerSideProps (Server Side)",
      data: data,
    },
  };
}

export default Profile;

// Server-side Rendering (SSR)
// Next.js จะ pre- renders หน้า page ไปเป็น HTML บน server สำหรับ ทุก request. TTFB(Time to first byte)
// เป็นวิธีการที่ช้า แต่ข้อมูลจะถูกอัปเดตล่าสุดเสมอ

// Static-side Generation (SSG)
// Next.js จะ pre - renders หน้า page ไปเป็น HTML บน server ล่วงหน้าของแต่ละ request ในตอน build time
// โดย HTML จะ cached ด้วย CDN และพร้อมใช้งานทันที *

// Incremental Static Regeneration (ISG)
// เพิ่มและอัปเดตหน้า pre - rendered บางส่วนหลังจาก build time

// ref https://vercel.com/blog/nextjs-server-side-rendering-vs-static-generation
// ref https://blog.2my.xyz/2021/01/25/next-js-server-side-rendering-vs-static-generation/
