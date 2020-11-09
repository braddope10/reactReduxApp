class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :associate
      t.string :guest
      t.string :content
      t.integer :amountpaid
      t.integer :occupationperiod 
      t.integer :beds
      t.integer :roomnumber

      t.timestamps
    end
  end
end
