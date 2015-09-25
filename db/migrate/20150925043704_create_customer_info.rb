class CreateCustomerInfo < ActiveRecord::Migration
  def change
    create_table :customer_infos do |t|
      t.string :name
      t.string :paternal_name
      t.string :maternal_name
      t.string :email
      t.string :phone_number

      t.timestamps
    end
  end
end
