class BtripsMailer < ApplicationMailer
  default from: 'service@boxtrip.com.mx'

  def sample_email(user)
    @user = user
    mail(to: @user.email, subject: 'Información de tu servicio')
  end

  def tailored(user)
    @user = user
    mail(to: @user.email, subject: 'Información de tu servicio Tailored Boxtrip')
  end

  def yolo(yolo)
    @user = yolo.customer_info
    @yolo = yolo
    mail(to: @user.email, subject: 'Información de tu servicio Yolo Boxtrip')
  end
end
