class Tailored < ActiveRecord::Base
  belongs_to :customer_info

  accepts_nested_attributes_for :customer_info
  after_create :send_email

  private

  def send_email
    BtripsMailer.tailored(customer_info).deliver
  end
end
