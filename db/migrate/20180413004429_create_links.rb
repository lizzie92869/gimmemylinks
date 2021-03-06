class CreateLinks < ActiveRecord::Migration[5.1]
  def change
    create_table :links do |t|
      t.integer :user_id
      t.integer :list_id
      t.string :name
      t.string :url
      t.integer :priority, :default => 3
    end
  end
end
