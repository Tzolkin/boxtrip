class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.string :description
      t.integer :floor
      t.boolean :lift

      t.integer :building_type_id
      t.integer :destination_type_id
      t.references :btrip

      t.timestamps
    end
  end
end
