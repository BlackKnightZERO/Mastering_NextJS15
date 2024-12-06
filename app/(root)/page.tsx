import Hello from "../components/hello";

export default function Home() {
  console.log('Server Comp')
  return (
    <>
    <h1 className="text-3xl">Welcome to Next JS</h1>
    <Hello />
    </>
  );
}
