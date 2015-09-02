class Partner < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :confirmable

  has_one :partner_address
  has_one :vehicle

  accepts_nested_attributes_for :partner_address
  accepts_nested_attributes_for :vehicle
end
