export const Card = ({title, subtitle, description}) => {
  return(
    <div className="h-max bg-white border-2 border-black p-5 mb-5 break-inside-avoid-column ">
      <h2 className="tracking-wider text-2xl mb-1">
        { title }
      </h2>
      {subtitle && (
        <h3 className="tracking-widest text-zinc-700 mb-5">
          {subtitle}
        </h3>
      )}
      {description && (
        <p className="tracking-wider leading-relaxed">
          { description }
        </p>
      )}
    </div>
  )
}