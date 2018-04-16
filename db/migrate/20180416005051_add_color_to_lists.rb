class AddColorToLists < ActiveRecord::Migration[5.1]
  def change
    add_column :lists, :color, :string
  end
end
