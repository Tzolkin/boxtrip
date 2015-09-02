class Partner
  class RegistrationsController < Devise::RegistrationsController
    # layout 'partner'

    private

    def partner_params
      params.require(:partner).permit(
        :name,
        :paternal_name,
        :maternal_name,
        :email,
        :password,
        :password_confirmation,
        :lada,
        :number,
        :birthdate,
        :bank_account,
        :smartphone,
        :good_health,
        :hear_about_us
      )
    end
  end
end
