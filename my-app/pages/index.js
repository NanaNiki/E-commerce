import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export function observeScroll(elements) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  elements.forEach((el) => observer.observe(el));
}

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-5 bg-stone-400 ${inter.className}`}
    >
    </main>
  )
}
