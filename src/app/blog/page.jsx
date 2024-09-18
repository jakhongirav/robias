import { Button } from "@/components/ui/button";

export default function Blog() {
  const list = [
    {
      id: 1,
      time: "3.04",
      title: "Title of the post",
      description:
        "Description of the post and now Lorem Ipsum is simply dummy text of the...",
    },
    {
      id: 2,
      time: "3.04",
      title: "Title of the post",
      description:
        "Description of the post and now Lorem Ipsum is simply dummy text of the...",
    },
    {
      id: 3,
      time: "3.04",
      title: "Title of the post",
      description:
        "Description of the post and now Lorem Ipsum is simply dummy text of the...",
    },
    {
      id: 4,
      time: "3.04",
      title: "Title of the post",
      description:
        "Description of the post and now Lorem Ipsum is simply dummy text of the...",
    },
    {
      id: 5,
      time: "3.04",
      title: "Title of the post",
      description:
        "Description of the post and now Lorem Ipsum is simply dummy text of the...",
    },
    {
      id: 6,
      time: "3.04",
      title: "Title of the post",
      description:
        "Description of the post and now Lorem Ipsum is simply dummy text of the...",
    },
    {
      id: 7,
      time: "3.04",
      title: "Title of the post",
      description:
        "Description of the post and now Lorem Ipsum is simply dummy text of the...",
    },
    {
      id: 8,
      time: "3.04",
      title: "Title of the post",
      description:
        "Description of the post and now Lorem Ipsum is simply dummy text of the...",
    },
    {
      id: 9,
      time: "3.04",
      title: "Title of the post",
      description:
        "Description of the post and now Lorem Ipsum is simply dummy text of the...",
    },
  ];

  return (
    <div className="p-[30px] lg:p-[50px_100px] flex flex-col items-baseline sm:items-center gap-[60px]">
      <div className="flex gap-[30px]">
        <span className="p-[10px_15px] font-normal border-[1px] rounded-[50px] border-[#4619FB] text-[16px] sm:text-[24px] text-[#4619FB] cursor-pointer">
          Latest
        </span>
        <span className="p-[10px_15px] font-normal border-[1px] rounded-[50px] border-[#4619FB] text-[16px] sm:text-[24px] text-[#4619FB] cursor-pointer">
          Most popular
        </span>
        <span className="p-[10px_15px] font-normal border-[1px] rounded-[50px] border-[#4619FB] text-[16px] sm:text-[24px] text-[#4619FB] cursor-pointer">
          Oldest
        </span>
      </div>
      <div className="flex flex-wrap gap-[100px] sm:justify-center max-w-[1100px]">
        {list.map((post) => (
          <div
            key={post.id}
            className="pl-[20px] flex flex-col gap-[30px] border-l-[2px] border-black sm:max-w-[300px]"
          >
            <span className="font-normal text-[28px] opacity-[50%]">
              {post.time}
            </span>
            <h3 className="font-bold text-[32px]">{post.title}</h3>
            <p className="font-normal text-[16px]">{post.description}</p>
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        className="text-[24px] lg:p-[20px_390px] sm:p-[20px_150px] p-[20px_130px]"
      >
        See more
      </Button>
    </div>
  );
}
