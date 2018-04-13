class List < ActiveRecord::Base
	validates :name, uniqueness: { scope: :user_id, message: "You already have a list with this name." }, if: :user_id?
end