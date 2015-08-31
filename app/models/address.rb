class Address < ActiveRecord::Base
  has_one :building_type
  has_one :destination_type
  belongs_to :btrip
end
