import Image from "next/image";

export default function Portfolio() {
  const list = [
    {
      id: 1,
      src: "/img/bape.png",
      title: "Bape",
    },
    {
      id: 2,
      src: "/img/sony.png",
      title: "Sony",
    },
    {
      id: 3,
      src: "/img/uber.png",
      title: "Uber",
    },
    {
      id: 4,
      src: "/img/aplle.png",
      title: "Apple",
    },
    {
      id: 5,
      src: "/img/north.png",
      title: "THE NORTH FACE",
    },
    {
      id: 6,
      src: "/img/nike.png",
      title: "Nike",
    },
    {
      id: 7,
      src: "/img/white.png",
      title: "Off-White™",
    },
    {
      id: 8,
      src: "/img/stussy.png",
      title: "Stussy",
    },
    {
      id: 9,
      src: "",
      title: "Nothing",
    },
  ];

  return (
    <div className="p-[100px_30px] lg:p-[100px]">
      <div className="flex flex-wrap gap-[100px] justify-center max-w-[1100px] m-auto">
        {list.map((item) => (
          <div key={item.id}>
            <div className="w-[300px] h-[200px] border-[3px] border-[#4619FB] rounded-[15px] flex justify-center">
              {item.src.trim() !== "" && (
                <Image
                  className="object-contain"
                  src={item.src}
                  alt="robias"
                  width={150}
                  height={150}
                />
              )}
            </div>
            <h3 className="font-bold text-[24px] mt-4">
              <span className="text-[#4619FB]">*</span>
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
