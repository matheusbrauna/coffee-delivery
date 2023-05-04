import { SelectedCoffee } from '@/components/SelectedCoffee'
import { MapPin } from '@phosphor-icons/react'

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
              <div className="p-10 rounded-md bg-base-card">
                <div className="flex items-start gap-2">
                  <div className='relative before:absolute before:bottom-0 before:content-[""] before:block before:h-[2px] before:right-1/2 before:translate-x-1/2 before:w-[14px] before:bg-brand-yellow-dark'>
                    <MapPin size={24} className="text-brand-yellow-dark" />
                  </div>
                  <div>
                    <h3 className="text-base-subtitle">Endereço de Entrega</h3>
                    <p className="text-sm">
                      Informe o endereço onde deseja receber seu pedido
                    </p>
                  </div>
                </div>

                <form className="grid w-full grid-cols-3 mt-8 gap-y-4 gap-x-3">
                  <div className="col-span-3">
                    <input
                      type="number"
                      className="p-3 border border-transparent rounded outline-none h-11 bg-base-input placeholder:text-base-label text-base-title focus:border-brand-yellow-dark"
                      placeholder="CEP"
                    />
                  </div>
                  <div className="col-span-3">
                    <input
                      type="text"
                      className="w-full p-3 border border-transparent rounded outline-none h-11 bg-base-input placeholder:text-base-label text-base-title focus:border-brand-yellow-dark"
                      placeholder="Rua"
                    />
                  </div>
                  <div className="col-span-1">
                    <input
                      type="number"
                      className="w-full p-3 border border-transparent rounded outline-none h-11 bg-base-input placeholder:text-base-label text-base-title focus:border-brand-yellow-dark"
                      placeholder="Número"
                    />
                  </div>
                  <div className="relative col-span-2">
                    <input
                      type="text"
                      className="w-full p-3 border border-transparent rounded outline-none h-11 bg-base-input placeholder:text-base-label text-base-title focus:border-brand-yellow-dark"
                      placeholder="Complemento"
                    ></input>
                    <span className="absolute text-xs italic text-base-label right-3 bottom-3">
                      Opcional
                    </span>
                  </div>
                  <div className="col-span-1">
                    <input
                      type="text"
                      className="w-full p-3 border border-transparent rounded outline-none h-11 bg-base-input placeholder:text-base-label text-base-title focus:border-brand-yellow-dark"
                      placeholder="Bairro"
                    />
                  </div>
                  <div className="col-span-1">
                    <input
                      type="text"
                      className="w-full p-3 border border-transparent rounded outline-none h-11 bg-base-input placeholder:text-base-label text-base-title focus:border-brand-yellow-dark"
                      placeholder="Cidade"
                    />
                  </div>
                  <div className="col-span-1">
                    <input
                      type="text"
                      className="w-full p-3 border border-transparent rounded outline-none h-11 bg-base-input placeholder:text-base-label text-base-title focus:border-brand-yellow-dark"
                      placeholder="UF"
                    />
                  </div>
                </form>
              </div>
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
