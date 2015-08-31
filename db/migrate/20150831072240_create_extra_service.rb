class CreateExtraService < ActiveRecord::Migration
  def change
    create_table :extra_services do |t|
      t.references :btrip
      t.boolean :origin_flown
      t.boolean :destination_flown
      t.boolean :inventory_fragile
      t.boolean :trash
      t.boolean :packaging
      t.boolean :unpaked
      t.boolean :accompany_supplier

      t.timestamps
    end
  end
end
