import Head from "next/head";
import ChatContainer from "../components/ChatContainer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Head>
        <title>Levy - AI Assistant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header bgColor="bg-[#0B2529]" />
      <main className="flex-grow">
        <ChatContainer />
      </main>
    </div>
  );
}
