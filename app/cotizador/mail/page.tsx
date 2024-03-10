'use client'

export default function Page() {
  const data = {
    from: 'danielaliendo98@gmail.com',
    to: 'danielaliendo98@gmail.com',
    subject: 'Cotización',
    text: {
      phone: '3123123123',
      email: 'danielaliendo98@gmail.com',
      province: 'Córdoba',
      region: 'Córdoba',
      orders: [
        {
          category: 'Interior',
          product: 'Cortinas roller',
          roller_blind: 'Blackout',
          width: '67',
          height: '77',
          command: 'Izquierdo',
          with_shipping: false,
          with_installation: false,
        },
      ],
    },
  }

  let ordersHTML = ''

  data.text.orders.forEach((order) => {
    ordersHTML += `
        <div style="margin-top: 20px; border: 1px solid #ccc; padding: 10px; border-radius: 5px;">
            <h2 style="margin-top: 0;">${order.product}</h2>
            <p><strong>Categoría:</strong> ${order.category}</p>
            <p><strong>Ancho:</strong> ${order.width} cm</p>
            <p><strong>Alto:</strong> ${order.height} cm</p>
            ${
              order.roller_blind
                ? `<p><strong>Tipo de Cortina:</strong> ${order.roller_blind}</p>`
                : ''
            }
            ${
              order.command
                ? `<p><strong>Comando:</strong> ${order.command}</p>`
                : ''
            }
            <p><strong>Envío:</strong> ${order.with_shipping ? 'Sí' : 'No'}</p>
            <p><strong>Instalación:</strong> ${
              order.with_installation ? 'Sí' : 'No'
            }</p>
        </div>
    `
  })

  const html: string = `      
   <div style='padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); width: 100%;'>
      <div style='background-color: rgba(250,250,250,0.97); padding: 20px'>
  <h1 style="color: #333; text-align: center;">Cotización</h1>
    <div style="margin-top: 20px;">
        <h2 style="margin-top: 0;">Información de Contacto</h2>
        <p><strong>Teléfono:</strong> ${data.text.phone}</p>
        <p><strong>Correo Electrónico:</strong> ${data.text.email}</p>
        <p><strong>Provincia:</strong> ${data.text.province}</p>
        <p><strong>Región:</strong> ${data.text.region}</p>
    </div>
    <div style="margin-top: 20px;">
        <h2 style="margin-top: 0;">Órdenes</h2>
        ${ordersHTML}
    </div>
      </div>
    </div>
`
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
