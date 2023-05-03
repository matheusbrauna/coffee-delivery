import { SelectedCoffee } from '@/components/SelectedCoffee'

export default function Checkout() {
  return (
    <main className="main-height">
      <section>
        <div className="container flex gap-8 py-10">
          <div className="flex-[3]">
            <h2 className="font-bold text-lg leading-[130%] text-base-title">
              Complete seu pedido
            </h2>
            <div className="flex flex-col gap-3 mt-4">
              <div className="p-10 rounded-md bg-base-card"></div>
              <div className="p-10 rounded-md bg-base-card"></div>
            </div>
          </div>
          <div className="flex-[2]">
            <h2 className="font-bold text-lg leading-[130%] text-base-title">
              Cafés selecionados
            </h2>
            <div className="p-10 mt-4 bg-base-card rounded-tl-md rounded-br-md rounded-tr-[3rem] rounded-bl-[3rem]">
              <SelectedCoffee />
              <SelectedCoffee />
              <div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm">Total de itens</p>
                    <span>R$ 29,70</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm">Entrega</p>
                    <span>R$ 3,50</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-bold text-base-subtitle">
                      Total
                    </p>
                    <span className="text-xl font-bold text-base-subtitle">
                      R$ 33,20
                    </span>
                  </div>
                </div>
                <button className="w-full h-12 mt-6 text-sm font-bold uppercase rounded-md bg-brand-yellow text-base-white">
                  Confirmar pedido
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
