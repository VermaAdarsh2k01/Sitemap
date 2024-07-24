import Link from "next/link";
// import Controller from "~/components/Controller";
import FlowComponent from "~/components/FlowComponent";

export default function HomePage() {
  return (
    <main className="w-full h-screen flex items-center justify-between gap-8 bg-[#eae5db] p-4">
      <FlowComponent/>
      {/* <Controller/> */}
    </main>
  );
}
