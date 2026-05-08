import Hr from "@components/ui/Hr"

export default function Title({
  title,
  isMain = false,
}: {
  title: string
  isMain: boolean
}) {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-start md:pl-12">
      <div className="my-5 flex flex-col items-center justify-center self-start">
        <Hr variant="long" />
        {isMain ? (
          <h1 className="mt-3 text-3xl font-bold">{title}</h1>
        ) : (
          <h2 className="mt-3 text-3xl font-bold">{title}</h2>
        )}
      </div>
    </div>
  )
}
