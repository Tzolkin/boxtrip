class Yolo < ActiveRecord::Base
  belongs_to :customer_info

  accepts_nested_attributes_for :customer_info
  validates_presence_of :origin_addres,
                        :origin_lat,
                        :origin_lng,
                        :destination_addres,
                        :destination_lat,
                        :destination_lng,
                        :items_number,
                        :estimated_date

  # after_create :send_email

  private

  def send_email
  end
end
