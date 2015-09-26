module Btrips
  class YolosController < ApplicationController
    expose(:yolo, attributes: :yolo_params)

    def create
    end

    def confirm
    end

    private

    def yolo_params
      params.require(:yolo).permit(
        :origin_addres,
        :origin_lat,
        :origin_lng,
        :destination_addres,
        :destination_lat,
        :destination_lng,
        :distance,
        :items_number,
        :estimated_date,
        :accepted_conditions,
        customer_info_attributes: [:name, :paternal_name, :maternal_name, :email, :phone_number]
      )
    end
  end
end
