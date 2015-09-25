module Btrips
  class TailoredsController < ApplicationController
    expose(:tailored, attributes: :tailored_params)

    def create
      if tailored.save
        flash[:success] = t('notification.success_create', value: 'Servicio tailored')
        redirect_to btrips_thanks_path
      else
        flash[:error] = tailored.errors.full_messages
        redirect_to :back
      end
    end

    private

    def tailored_params
      params.require(:tailored).permit(
        customer_info_attributes: [:name, :paternal_name, :maternal_name, :email, :phone_number]
      )
    end
  end
end
