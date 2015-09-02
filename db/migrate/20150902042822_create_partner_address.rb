class CreatePartnerAddress < ActiveRecord::Migration
  def change
    create_table :partner_addresses do |t|
      t.references :partner
      t.string :street
      t.string :internal_number
      t.string :suburb
      t.string :state
      t.string :municipality
      t.string :postal_code

      t.timestamps
    end
  end
end
