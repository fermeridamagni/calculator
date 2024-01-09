import Main from "@/components/ui/main";

export default function Loading() {
  return (
    <Main>
      <div className="py-6 px-8 flex flex-row justify-between w-full">
        <h1 className="text-3xl text-black">Magni Developer</h1>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="sm:m-5 m-5 text-center flex flex-col justify-center items-center gap-4 bg-white-primary shadow-xl border-2 border-gray-primary rounded-lg p-5">
          <div>
            <h1 className="text-5xl font-bold font-title">Cargando página...</h1>
          </div>
          <div>
            <p>Disculpa el tiempo de carga.</p>
            <p>Estamos teniendo una gran carga de recursos.</p>
          </div>
        </div>
      </div>
    </Main>
  );
};