module Btrips
  class YolosController < ApplicationController
    expose(:yolo, attributes: :yolo_params)

    def create
      if yolo.save
        flash[:success] = t('notification.success_create', value: 'Servicio yolo')
        redirect_to btrips_yolo_confirm_path(yolo.id)
      else
        flash[:error] = yolo.errors.full_messages
        redirect_to :back
      end
    end

    def confirm
      yolo = Yolo.find(params['yolo_id'])
      if yolo.accepted_conditions
        redirect_to btrips_thanks_path
      end
    end

    def update
      if yolo.save
        yolo.send_email
        flash[:success] = t('notification.accepted', value: 'Servicio yolo')
        redirect_to btrips_thanks_path
      else
        flash[:error] = yolo.errors.full_messages
        redirect_to :back
      end
    end

    def calc_estimated
      estimate = Estimate.new(params['distance'], params['items'], params['mins'])

      total = estimate.calculate

      render json: { estimated: total[:grand_total] }
    end

    private

    def yolo_params
      params.require(:yolo).permit(
        :origin_address,
        :origin_lat,
        :origin_lng,
        :destination_address,
        :destination_lat,
        :destination_lng,
        :distance,
        :items_number,
        :estimated_date,
        :estimated_time,
        :quotation,
        :accepted_conditions,
        :time,
        customer_info_attributes: [:name, :paternal_name, :maternal_name, :email, :phone_number]
      )
    end
  end
end
