class Btrip < ActiveRecord::Base
  belongs_to :customer
  has_one :extra_service
  has_many :addresses
end
