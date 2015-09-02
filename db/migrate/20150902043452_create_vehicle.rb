class CreateVehicle < ActiveRecord::Migration
  def change
    create_table :vehicles do |t|
      t.references :partner
      t.integer :year
      t.string :manufacturer
      t.string :model
    end
  end
end
