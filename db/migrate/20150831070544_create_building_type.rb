class CreateBuildingType < ActiveRecord::Migration
  def change
    create_table :building_types do |t|
      t.string :name
    end
  end
end
