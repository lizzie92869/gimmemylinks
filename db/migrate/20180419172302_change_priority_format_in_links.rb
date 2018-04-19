class ChangePriorityFormatInLinks < ActiveRecord::Migration[5.1]
  def change
  	change_column :links, :priority, :integer, default: 3
  end
end
