class AddExpirationDateToLink < ActiveRecord::Migration[5.1]
  def change
  	add_column :links, :expiration_date, :datetime
  end
end
