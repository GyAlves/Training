const obj = {
    orderId: '1153630075068-01',
    invoiceNumber: '5',
    invoiceKey: '35210812605744000119550050000002571189911720',
    issuanceDate: '2021-08-16T00:00:00.000-03:00',
    trackingNumber: 'QE296690693BR',
    invoiceValue: 54900,
    invoiceUrl: 'http://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConsulta=completa&tipoConteudo=XbSeqxE8pl8=&nfe=35210812605744000119550050000002571189911720',
    items: [{ id: '897', quantity: 1, price: 54900 }],
    courier: null,
    type: 'Output'
}

const transform = (obj) => {
    const newObj = []
    for (const [key, value] of Object.entries(obj)) {
        newObj.push([`"${key}"`, `"${value}"`])
    }

    console.log(newObj)
}

const obj_transformed = transform(obj)
