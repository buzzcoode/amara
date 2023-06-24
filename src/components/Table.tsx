export const Table = () => {
  const tableItems = [
    {
        avatar: "https://www.ensa.co.ao/img/topo_logo_PT.png",
        name: "ENSA Seguros de Angola",
        phone_nimber: "10.000 kz",
        rembolso: "40%",
        position: "Sim",
        salary: "Sim",
        support: "Não"
    },
    {
        avatar: "https://www.nossaseguros.ao/assets/img/logo.png",
        name: "Nossa Seguros",
        phone_nimber: "9.000 kz",
        rembolso: "60%",
        position: "Sim",
        salary: "Sim",
        support: "Sim"
    },
    {
        avatar: "https://ao.sanlam.com/assets/frontend/img/logos/ao.png",
        name: "Sanlam Angola",
        phone_nimber: "12.000 kz",
        rembolso: "70%",
        position: "Não",
        salary: "Sim",
        support: "Não"
    },
    {
        avatar: "https://www.fidelidade.co.ao/style%20library/FidelidadeBranding/img/header/logo.png",
        name: "Fidelidade Seguros",
        phone_nimber: "8.000 kz",
        rembolso: "60%",
        position: "Sim",
        salary: "Sim",
        support: "Sim"
    },
    {
        avatar: "http://globalseguros.ao/wp-content/uploads/2021/10/logo_global_1200x119png-1024x102.png",
        name: "Global Seguros",
        phone_nimber: "7.000 kz",
        rembolso: "30%",
        position: "Não",
        salary: "Sim",
        support: "Sim"
    },
]

return (
    <div className="max-w-screen-xl mx-auto px-4 py-12 md:px-8">
        <div className="max-w-lg">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                Resultado da Análise
            </h3>
            {/* <p className="text-gray-600 mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p> */}
        </div>
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
                <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                    <tr>
                        <th className="py-3 px-6">Seguradora</th>
                        <th className="py-3 px-6">Preço</th>
                        <th className="py-3 px-6">Rembolso</th>
                        <th className="py-3 px-6">Danos Físicos</th>
                        <th className="py-3 px-6">Danos Materiais</th>
                        <th className="py-3 px-6">Suporte Autmóvel</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 divide-y">
                    {
                        tableItems.map((item, idx) => (
                            <tr key={idx}>
                                <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                    <img src={item.avatar} className="w-10 h-10 rounded-full" />
                                    <div>
                                        <span className="block text-gray-700 text-sm font-medium">{item.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.phone_nimber}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.rembolso}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.support}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
)
}
