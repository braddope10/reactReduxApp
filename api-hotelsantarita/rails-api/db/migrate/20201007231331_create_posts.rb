class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :cashier
      t.string :guest
      t.string :content
      t.string :room
      t.string :yearmonthday
      t.integer :amountpaid
      t.integer :amountofpeople
      t.integer :occupationperiod 

      t.timestamps
    end
  end
end
