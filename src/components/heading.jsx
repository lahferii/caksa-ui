export const Heading = ({isHero, title, subtitle, btnPrimary, btnSecondary}) => {
  return(
    <article className={isHero ? "h-screen flex items-center pt-20" : "flex items-center"}>
      <div className="mb-5">
        <h1 className="text-3xl md:text-5xl tracking-widest mb-3">
          { title }
        </h1>

        <p className="md:text-lg text-zinc-900 leading-relaxed tracking-widest mb-5">
          { subtitle }
        </p>

        {(btnPrimary || btnSecondary) && (
          <div className="flex gap-5">
            {btnPrimary && (
              <button className="btn-primary">
                { btnPrimary }
              </button>
            )}
            {btnSecondary && (
              <button className="btn">
                { btnSecondary }
              </button>
            )}
          </div>
        )}
      </div>
    </article>
  )
}