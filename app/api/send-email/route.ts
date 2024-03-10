import { transporter } from '@/app/config/nodemailer'
import Mail from 'nodemailer/lib/mailer'

interface Data {
  from: string
  to: string
  subject: string
  text: any
  isContactEmail?: boolean
}

interface Error {
  cause?: string
  message: string
}

export async function POST(request: Request) {
  const data: Data = await request.json()

  const error = validateData(data)

  if (error.cause) {
    return Response.json(error, { status: 400 })
  }

  let ordersHTML = ''

  data.text.orders?.forEach((order: any) => {
    ordersHTML += `
        <div style="margin-top: 20px; border: 1px solid #ccc; padding: 10px; border-radius: 5px;">
            <h2 style="margin-top: 0;">${order?.product}</h2>
            <p><strong>Categoría:</strong> ${order?.category}</p>
            <p><strong>Ancho:</strong> ${order?.width} m</p>
            <p><strong>Alto:</strong> ${order?.height} m</p>
            ${
              order?.roller_blind
                ? `<p><strong>Tipo de Cortina:</strong> ${order.roller_blind}</p>`
                : ''
            }
            ${
              order?.command
                ? `<p><strong>Mando:</strong> ${order.command}</p>`
                : ''
            } 
        </div>
    `
  })

  const html: string = `      
   <div style='max-width: 600px; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); width: 100%;'>
      <div style='background-color: rgba(250,250,250,0.97); padding: 20px'>
  <h1 style="color: #333; text-align: center;">Nueva solicitud de presupuesto</h1>
    <div style="margin-top: 20px;">
        <h2 style="margin-top: 0;">Información de Contacto: </h2>
        <p><strong>Teléfono:</strong> ${data.text.phone}</p>
        <p><strong>Correo Electrónico:</strong> ${data.text.email}</p>
        <p><strong>Provincia:</strong> ${data.text.province}</p>
        <p><strong>Localidad:</strong> ${data.text.region}</p>
    </div>
    <div style="margin-top: 20px;">
        <h2 style="margin-top: 0;">Órdenes</h2>
        
              <p><strong>Envío:</strong> ${
                data?.text?.with_shipping ? 'Sí' : 'No'
              }</p>
            <p><strong>Instalación:</strong> ${
              data?.text?.with_installation ? 'Sí' : 'No'
            }</p>
            
        ${ordersHTML}
    </div>
      </div>
    </div>
`

  try {
    console.log(data)
    const mailOptions: Mail.Options = {
      from: data.from,
      sender: data.from,
      subject: data.subject,
      to: process.env.EMAIL,
      html: data.isContactEmail
        ? `    
    <div style="margin-top: 20px;">
        <h2 style="margin-top: 0;">Información de Contacto: </h2>
        <p><strong>Teléfono:</strong> ${data.text.phone}</p>
        <p><strong>Correo Electrónico:</strong> ${data.text.email}</p> 
        <hr/>
        <p><strong>Asunto:</strong> ${data.text.subject}</p> 
        <p><strong>Mensaje:</strong> ${data.text.message}</p> 
    </div>`
        : html,
    }

    await transporter.sendMail(mailOptions)

    return Response.json({ msg: 'Enviado' })
  } catch (e) {
    return Response.json(
      {
        ...error,
        cause: 'nodemailer fails',
      },
      { status: 500 }
    )
  }
}

const validateData = (data: Data): Error => {
  const error: Error = {
    message: 'Ha ocurrido un error',
  }

  if (!data.from) {
    error.cause = 'from value is missing'
  }

  return error
}
