import Image from "next/image";

export default function About() {
  return (
    <div className="p-[100px_30px] lg:p-[100px_100px] flex flex-col items-center gap-[30px] md:gap-[70px]">
      <Image src="/img/Photo.png" alt="robias" width={190} height={190} />
      <p className="max-w-[310px] sm:max-w-[700px] font-normal text-[14px] md:text-[20px] md:leading-[20px]">
        I am __________, a 22-year-old Software Engineer from Tashkent,
        Uzbekistan, currently living in Warsaw, Poland.
        <br />
        <br />
        I am always contributing to developer events by giving a talk or as a
        mentor, especially the ones that engage women in tech. As a developer, I
        really want to see more diversity in the industry.
        <br />
        <br />
        Recently I experimented working standing and found it really useful to
        stay focused and a little healthier. I was able to transform my
        workstation with the books I read.
        <br />
        <br />
        In short, it&apos;s me, Azimjon, a friendly programmer from Uzbekistan.
        You can read my story of becoming a software engineer here.
      </p>
      <Image src="/img/About-bg.jpg" alt="robias" width={1240} height={400} />
      <p className="max-w-[310px] sm:max-w-[700px] font-normal text-[14px] md:text-[20px] md:leading-[20px]">
        I am __________, a 22-year-old Software Engineer from Tashkent,
        Uzbekistan, currently living in Warsaw, Poland.
        <br />
        <br />
        I am always contributing to developer events by giving a talk or as a
        mentor, especially the ones that engage women in tech. As a developer, I
        really want to see more diversity in the industry.
        <br />
        <br />
        Recently I experimented working standing and found it really useful to
        stay focused and a little healthier. I was able to transform my
        workstation with the books I read.
        <br />
        <br />
        In short, it&apos;s me, Azimjon, a friendly programmer from Uzbekistan.
        You can read my story of becoming a software engineer here.
      </p>
    </div>
  );
}
