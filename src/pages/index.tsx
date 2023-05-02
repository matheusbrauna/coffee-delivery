import { CoffeeCard } from '@/components/CoffeeCard'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import Image from 'next/image'

export default function Home({ quantity = 0 }: { quantity: number }) {
  return (
    <main className="main-height">
      <section className='bg-[url("/assets/hero-bg.png")]'>
        <div className="container flex items-center py-24">
          <div className="flex-1">
            <h1 className="text-5xl font-bold leading-[130%] text-base-title">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="mt-4 text-xl leading-[130%] text-base-subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <div className="grid grid-cols-2 mt-16 gap-y-5 leading-[130%]">
              <div className="flex items-center gap-3">
                <ShoppingCart
                  size={16}
                  className="w-8 h-8 p-2 text-white rounded-full bg-brand-yellow-dark"
                  weight="fill"
                />
                <span>Compra simples e segura</span>
              </div>
              <div className="flex items-center gap-3">
                <Package
                  size={16}
                  className="w-8 h-8 p-2 text-white rounded-full bg-base-text"
                  weight="fill"
                />
                <span>Embalagem mantém o café intacto</span>
              </div>
              <div className="flex items-center gap-3">
                <Timer
                  size={16}
                  className="w-8 h-8 p-2 text-white rounded-full bg-brand-yellow"
                  weight="fill"
                />
                <span>Entrega rápida e rastreada</span>
              </div>
              <div className="flex items-center gap-3">
                <Coffee
                  size={16}
                  className="w-8 h-8 p-2 text-white rounded-full bg-brand-purple"
                  weight="fill"
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </div>
          </div>
          <div className="flex justify-end flex-1">
            <Image
              src="/assets/hero-coffee.png"
              alt=""
              width={476}
              height={360}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container py-8">
          <h2 className="text-3xl font-bold leading-[130%] text-base-subtitle">
            Nossos cafés
          </h2>
          <div className="gap-x-8 gap-y-10 coffees-grid mt-14 place-content-center">
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
          </div>
        </div>
      </section>
    </main>
  )
}
