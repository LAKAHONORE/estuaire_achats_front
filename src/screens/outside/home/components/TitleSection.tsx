
type Props = {
  title: string,
}
export default function TitleSection({title} : Props) {
  return (
    <div className="flex justify-start items-start w-full px-4 md:px-16 mb-6 md:mb-16">
        <h2 className="text-sm md:text-2xl text-black font-semibold">
          {title}
        </h2>
    </div>
  )
}
