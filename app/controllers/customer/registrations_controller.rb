class Customer
  class RegistrationsController < Devise::RegistrationsController
    private

    def user_params
      params.require(:user).permit(
        :name,
        :paternal_name,
        :maternal_name,
        :email,
        :password,
        :password_confirmation,
        :lada,
        :number
      )
    end
  end
end
