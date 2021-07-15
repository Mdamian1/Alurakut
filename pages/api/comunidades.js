import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if (request.method === 'POST') {
        const TOKEN = '67e48191f0a167c28925fbe808b7e5';

        const client = new SiteClient(TOKEN)

        const registroCriado = await client.items.create({
            itemType: '968374', // ID do Model de "Communities" criado pelo Dato
            ...request.body
            // title: 'Comunidade de teste',
            // imageUrl: 'https://github.com/Mdamian1.png',
            // creatorSlug: 'mdamian1'
        })

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado
        });

        return;
    }

    response.status(404).json({
        message: "Não tem nada no GET, somente no POST"
    })
}