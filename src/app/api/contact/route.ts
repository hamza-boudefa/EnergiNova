import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nom, prenom, email, telephone, entreprise, service, message, consentement } = body

    // Validate required fields
    if (!nom || !prenom || !email || !telephone || !service || !message || !consentement) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Format d'\''email invalide" },
        { status: 400 }
      )
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "energinova3@gmail.com",
        pass: "nzhj jjhy tucb giqr" // App password
      }
    })

    // Email content
    const mailOptions = {
      from: "energinova3@gmail.com",
      to: "energinova3@gmail.com",
      subject: `Nouveau message de contact - ${nom} ${prenom}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Nouveau message de contact
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Informations personnelles</h3>
            <p><strong>Nom:</strong> ${nom}</p>
            <p><strong>Prénom:</strong> ${prenom}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Téléphone:</strong> <a href="tel:${telephone}">${telephone}</a></p>
            ${entreprise ? `<p><strong>Entreprise:</strong> ${entreprise}</p>` : ""}
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Détails de la demande</h3>
            <p><strong>Service d'\''intérêt:</strong> ${getServiceName(service)}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <div style="background-color: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981;">
            <p style="margin: 0; color: #065f46;">
              <strong>Consentement:</strong> L'\''utilisateur a accepté que ses données personnelles soient utilisées pour traiter sa demande.
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
          <p style="color: #64748b; font-size: 14px; text-align: center;">
            Ce message a été envoyé depuis le formulaire de contact du site web EnergiNova Solutions.
          </p>
        </div>
      `
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: "Message envoyé avec succès" },
      { status: 200 }
    )

  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Erreur lors de l'\''envoi du message" },
      { status: 500 }
    )
  }
}

function getServiceName(serviceValue: string): string {
  const services: { [key: string]: string } = {
    "energies-renouvelables": "Énergies Renouvelables",
    "bim-management": "BIM Management & Modélisation",
    "diagnostics": "Diagnostics & Performance énergétique",
    "traitement-eaux": "Traitement des Eaux",
    "autre": "Autre"
  }
  return services[serviceValue] || serviceValue
}