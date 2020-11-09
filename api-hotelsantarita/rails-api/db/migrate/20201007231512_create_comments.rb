class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :associate
      t.string :note
      # t.integer :post_id

      t.timestamps
    end
  end
end
