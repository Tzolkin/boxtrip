class CreateTailored < ActiveRecord::Migration
  def change
    create_table :tailoreds do |t|
      t.references :customer_info
      t.date :business_partner
      t.decimal :quotation
      t.decimal :price
      t.string :status

      t.timestamps
    end
  end
end
