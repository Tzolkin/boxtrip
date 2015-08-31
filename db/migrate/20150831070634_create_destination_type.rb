class CreateDestinationType < ActiveRecord::Migration
  def change
    create_table :destination_types do |t|
      t.string :name
    end
  end
end
