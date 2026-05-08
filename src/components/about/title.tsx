import Hr from "@components/ui/Hr";

export default function Title({
  title,
  isMain = false,
}: {
  title: string;
  isMain: boolean;
}) {
  return (
    <div className="mt-10 flex flex-col justify-start items-center w-full md:pl-12">
      <div className="flex justify-center items-center flex-col my-5 self-start ">
        <Hr variant="long" />
        {isMain ? (
          <h1 className="text-3xl font-bold mt-3">{title}</h1>
        ) : (
          <h2 className="text-3xl font-bold mt-3">{title}</h2>
        )}
      </div>
    </div>
  );
}
