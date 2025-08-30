"use client"

import Image from "next/image"

const brands = [
  { name: "Coding Ninjas", src: "https://files.codingninjas.in/new_cn_logo-29829.svg" },
  { name: "Masai School", src: "https://cdn.masaischool.com/masai-website/Masai_Logo_dark_web_b21aab8c62.webp" },
  { name: "Guvi Geek", src: "https://media.swipepages.com/2024/3/5fcde7acf64f9100108c719e/frame-4-750.webp" },
  { name: "GeeksforGeeks", src: "https://media.geeksforgeeks.org/gfg-gg-logo.svg" },
  { name: "Newton School", src: "https://images.jdmagicbox.com/v2/comp/bangalore/y3/080pxx80.xx80.220129213459.v4y3/catalogue/newton-school-hosur-road-bangalore-schools-tsd3sud9dn.jpg" },
  { name: "Nextwave", src: "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Nxtwave_Colored.svg" },
  { name: "Educative.io", src: "https://learn.educative.io/hubfs/Educative_Horizontal-Logo_Color.svg" },
  { name: "Target Test Prep", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnJy3fqxdZJKSDtaH5fKamkls4OU4qCLf9g&s" },
  { name: "Whizlabs", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrVg-7Av0bJszmpil8KqGdMldK2ZibRVSvrg&s" },
  { name: "BossCier Academy", src: "https://media.licdn.com/dms/image/v2/D4D22AQG3aGJ_6YOxJA/feedshare-shrink_800/feedshare-shrink_800/0/1683683201854?e=2147483647&v=beta&t=LqyjdAemewr9A0qe_efTUekf2Ks_ct9d4x08TtvFk8M" },
]

function Marquee({ direction = "left" }: { direction?: "left" | "right" }) {
  return (
    <div className="overflow-hidden w-full py-2">
      <div
        className={`flex gap-12 min-w-max animate-marquee whitespace-nowrap ${direction === "right" ? "animate-marquee-reverse" : ""}`}
        style={{ animationDuration: "30s" }}
      >
        {[...brands, ...brands].map((brand, idx) => (
          <div key={idx} className="w-40 h-16 flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
            <Image src={brand.src} alt={brand.name} width={160} height={64} objectFit="contain" />
          </div>
        ))}
      </div>
    </div>
  )
}

export function BrandsSection() {
  return (
    <section className="py-16 bg-muted/40">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Trusted by 100+ Leading Brands</h2>
        <Marquee direction="left" />
        <Marquee direction="right" />
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse linear infinite;
        }
      `}</style>
    </section>
  )
}
