import Head from "next/head";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import ProjectsGrid from "../components/ProjectsGrid";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Noah Lissner</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="wrapper">
        <Introduction />
        <ProjectsGrid />
      </main>
    </div>
  );
}