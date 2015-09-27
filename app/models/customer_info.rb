class CustomerInfo < ActiveRecord::Base
  has_many :tailoreds
  has_many :yolos

  validates_presence_of :name, :paternal_name, :maternal_name, :email, :phone_number
end
