module Btrips
  class TailoredsController < ApplicationController
    expose(:tailored, attributes: :tailored_params)

    def create
      tailored.save

      redirect_to btrips_thanks_path
    end

    private

    def tailored_params
      params.require(:tailored).permit(
        customer_info_attributes: [:name, :paternal_name, :maternal_name, :email, :phone_number]
      )
    end
  end
end
