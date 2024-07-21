import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { TodoWrapper } from "@/components/TodoWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.app}>
      <Head>
        <title>Todo List</title>
        <meta name="description" content="A simple todo list app using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.content}>
          <TodoWrapper />
        </div>
      </main>
    </div>
  );
}
