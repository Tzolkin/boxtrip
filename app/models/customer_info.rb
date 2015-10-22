class CustomerInfo < ActiveRecord::Base
  has_many :tailoreds
  has_many :yolos

  validates_presence_of :name, :paternal_name, :maternal_name, :email, :phone_number

  def full_name
    "%s %s %s" % [name, paternal_name, maternal_name]
  end
end
