import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full max-w-3xl place-self-center flex flex-col gap-4">
        <h2 className="font-bold self-center text-4xl">{`poop out your worst brain garbage right on to the web`}</h2>
        <p>{`if you still have braincells when you leave, we've done our job wrong`}</p>
        <Image
          src="https://msnicelupe.neocities.org/img/cats/zim1.gif"
          alt="zimboman the cat"
          width={`139`}
          height={`300`}
          className="w-full max-w-96 max-h-96 object-cover self-center"
        />
      </div>
    </>
  );
}
