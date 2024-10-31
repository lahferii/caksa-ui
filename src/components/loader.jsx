export const Loader = ({message}) => {
  return(
    <div className="absolute w-full h-full bg-white z-10 flex items-center justify-center duration-300">
      <p className="text-lg tracking-widest leading-relaxed">
        {message}
      </p>
    </div>
  )
}