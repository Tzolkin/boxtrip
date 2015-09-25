class CustomerInfo < ActiveRecord::Base
  has_many :tailoreds
  has_many :yolos
end
