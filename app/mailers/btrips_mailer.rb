class BtripsMailer < ApplicationMailer
  default from: 'service@boxtrip.com'

  def sample_email(user)
    @user = user
    mail(to: @user.email, subject: 'Información de tu servicio')
  end

  def tailored(user)
    @user = user
    mail(to: @user.email, subject: 'Información de tu servicio Boxtrip')
  end
end
