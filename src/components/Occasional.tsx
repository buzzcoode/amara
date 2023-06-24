'use client'

import { useState } from 'react'
import DatePicker from 'react-datepicker'

export const Occasional = () => {
    const [selectTravelDate, setSelectTravelDate] = useState<Date | null>(null)
    const [selectBackDate, setSelectBackDate] = useState<Date | null>(null)

    const handleTravelDateChange = (date: Date | null) => {
        setSelectTravelDate(date)
    }

    const handleBackDateChange = (date: Date | null) => {
        setSelectBackDate(date)
    }

  return (
    <section className="py-14 bg-[#f7f7f7]">
    <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-lg mx-auto space-y-3 sm:text-center">
            <h2 className="font-semibold text-2xl text-slate-900">Seguro de Turismo - Questionário</h2>
            <p>
            Precisamos de algumas informações para te apresentar os seguros de turismo mais indicados para ti.
            </p>
            </div>
                <div className="mt-12 max-w-lg mx-auto">
                    <form
                        action="/resultado"
                        className="space-y-5"
                    >
                        <div>
                            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Tipo de seguro</label>
                            <select id="countries" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#023168] focus:border-[#023168] block w-full p-3">
                            <option selected>Escolha uma opção</option>
                            <option value="US">Turismo</option>
                            <option value="US">Disporto</option>
                            <option value="US">Paraquedismo</option>
                            <option value="US">Lazer</option>
                            </select>

                        </div> 
                        <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                            <div className="">
                                <label htmlFor="dateTravelPicker" className="font-medium">
                                    Quais as datas da viagem que vais fazer?
                                </label>
                                <div className="flex gap-4">
                                <DatePicker
                                    id="dateTravelPicker"
                                    selected={selectTravelDate}
                                    onChange={handleTravelDateChange}
                                    placeholderText="Data inicio"
                                    className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-[#023168] focus:border-[#023168] sm:text-sm rounded-md"
                                />

                                <DatePicker
                                    id="dateBackPicker"
                                    selected={selectBackDate}
                                    onChange={handleBackDateChange}
                                    placeholderText="Data fim"
                                    className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-[#023168] focus:border-[#023168] sm:text-sm rounded-md"
                                />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="font-medium">
                                Para onde vai viajar?
                            </label>
                            <input
                                type="text"
                                className="w-full mt-2 px-3 py-3 text-gray-500 bg-transparent outline-none border focus:border-[#023168] shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Quantas pessoas vão viajar?
                            </label>
                            <input
                                type="text"
                                className="w-full mt-2 px-3 py-3 text-gray-500 bg-transparent outline-none border focus:border-[#023168] shadow-sm rounded-lg"
                            />
                        </div>
                        <button
                            className="w-full px-4 py-4 text-white font-medium bg-[#023168] rounded-lg duration-150"
                        >
                            Simular
                        </button>
                    </form>
                </div>
            </div>
        </section>
  )
}