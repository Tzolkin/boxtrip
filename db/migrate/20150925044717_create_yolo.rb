class CreateYolo < ActiveRecord::Migration
  def change
    create_table :yolos do |t|
      t.references :customer_info
      t.string :origin_address
      t.float :origin_lat
      t.float :origin_lng
      t.string :destination_address
      t.float :destination_lat
      t.float :destination_lng
      t.decimal :distance
      t.string :distance_metric, defaul: 'm'
      t.integer :items_number
      t.date :estimated_date
      t.time :estimated_time
      t.decimal :quotation
      t.decimal :price
      t.boolean :accepted_conditions
      t.string :status

      t.timestamps
    end
  end
end
