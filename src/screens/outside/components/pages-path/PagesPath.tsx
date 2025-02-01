
type Props = {
  title : string
}
export default function PagesPath({title} : Props) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full ">
      <h2 className="font-semibold text-2xl capitalize">{title}</h2>

      <div className="flex flex-row gap-2">
        <span className="text-sm text-grayColor">Accueil  / </span>

        <span className="text-sm font-semibold">"{title}"</span>
      </div>
    </div>
  )
}
