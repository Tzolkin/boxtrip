class Tailored < ActiveRecord::Base
  belongs_to :customer_info

  accepts_nested_attributes_for :customer_info
  after_create :send_mail
end
