class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :bio
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :city
      t.string :state
      t.string :sex
      t.string :preference
      t.string :profile_pic
      t.integer :age

      t.timestamps
    end
  end
end
