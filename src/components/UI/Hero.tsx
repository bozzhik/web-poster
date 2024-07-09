import '@/assets/stylesheets/cell-hero.css'
import Button from '#/UI/Button'

export default function Hero() {
  return (
    <section className="relative w-full h-[40vh] bg-secondary rounded-[20px] sm:rounded-xl">
      <div className="flex flex-col items-center justify-center w-full h-full gap-2 text-white">
        <h1 className="text-6xl font-semibold">
          Руководство по <span className="text-primary">веб-плакатам</span>
        </h1>
        <p className="text-[20px] sm:text-[30px] font-light">
          Какой-то <span className="text-primary">текст</span> для описания руководства по <span className="text-primary">веб-плакатам</span> и генератор
        </p>
      </div>

      <div className="absolute z-10 w-full px-5 bottom-5">
        <Button href="/generate" className="w-full">
          Сгенерировать веб-плакат
        </Button>
      </div>

      <div className="absolute inset-0 rotate-180 GRID_BG"></div>
    </section>
  )
}
