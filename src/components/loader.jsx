export const Loader = ({message}) => {
  return(
    <div className="absolute w-full h-full z-10 flex">
      <div className="w-1/2 sm:w-full m-auto sm:w-full text-center">
        <p className="text-lg tracking-widest font-semibold leading-relaxed animate-pulse">
          {message}
        </p>
      </div>
    </div>
  )
}