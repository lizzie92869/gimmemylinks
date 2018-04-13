class CreateLists < ActiveRecord::Migration[5.1]
  def change
    create_table :lists do |t|
      t.string :name
      t.integer :user_id
      t.integer :link_id
    end
  end
end
