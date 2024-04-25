//import components
import { ButtonTest } from "./ui/Global/buttonTest";

export default function Home() {
  return (
    <main className="w-full h-screen bg-slate-900 flex justify-center items-center">
      <h1 className="text-slate-100"> TEST </h1>
      <ButtonTest textButton="Desayunos" path="/desayunos" />
    </main>
  );
}
