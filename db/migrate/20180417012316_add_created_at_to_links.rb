class AddCreatedAtToLinks < ActiveRecord::Migration[5.1]
  def change
    add_column :links, :created_at, :datetime
  end
end
