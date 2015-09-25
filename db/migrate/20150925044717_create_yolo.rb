class CreateYolo < ActiveRecord::Migration
  def change
    create_table :yolos do |t|
      t.references :customer_info
      t.string :source_address
      t.float :source_lan
      t.float :source_lng
      t.string :destination_address
      t.float :destination_lan
      t.float :destination_lng
      t.integer :items_number
      t.datetime :estimated_date
      t.decimal :quotation
      t.decimal :price
      t.boolean :accepted_conditions
      t.string :status

      t.timestamps
    end
  end
end
