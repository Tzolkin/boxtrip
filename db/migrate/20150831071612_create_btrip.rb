class CreateBtrip < ActiveRecord::Migration
  def change
    create_table :btrips do |t|
      t.references :customer
      t.datetime :moving_date
      t.string :btrip_type, default: 'quote'
      t.string :status

      t.timestamps
    end
  end
end
