class CreateProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :profiles do |t|
      t.string :bio
      t.string :name
      t.string :city
      t.string :state
      t.string :sex
      t.string :preference
      t.string :profile_pic
      t.integer :age
      t.integer :user_id

      t.timestamps
    end
  end
end
