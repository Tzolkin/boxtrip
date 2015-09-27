class Yolo < ActiveRecord::Base
  belongs_to :customer_info

  accepts_nested_attributes_for :customer_info
  validates_presence_of :origin_address,
                        :origin_lat,
                        :origin_lng,
                        :destination_address,
                        :destination_lat,
                        :destination_lng,
                        :items_number,
                        :estimated_date

  def customer_full_name
    "#{ customer_info.name } #{ customer_info.paternal_name } #{ customer_info.maternal_name }"
  end

  def send_email
    if self.accepted_conditions && self.status.blank?
      self.status = "Accepted"
      self.save
      BtripsMailer.tailored(customer_info).deliver
    end
  end
end
